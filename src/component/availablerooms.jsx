import { useEffect, useState, useRef } from 'react';
import {
    Flex, Box, Text, Button, Heading, Input, HStack, Image, Stack, Spacer,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ButtonGroup,
    IconButton,
    useToast,
    useBoolean,
} from '@chakra-ui/react';
import { AddIcon, ArrowForwardIcon, ChevronDownIcon, DeleteIcon, InfoOutlineIcon, MinusIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import Hotelimages from './hotelimages';
import ViewAllPhotos from './view_all_photos';
import Calendar from './calendar';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import Smallslider from './smallslider';
let daydiff = (checkin, checkout) => {
    var d1 = new Date(checkin);
    var d2 = new Date(checkout);
    var diff = d2.getTime() - d1.getTime();
    var daydiff = diff / (1000 * 60 * 60 * 24);
    // setNight(daydiff)
    return daydiff
}

const Availablerooms = ({ data, destinationId, hotelid }) => {

    let navigate = useNavigate()
    const toast = useToast()
    let payble = useRef({ total: 0 })
    let startingDate = useRef()
    let endingDate = useRef()
    let [money, setMoney] = useState('INR')
    const [flag, setFlag] = useBoolean()
    let [rooms, setRooms] = useState({ ...data })
    let [parameter, setParameter] = useSearchParams()
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let day = tomorrow.getDate()
    let month = tomorrow.getMonth() + 1
    if (month == 13) {
        month = 1
    }
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    let year = tomorrow.getFullYear()
    tomorrow.setDate(tomorrow.getDate() + 1)
    let tday = tomorrow.getDate()
    let tmonth = tomorrow.getMonth() + 1
    if (tmonth == 13) {
        tmonth = 1
    }
    if (tmonth < 10) {
        tmonth = '0' + tmonth
    }
    if (tday < 10) {
        tday = '0' + tday
    }
    let tyear = tomorrow.getFullYear()

    let [bookedRooms, setBookedRooms] = useState([])
    let [checkin, setCheckin] = useState(() => {
        // `${year}-${month}-${day}`
        let x = parameter.get('checkin')
        if (x != 'null') {

            return x
        } else {

            return `${year}-${month}-${day}`
        }

    })
    let [checkout, setCheckout] = useState(() => {
        let x = parameter.get('checkout')
        if (x != 'null') {
            return x
        } else {
            return `${tyear}-${tmonth}-${tday}`
        }
    })
    let x = (daydiff(checkin, checkout))
    let [totalNight, setNight] = useState(x);



    let increaseBed = (id, x) => {

        if (x == 1) {
            let totalBed = 0;
            bookedRooms.map((el, ind) => {
                totalBed += el.bed;
            })
            if (totalBed >= 10) {
                toast({

                    status: 'info',
                    isClosable: true,
                    position: 'top-right',
                    bg: 'black',
                    render: () => (
                        <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                            <InfoOutlineIcon />   can book max 10 units.
                        </Box>
                    ),
                })
                return;
            }
        }

        let index = 0;
        bookedRooms.map((ele, ide) => {
            if (ele.id == id) {
                index = ide;
            }
        })
        let obj = {
            ...bookedRooms[index],
            bed: bookedRooms[index].bed + x
        }
        if (obj.bed == 0) {
            bookedRooms.splice(index, 1)
            setBookedRooms([...bookedRooms])
            return
        }
        bookedRooms.splice(index, 1)

        bookedRooms.push(obj)
        setBookedRooms([...bookedRooms])


    }

    let addToBook = (el) => {
        let totalBed = 0;
        bookedRooms.map((el, ind) => {
            totalBed = el.bed;
        })
        if (totalBed >= 10) {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon />   can book max 10 units.
                    </Box>
                ),
            })
            return;
        }
        let obj = {
            id: el.id,
            image: el.roomimages[0],
            pricepernight: el.pricepernight,
            type: el.type,
            currency: money,
            bed: 1
        }
        setBookedRooms([...bookedRooms, obj])
    }



    let [date, setDates] = useState({ start: parameter.get('checkin'), end: parameter.get('checkout'), smin: `${year}-${month}-${day}`, emin: `${year}-${month}-${day}` })

    let icon = [{ icon: '🗝', type: 'locker' },
    { icon: '♨️', type: 'hotwater' },
    { icon: '🧺', type: 'Laundry Services (Extra)' },
    { icon: '📶', type: 'Free Wi-Fi' },
    { icon: '', type: 'Air conditioning' },
    { icon: '⛰', type: '24/7 Reception' },
    { icon: '💡', type: 'Bedside Lamps' },
    { icon: '🥞', type: 'Breakfast (Extra)' },
    { icon: '🌊', type: 'Sea view' },
    { icon: '🚿', type: 'Shower' },
    ]


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('full')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['full']

    useEffect(() => {
        setBookedRooms([...bookedRooms]);

        const compareDates = (d1, d2) => {
            let date1 = new Date(d1).getTime();
            let date2 = new Date(d2).getTime();

            if (date1 < date2) {
                return true
            } else if (date1 > date2) {
                return false
            } else {
                return false;
            }
        };
        let boolean = true;
        if (compareDates(checkin, checkout)) {
            var d1 = new Date(checkin);
            var d2 = new Date(checkout);
            var diff = d2.getTime() - d1.getTime();
            var daydiff = diff / (1000 * 60 * 60 * 24);
            setNight(daydiff)
        } else {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon /> Please input correct calendar dates.
                    </Box>
                ),
            })
            startingDate.current.value = checkin
            endingDate.current.value = checkout
        }
        // setBookedRooms([
        //     ...JSON.parse(localStorage.getItem('bookedRooms')) || []
        // ])

    }, [money, checkin, checkout])
    return (
        <div>
            <Box p={4} pt={30} pb={30} bg={'#e8f0f2'} mt={4}>

                <Flex gap={4} flexDirection={['column', 'column', 'row']} >

                    <Box flex='2' >
                        <Flex pt={3} pb={2} position={'sticky'} bg={'#e8f0f2'} top={0} zIndex={2} textAlign={['center', 'center', 'left']} flexDirection={['column', 'column', 'row']} gap={1} alignItems={'center'} justifyContent={'center'} >
                            <Box minW={{ lg: '300px' }}  >
                                <Heading size={'lg'}>
                                    Book your stay
                                </Heading>
                                <Text fontWeight={'bolder'} color={'grey'}>
                                    Select from a range of beautiful rooms
                                </Text>
                            </Box>
                            <Box >

                                <Menu>
                                    {/* <MenuButton  rightIcon={<ChevronDownIcon />}>
                                        Actions
                                    </MenuButton> */}
                                    <MenuButton as={Button} p={0} fontWeight={'bold'} rightIcon={<ChevronDownIcon />} variant={'ghost'} color={'#f26c4f'}>
                                        {money}
                                    </MenuButton>


                                    <MenuList p={3} textAlign={'left'}>
                                        <div style={{ height: '200px', width: '250px', overflow: 'auto' }} >
                                            <MenuItem _hover={{ bg: 'white' }} fontWeight={'bold'}>SELECTED CURRENCY</MenuItem>
                                            <MenuItem _hover={{ bg: '#f26c4f' }} mb={2} borderRadius={10} bg={'#f26c4f'} color={'white'} fontWeight={'bold'}>{money == 'INR' ? <Text>INR : Indian Rupee</Text> : <Text>USD: US Dollar</Text>}</MenuItem>
                                            <hr />
                                            <MenuItem _hover={{ bg: 'white' }} fontWeight={'bold'}>OTHER CURRENCY</MenuItem>
                                            <MenuItem onClick={() => { setMoney('INR') }}>INR: Indian Rupee</MenuItem>
                                            <MenuItem onClick={() => { setMoney('USD') }}>USD: US Dollar</MenuItem>
                                            <MenuItem>EUR: Euro</MenuItem>
                                            <MenuItem>GBP: British Pound Sterling</MenuItem>
                                            <MenuItem>AED: United Arab Emirates Dirham</MenuItem>
                                            <MenuItem>ANG: Netherlands Antillean Guilder</MenuItem>
                                            <MenuItem>ZAR: South African Rand</MenuItem>
                                            <MenuItem>ZWL: Zimbabwean Dollar</MenuItem>
                                        </div>
                                    </MenuList>


                                </Menu>
                            </Box>
                            <Box w={'100%'} borderRadius={10} mr={2} ml={2} boxShadow='xs'>
                                <Flex borderRadius={10} flexDirection={['column', 'row', 'row']} bg={'white'} alignItems={'center'}>
                                    <Input ref={startingDate} border={'none'} borderRadius={'5px 0 0 5px'} type='date' onChange={(e) => {
                                        setCheckin(e.target.value)
                                    }} defaultValue={checkin} min={date.smin} />
                                    <Box> <ArrowForwardIcon /></Box>
                                    <Input ref={endingDate} border={'none'} borderRadius={'0 5px 5px 0'} onChange={(e) => {
                                        setCheckout(e.target.value)
                                    }} type='date' defaultValue={checkout} min={date.emin} />
                                </Flex>
                            </Box>
                        </Flex>
                        <Box>
                            {
                                rooms.rooms.map((el, ind) => {
                                    // const [currentSlide, setCurrentSlide] = useState(0);
                                    // // const slidesCount = slides.length;
                                    let boolean = false
                                    let index = -1;
                                    // const prevSlide = (slidesCount) => {
                                    //     setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
                                    // };

                                    // const nextSlide = (slidesCount) => {
                                    //     setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
                                    // };

                                    // const setSlide = (slide) => {
                                    //     setCurrentSlide(slide);
                                    // };

                                    // const carouselStyle = {
                                    //     transition: "all .5s",
                                    //     ml: `-${currentSlide * 100}%`,
                                    // };
                                    return <Accordion allowToggle mt={10} mb={4} >
                                        <AccordionItem >
                                            {/* <AccordionButton p={0}> */}
                                            < Box cursor={'pointer'} boxShadow='base' borderRadius={10} key={ind} bg={'white'} >
                                                <Flex alignItems={'center'} flexDirection={['column', 'row', 'row']}>
                                                    {/* <Flex
                                                        w={['full', "320px", "320px"]}
                                                        bg="#edf3f8"
                                                        _dark={{
                                                            bg: "#3e3e3e",
                                                        }}
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        aria-expanded="false"
                                                    // h={'150px'}

                                                    >
                                                        <Flex borderRadius={4} w="full" overflow="hidden" pos="relative">
                                                            <Flex h="auto" w="full" {...carouselStyle}>
                                                                {el.roomimages.map((slide, sid) => (
                                                                    <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                                                                        <Text
                                                                            color="white"
                                                                            fontSize="xs"
                                                                            p="8px 12px"
                                                                            pos="absolute"
                                                                            top="0"
                                                                        >
                                                                            {sid + 1} / {el.roomimages.length}
                                                                        </Text>
                                                                        <Image
                                                                            src={slide}
                                                                            alt="carousel image"
                                                                            boxSize="full"
                                                                            backgroundSize="cover"
                                                                            onClick={() => handleSizeClick('full')}
                                                                        />
                                                                    </Box>
                                                                ))}
                                                            </Flex>
                                                            <Text {...arrowStyles} left="0" onClick={() => { prevSlide(el.roomimages.length) }}>
                                                                &#10094;
                                                            </Text>
                                                            <Text {...arrowStyles} right="0" onClick={() => { nextSlide(el.roomimages.length) }}>
                                                                &#10095;
                                                            </Text>
                                                            <HStack justify="center" pos="absolute" bottom="8px" w="full">
                                                                {Array.from({
                                                                    length: el.roomimages.length,
                                                                }).map((_, slide) => (
                                                                    <Box
                                                                        key={`dots-${slide}`}
                                                                        cursor="pointer"
                                                                        boxSize={["7px", null, "7px"]}
                                                                        m="0 2px"
                                                                        bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                                                                        rounded="50%"
                                                                        display="inline-block"
                                                                        transition="background-color 0.6s ease"
                                                                        _hover={{
                                                                            bg: "blackAlpha.800",
                                                                        }}
                                                                        onClick={() => setSlide(slide)}
                                                                    >
                                                                    </Box>
                                                                ))}
                                                            </HStack>
                                                        </Flex>
                                                    </Flex> */}
                                                    <Smallslider el={el} ind={ind} handleSizeClick={handleSizeClick} onOpen={onOpen} setSize={setSize} />

                                                    <Flex flexDirection={'column'} width={'full'} p={3} gap={1} >
                                                        <Flex width={'full'}>
                                                            <Stack >
                                                                <Heading noOfLines={1} size={'sm'}>{el.type} </Heading>
                                                                <Text textAlign={'left'} width={'auto'} fontSize={'10px'} >👤 x {el.person}</Text>
                                                            </Stack>
                                                            <Spacer />
                                                            <Stack>
                                                                <Heading size={'sm'}>{
                                                                    money == 'INR' ? <>₹ {el.pricepernight}</> : <>$ {(el.pricepernight / 82.12).toFixed(2)}</>
                                                                }<span style={{ fontSize: '12px', fontWeight: 'normal' }}>/night</span></Heading>
                                                            </Stack>

                                                        </Flex>
                                                        <Box >
                                                            <Text textAlign={'left'} fontSize={'12px'} noOfLines={1}>{el.desc}</Text>
                                                        </Box>
                                                        <Flex flexWrap={'wrap'} gap={3}>
                                                            {icon.map((el, ind) => {
                                                                return <Tooltip key={ind} label={el.type} placement='top-end'>
                                                                    <Text fontSize={'12px'}>{el.icon}</Text>
                                                                </Tooltip>
                                                            })}
                                                        </Flex>
                                                        <Flex flexWrap={'wrap'} alignItems={'center'}>
                                                            <AccordionButton w={'150px'} _hover={{ bg: 'none' }} p={0}>
                                                                <Box fontSize={'12px'} fontWeight={'bold'} color={'#f26c4f'} variant={'outline'} colorScheme='none'>Availability calendar <AccordionIcon /></Box>
                                                            </AccordionButton>
                                                            <Spacer />
                                                            {/* <ButtonGroup size='xs' isAttached variant='outline'>
                                                                    <IconButton size='xs' onClick={() => { increaseBed(el.id, -1) }} _hover={{ bg: '#f26c4f' }} color='white' bg='#f26c4f' aria-label='Add to friends' icon={<MinusIcon />} />
                                                                    <Button size='xs'>
                                                                        {
                                                                            1
                                                                        }
                                                                    </Button>
                                                                    <IconButton size='xs' onClick={() => { increaseBed(el.id, 1) }} _hover={{ bg: '#f26c4f' }} color='white' bg='#f26c4f' aria-label='Add to friends' icon={<AddIcon />} />
                                                                </ButtonGroup> */}

                                                            {/* <Button onClick={() => { addToBook(el) }} size='xs' fontSize={'12px'} boxShadow={'lg'} _hover={{ border: '1px', color: '#f26c4f', bg: 'white' }} color={'white'} bg={'#f26c4f'} variant={'solid'}>Select Bed</Button> */}

                                                            {
                                                                bookedRooms.map((ele, ind) => {
                                                                    if (el.id == ele.id) {
                                                                        boolean = true;
                                                                        index = ind;
                                                                        return;
                                                                    }
                                                                })
                                                            }
                                                            {
                                                                !boolean && <Button onClick={() => { addToBook(el) }} size='xs' fontSize={'12px'} boxShadow={'lg'} _hover={{ border: '1px', color: '#f26c4f', bg: 'white' }} color={'white'} bg={'#f26c4f'} variant={'solid'}>Select Bed</Button>
                                                            }
                                                            {
                                                                boolean &&
                                                                <ButtonGroup size='xs' isAttached variant='outline'>
                                                                    <IconButton size='xs' onClick={() => { increaseBed(el.id, -1) }} _hover={{ bg: '#f26c4f' }} color='white' bg='#f26c4f' aria-label='Add to friends' icon={<MinusIcon />} />
                                                                    <Button size='xs'>
                                                                        {
                                                                            bookedRooms[index].bed
                                                                        }
                                                                    </Button>
                                                                    <IconButton size='xs' onClick={() => { increaseBed(el.id, 1) }} _hover={{ bg: '#f26c4f' }} color='white' bg='#f26c4f' aria-label='Add to friends' icon={<AddIcon />} />
                                                                </ButtonGroup>
                                                            }

                                                        </Flex>
                                                    </Flex>

                                                </Flex>
                                                {/* <Modal onClose={onClose} size={size} isOpen={isOpen}>
                                                    <ModalOverlay />
                                                    <ModalContent bg={'black'}>
                                                        <ModalHeader bg={'black'}></ModalHeader>

                                                        <ModalCloseButton color={'white'} />
                                                        <ModalBody>
                                                            <ViewAllPhotos images={el.roomimages} />
                                                        </ModalBody>
                                                    </ModalContent>
                                                </Modal> */}
                                            </Box>
                                            {/* </AccordionButton> */}
                                            <AccordionPanel bg={'white'} height={'110px'} boxShadow={'2xl'}>
                                                <Flex gap={2}>
                                                    <Calendar data={el} money={money} />
                                                </Flex>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                })
                            }
                        </Box>
                    </Box>
                    <Flex flexDirection={'column'} flex='1'>
                        <Box pt={4} pb={2} position={'sticky'} bg={'#e8f0f2'} top={0} zIndex={1} >
                            <Heading size={'md'}>Summary</Heading>

                            <Flex gap={1} fontSize={'13px'}>
                                <Text fontWeight={'bold'} color={'black'}>{totalNight} night
                                </Text>
                                <Text color='gray' fontWeight='bold'>{' '}starting from </Text>
                                <Text color='black' fontWeight='bold'>
                                    {date.start}
                                </Text>

                            </Flex>
                            <div style={{ display: 'none' }}> {

                                payble.current = 0

                            }</div>
                            {

                                bookedRooms.length > 0 ?

                                    <> <Box pt={4}>
                                        {

                                            bookedRooms.map((el, ind) => {
                                                payble.current += el.pricepernight * el.bed * totalNight;
                                                return <Box> <Box pb={1} pt={1}>  <Flex flexDirection={'row'} alignItems={'center'} >
                                                    <Text noOfLines={1}><span style={{ fontSize: '13px', fontWeight: 'bold' }}>{el.type} <span style={{ color: 'grey' }}>x {el.bed}</span></span>
                                                    </Text>
                                                    <Spacer />
                                                    <IconButton onClick={() => {
                                                        bookedRooms.splice(ind, 1)
                                                        setBookedRooms([...bookedRooms])
                                                        localStorage.setItem('bookedRooms', JSON.stringify(bookedRooms))
                                                    }} size={'xs'} _hover={{ color: '#f26c4f' }} variant={'ghost'}><DeleteIcon /></IconButton>
                                                </Flex>
                                                    <Flex>

                                                        <span style={{ fontSize: '13px', fontWeight: 'bolder', color: 'grey' }}>
                                                            {
                                                                money == "USD" ?
                                                                    <>
                                                                        $

                                                                        {
                                                                            ' ' + (el.pricepernight * el.bed / 82.14).toFixed(2) + ' '
                                                                        }
                                                                        x {totalNight} night
                                                                    </> :
                                                                    <>

                                                                        ₹
                                                                        {
                                                                            ' ' + el.pricepernight * el.bed + ' '
                                                                        }
                                                                        x {totalNight} night</>
                                                            }
                                                        </span>
                                                        <Spacer />
                                                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{
                                                            money == "USD" ?
                                                                <>
                                                                    $
                                                                    {
                                                                        ' ' + (el.pricepernight * el.bed * totalNight / 82.14).toFixed(2)
                                                                    }
                                                                </> :
                                                                <>

                                                                    ₹
                                                                    {
                                                                        ' ' + el.pricepernight * el.bed * totalNight
                                                                    }
                                                                </>
                                                        }</span>
                                                    </Flex></Box>

                                                </Box>


                                            })}
                                        <Box fontWeight={'bold'} fontSize={'14px'} pt={3}>

                                            <Flex>
                                                <Text>Tax</Text>
                                                <Spacer />
                                                <Text>
                                                    {
                                                        money == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + Math.round((payble.current * 12) / 100)
                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((Math.round((payble.current * 12) / 100)) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }

                                                </Text>
                                            </Flex>

                                            <Flex>
                                                <Text>Total (tax incl.)</Text>
                                                <Spacer />
                                                <Text>
                                                    {
                                                        money == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + (payble.current + (Math.round((payble.current * 12) / 100)))
                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((payble.current + (Math.round((payble.current * 12) / 100))) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text>
                                                    Payable Now
                                                </Text>
                                                <Spacer />
                                                <Text>
                                                    {
                                                        money == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + Math.round(((payble.current + (Math.round((payble.current * 12) / 100))) * 25) / 100)

                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((Math.round(((payble.current + (Math.round((payble.current * 12) / 100))) * 25) / 100)) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }
                                                </Text>
                                            </Flex>
                                        </Box>
                                        <Button onClick={() => {
                                            localStorage.setItem('bookedRooms', JSON.stringify(bookedRooms))
                                            navigate({
                                                pathname: '/zostelbooking',
                                                search: `?hotelid=${hotelid}&destinationid=${destinationId}&checkin=${startingDate.current.value}&checkout=${endingDate.current.value}&currency=${money}&totalnight=${totalNight}`,
                                            });

                                        }} mt={5} width={'100%'} color={'white'} _hover={{ bg: '#f15824' }} bg={'#f15824'} variant='solid'>
                                            Book Now
                                        </Button >
                                    </Box>




                                    </>
                                    :
                                    <Box width={'200px'}>
                                        <Image width={'200px'} src='https://book.zostel.com/static/media/gray-zobu.018014d9.svg' />
                                        <Heading mt={4} textAlign={'center'} color={'grey'} fontWeight={'bold'} size={'sm'}>No room selected</Heading>
                                    </Box >
                            }
                        </Box> </Flex>

                </Flex>

            </Box>

        </div>
    );
}

export default Availablerooms;
