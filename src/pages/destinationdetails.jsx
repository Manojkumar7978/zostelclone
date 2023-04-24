import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import {
    Image,
    Box,
    Heading,
    Center,
    Text,
    Button,
    HStack,
    Card,
    Fade, ScaleFade, Slide, SlideFade, Collapse,
    Flex,
    Spacer
} from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Latestreads from '../component/latestreads';
import Loading from '../component/loading';
let fetchData = async (id) => {
    try {
        let res = await fetch(`http://localhost:8080/destination/${id}`)
        let data = await res.json()
        return data
    } catch (error) {

    }
}

const Destinationdetails = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    let checkin = searchParams.get('checkin')
    let checkout = searchParams.get('checkout')

    const location = useLocation();
    let [loading, setLoading] = useState(true)

    let [data, setData] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetchData(id)
            .then((res) => {
                setData({ ...res })
                setLoading(false)
            })
        const queryParams = new URLSearchParams(location.search);
        const myQueryParamValue = queryParams.get("id");

    }, [location])
    document.title = loading ? 'Loading...' : `${data.place} | Zostel`

    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

    return (
        <div  >
            {
                loading ? <Loading /> : <Box>
                    <Box position="relative" overflow="hidden">
                        {/* Image Section */}

                        <Image cursor={'pointer'} src={data.img2} width="100%" height="100%" objectFit="cover" />
                        <Heading

                            position={'absolute'}
                            top={'50%'}
                            left={'50%'}
                            transform={'translate(-50%, -50%)'}
                            margin={0}
                            padding={'0.5rem'}
                            color={'white'}
                            bg={'tgba(0,0,0,0.5)'}
                        >
                            {data.place}
                        </Heading>
                    </Box>
                    <Box style={{ maxWidth: '1100px', margin: 'auto' }} >


                        {/* BreadcrumbLink Section */}
                        <Box mt={4} mb={4}>
                            <Breadcrumb fontSize={'14px'} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem _hover={{ color: '#f15824' }}>
                                    <Link to={'/'} style={{ textDecoration: 'none' }} _hover={{ color: '#f15824' }} color={'gray.500'}>Home</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem _hover={{ color: '#f15824' }}>
                                    <Link to={`/destination`} color={'gray.500'} >Destination</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem fontWeight={'bold'} _hover={{ color: '#f15824' }}>
                                    <Link to={'#'} color={'gray.500'} >{data.place}</Link>
                                </BreadcrumbItem>

                            </Breadcrumb>
                        </Box>

                        {/* Title Section */}
                        <Box>
                            <Heading fontSize="4xl" >
                                <Center>
                                    Welcome to
                                </Center>
                            </Heading>
                            <Heading fontSize="5xl" color="rgb(241,88,36)" >
                                <Center>
                                    {data.place}
                                </Center>
                            </Heading>
                        </Box>

                        {/* Information Section */}
                        <Box>
                            <Collapse startingHeight={150} in={show}>
                                <Box>
                                    <Heading fontWeight={'bold'} color="gray.500" size="md" mt="30px"><Center>About</Center></Heading>
                                    <Text textAlign={'center'} fontSize={'14px'} color={'gray.700'} width={'80%'} m={'auto'} mt={2}>
                                        {data.about}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading fontWeight={'bold'} color="gray.500" size="md" mt="30px"><Center>Why we love {data.place}</Center></Heading>
                                    <Text textAlign={'center'} fontSize={'14px'} color={'gray.700'} width={'80%'} m={'auto'} mt={2}>
                                        {data.love}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading fontWeight={'bold'} color="gray.500" size="md" mt="30px"><Center>Fun Facts </Center></Heading>
                                    <Text textAlign={'center'} fontSize={'14px'} color={'gray.700'} width={'80%'} m={'auto'} mt={2}>
                                        {data.fun}
                                    </Text>
                                </Box>

                            </Collapse>
                            <Center mt={-5}>
                                <Button bg={'white'} fontSize={'14px'} type='ghost' _hover={{ bg: 'white' }} color={'#f15824'} onClick={handleToggle} mt='1rem'>
                                    Show {show ? 'Less' : 'More'}
                                </Button>
                            </Center>
                        </Box>

                        <Box mb={10}>
                            <Center> <HStack mt="50px" mb={10} >
                                <Heading size="xl">Stays at </Heading>
                                <Heading size="xl" color="#f15824">{data.place} </Heading>
                            </HStack>
                            </Center>

                            <Flex gap={10} flexDirection={'column'}>
                                {
                                    data.hotels != undefined && data.hotels.map((el, ind) => {
                                        return <Box key={ind} margin={'auto'}>

                                            <Flex alignItems={'center'} flexDirection={['column', 'column', 'row']}>
                                                <Box borderRadius={['10px 10px 0 0', '10px 10px 0 0', '10px']} overflow={'hidden'} h={['100%', '100%', '300px']}>
                                                    <Image
                                                        src={el.hotelimage}
                                                        alt=''
                                                        borderRadius={['10px 10px 0 0', '10px 10px 0 0', '10px']}
                                                        maxW={['764px', '764px', '570px']}
                                                        w={'100%'}
                                                        // maxH={'400px'}
                                                        objectFit={'cover'}
                                                    />
                                                </Box>
                                                <Box flex={1} ml={{ lg: '-5%' }} >
                                                    <Box p={5} borderRadius={['0 0 10px 10px', '0 0 10px 10px', 10]} bg={'white'} zIndex={2} h={{ lg: '250px' }} boxShadow={'dark-lg'}>
                                                        <Text fontWeight={'bold'} color={'gray.500'} fontSize={'14px'}>
                                                            ZOSTEL
                                                        </Text>
                                                        <Heading noOfLines={1} mb={2}>{el.name}</Heading>
                                                        <Text fontWeight={'bold'} noOfLines={3} color={'gray.700'} fontSize={'14px'}>
                                                            {el.desc}
                                                        </Text>
                                                        <Flex mt={4} alignItems={'center'}>
                                                            <Box pt={2}>
                                                                <Heading noOfLines={1} size={'md'} fontWeight={'bold'} color={'gray.700'}>Starting from ₹ {el.startingprice}</Heading>
                                                            </Box>
                                                            <Spacer />
                                                            <Box>
                                                                <Button onClick={() => {
                                                                    navigate({
                                                                        pathname: `/zostelhomes/${id}`,
                                                                        search: `?checkin=${checkin}&checkout=${checkout}&hotelid=${ind + 1}`,
                                                                    });
                                                                }} rightIcon={<ArrowForwardIcon />} variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: 'white', color: '#f15824' }}>
                                                                    View
                                                                </Button>

                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </Box>
                                            </Flex>


                                        </Box>
                                    })
                                }
                            </Flex>
                            <Center> <HStack mt="50px" mb={10} >
                                <Heading noOfLines={1} size="xl">Experiences in <span style={{ color: '#f15824' }} >{data.place} </span></Heading>

                            </HStack>
                            </Center>

                            <Box mt={10}>

                                <Box margin={'auto'}>


                                    <Flex alignItems={'center'} flexDirection={['column', 'column', 'row']}>
                                        <Box borderRadius={['10px 10px 0 0', '10px 10px 0 0', '10px']} overflow={'hidden'} h={['100%', '100%', '300px']}>
                                            <Image
                                                src={'https://img.cdn.zostel.com/zostel/gallery/images/bdlwcwDfSgKTP0EltHPNlA/wonders-of-south-india-21st-to-27th-may-202_uv5sndQ.jpg'}
                                                alt=''
                                                borderRadius={['10px 10px 0 0', '10px 10px 0 0', '10px']}
                                                maxW={['764px', '764px', '800px']}
                                                w={'100%'}
                                                // maxH={'400px'}
                                                objectFit={'cover'}
                                            />
                                        </Box>

                                        <Box ml={{ lg: '-5%' }} >

                                            <Box maxWidth={'840px'} p={5} borderRadius={['0 0 10px 10px', '0 0 10px 10px', 10]} bg={'white'} zIndex={2} h={{ lg: '250px' }} boxShadow={'dark-lg'}>

                                                <Heading noOfLines={1} mb={2}>Wonders of South India | 21st to 27th May 2023</Heading>
                                                <Text fontWeight={'bold'} noOfLines={2} color={'gray.700'} fontSize={'14px'}>
                                                    Prepare yourself to embark on a journey exploring some of India's best destinations and to immerse in the staggering view and land so green, unlike anything you’ve seen.                                        </Text>
                                                <Flex mt={4} alignItems={'center'}>
                                                    <Box pt={2}>
                                                        <Heading noOfLines={1} size={'md'} fontWeight={'bold'} color={'gray.700'}>Starting from ₹18,499</Heading>
                                                    </Box>
                                                    <Spacer />
                                                    <Box>
                                                        <Button rightIcon={<ArrowForwardIcon />} variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: 'white', color: '#f15824' }}>
                                                            View
                                                        </Button>

                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </Flex>


                                </Box>

                            </Box>
                        </Box>
                        <Center>
                            <Button mb={4} variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: '#f15824' }}>Show Map</Button>

                        </Center>
                        <Latestreads />
                    </Box>


                </Box>
            }

        </div>
    );
}

export default Destinationdetails;