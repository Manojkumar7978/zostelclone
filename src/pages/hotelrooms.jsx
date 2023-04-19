import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import axios from 'axios'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Box,
    SimpleGrid,
    Stack,
    Heading,
    Collapse,
    Text,
    Flex,
    Square,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    List,
    ListItem,
    UnorderedList,
    AspectRatio,
    Center

} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Hotelimages from '../component/hotelimages';
import Amenities from '../component/amenities';
import Availablerooms from '../component/availablerooms';


let fetchData = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/destination/${id}`)
        return res;
    } catch (error) {

    }
}

const Hotelrooms = () => {
    const [show, setShow] = React.useState(false)
    let [dest, setDest] = useState({})

    const handleToggle = () => setShow(!show)
    let [data, setData] = useState()
    let { id } = useParams();
    let [search, setSearch] = useSearchParams()
    let hotelid = search.get('hotelid')
    useEffect(() => {
        fetchData(id)
            .then((res) => {
                console.log(res.data);
                setDest({ ...res.data })
                setData({ ...res.data.hotels[hotelid - 1], place: res.data.place })
            })

    }, [])
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div >

            {
                data != undefined && <Box maxW={'1100px'} m={'auto'}>
                    <Breadcrumb fontSize={'13px'} separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem  >
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>Home</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={'/destination'} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>Destination</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <Link to={`/destination/${id}`} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>{data.place}</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink color={'black'} _hover={{ color: '#f15824' }}>{data.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Hotelimages images={data.images} />

                    {/* <SimpleGrid pr={20} pl={20} minChildWidth='120px' spacing='20px'>
                        <Stack >
                            <Heading as='h1' size='4xl' color={'#f15824'} >{data.name}</Heading>
                            <Collapse startingHeight={100} in={show}>
                                {data.desc}
                                <Text fontWeight={'bold'} size={'sm'}>Recommended experiences:</Text>
                                <Text size={'sm'}>
                                    {data.experience}
                                </Text>
                            </Collapse>
                            <Text color={'#f15824'} cursor={'pointer'} size='sm' onClick={handleToggle} >
                                Show {show ? 'Less' : 'More'}
                            </Text>
                        </Stack>
                        <Box >
                            <Amenities />
                        </Box>
                    </SimpleGrid>
                    <Availablerooms />

                    <Box>
                        <Box p={10} pt={30} pb={30} bg={'#e8f0f2'}>
                            <Flex flexWrap='wrap'  >

                                <Box flex='2'>
                                    <Flex border={'1px solid green'} alignItems={'center'} >
                                        <Box flex={'3'}>
                                            <Text as={'h1'} mb={-15}>
                                                Book your stay
                                            </Text>
                                            <Text fontWeight={'bolder'} color={'grey'}>
                                                Select from a range of beautiful rooms
                                            </Text>
                                        </Box>
                                        <Box flex={'1'}>
                                            <Button variant={'ghost'}>
                                                INR
                                            </Button>
                                        </Box>
                                        <Box flex={'2'}>

                                        </Box>
                                    </Flex>
                                </Box>
                                <Box flex='1' display='flex' bg='tomato'>
                                    <Text>Box 3</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Flex flexWrap='wrap' >

                            <Box width='350px' pl={10} >
                                <Text as={'h2'}> Locate Us</Text>
                                <Text>
                                    <span style={{ fontWeight: 'bold' }}> Address:</span>
                                    <br />
                                    {data.address}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>Contact: </span>
                                    {data.contact}
                                </Text>
                                <Button variant={'outline'}>Whatsapp Us</Button>
                                <br />
                                <Accordion allowToggle border={'1px solid grey'} borderRadius={'5px'} mt={10} >
                                    <AccordionItem >

                                        <AccordionButton cursor={'pointer'} border={'none'} bg={'white'}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Directions
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel p={10}  >
                                            <Stack>
                                                <Text><span style={{ fontWeight: 'bold' }}>By Car:</span>
                                                    <br />
                                                    From Katraj (Pune), drive towards Khed Shivapur. Follow NH 60, NH 48 and SH 65 to Nasrapur Phata (~27km). Turn right from Nasrapur Phata and follow the road towards Kodawade Phata (~15km). Take a left from Kodawade Phata towards Mantra Resorts. After crossing a narrow bridge, drive towards Mantra Resort on an uphill road (~4km). Then continue downhill towards Moonwater Resort (2.5 km) and then turn right towards Kurunji. You will arrive at Casuarina Holiday homes after ~9km, where Zostel Home Bhor is located.
                                                </Text>
                                                <Text><span style={{ fontWeight: 'bold' }}>By Bus:</span>
                                                    <br />
                                                    Take a bus from Katraj (Pune) to Male Bhor (57 km, 2 hrs) and dropdown at Casuarina Holiday Homes.

                                                    PS. The bus connectivity is poor in the region, so we recommend travelling by personal vehicle/taxi.                                                </Text>
                                                <Text><span style={{ fontWeight: 'bold' }}>From Railway Station:</span>
                                                    <br />
                                                    (72 km, 2.5 hrs) ~INR 2000 for a taxi to reach Zostel Home Bhor.
                                                </Text>
                                                <Text><span style={{ fontWeight: 'bold' }}>Important:</span>
                                                    The property is located on the outskirts of Bhor. Taxi charges may be higher. If you need more details, please contact the property.
                                                </Text>
                                            </Stack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                                <br />
                                <Button variant={'outline'} w={'100%'}>Get Direction</Button>

                            </Box>
                            <Box flex='1' alignItems={'center'} p={20} >
                                <AspectRatio ratio={30 / 10}>
                                    <iframe style={{ borderRadius: '10px', width: '100%' }}
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                    />
                                </AspectRatio>
                            </Box>
                        </Flex>

                    </Box>
                    <Box pl={10}>
                        <Heading as={'h2'}>
                            Property Policy
                        </Heading>
                        <UnorderedList pl={0} fontSize={'14px'} spacing={4}>
                            <ListItem>
                                Guests are required to pay a 50% advance at the time of booking itself. The entire balance needs to be cleared upon arrival at the property during check-in.
                            </ListItem>
                            <ListItem>
                                Our standard check-in time is 1 PM and the standard check-out time is 11 AM. Early check-in and late check-out requests are subject to availability, and may also attract an additional fee at the property's discretion.
                            </ListItem>
                            <ListItem>
                                This homestay is open for families with kids, groups, and couples.
                            </ListItem>
                            <ListItem>
                                We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.
                            </ListItem>
                            <ListItem>
                                Guests are not permitted to bring outsiders inside the home premises.
                            </ListItem>
                            <ListItem>
                                We believe in self-help and do not provide luggage assistance or room services.
                            </ListItem>
                            <ListItem>
                                Alcohol consumption is allowed inside the premises. However, we don’t sell alcohol at the property.
                            </ListItem>
                            <ListItem>
                                Drug and substance usage is strictly banned inside and around the property.
                            </ListItem>
                            <ListItem>
                                Quiet Hours are from 10 PM to 6 AM. Do not play loud music or cause nuisance, as the place is located in a village area. Please respect neighbours and culture around.
                            </ListItem>
                            <ListItem>
                                This homestay is pet friendly.
                            </ListItem>
                            <ListItem>
                                Right to admission reserved.
                            </ListItem>
                        </UnorderedList>
                        <Heading as={'h2'}>
                            Cancellation Policy
                        </Heading>
                        <UnorderedList pl={0} fontSize={'14px'} spacing={4}>
                            <ListItem>
                                All booking requests will be confirmed at a 50% advance payment at the time of booking.
                            </ListItem>
                            <ListItem>
                                We will be providing full credits on any cancellations received more than 7 days prior to the arrival date. You will be able to avail the credited amount for any future booking at any of our properties.
                            </ListItem>
                            <ListItem>
                                If informed within 7 days of the standard check-in time (1 pm), the entire amount shall be adjusted against the cancellation fee.
                            </ListItem>
                            <ListItem>
                                In case the property is not able to host you due to any local or subjective circumstances, we will provide you with a credit of the same amount. You will be able to avail the credited amount for any future booking at any of our properties.
                            </ListItem>
                        </UnorderedList>
                        <Text pt={4} pl={0}>
                            For any other queries, please reach out to us at reservations@zostel.com.
                        </Text>
                    </Box> */}
                </Box>
            }
        </div>

    );
}

export default Hotelrooms;


