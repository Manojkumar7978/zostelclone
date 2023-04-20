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
    Center,

} from '@chakra-ui/react'
import { ChevronRightIcon, UpDownIcon } from '@chakra-ui/icons'
import Hotelimages from '../component/hotelimages';
import Amenities from '../component/amenities';
import Availablerooms from '../component/availablerooms';
import ViewAllPhotos from '../component/view_all_photos';


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
                setDest({ ...res.data })
                setData({ ...res.data.hotels[hotelid - 1], place: res.data.place })
            })

    }, [])


    return (
        <div >

            {
                data != undefined && <Box maxW={'1100px'} m={'auto'}>
                    <Box display={['block', 'none', 'none']} bg={'black'} borderRadius={10}>
                        <ViewAllPhotos images={data.images} />
                    </Box>
                    <Breadcrumb fontSize={'14px'} separator={<ChevronRightIcon color='gray.500' />}>
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

                    <SimpleGrid pt={4} minChildWidth='250px' spacing='20px' pl={4}>
                        <Stack >
                            <Heading as='h1' size='lg' color={'#f15824'} >{data.name}</Heading>
                            <Collapse startingHeight={100} in={show} fontSize={'13px'}>
                                <Text fontSize={'14px'}>{data.desc}</Text>
                                <Text fontSize={'14px'} fontWeight={'bold'} size={'sm'}>Recommended experiences:</Text>
                                <Text fontSize={'14px'} size={'sm'}>
                                    {data.experience}
                                </Text>
                            </Collapse>
                            <Text fontSize={'14px'} color={'#f15824'} cursor={'pointer'} size='sm' onClick={handleToggle} >
                                Show {show ? 'Less' : 'More'}
                            </Text>
                        </Stack>
                        <Box >
                            <Amenities />
                        </Box>
                    </SimpleGrid>
                    <Availablerooms data={data} />

                    <Box>
                        <Flex flexDirection={['column', 'column', 'row']} pt={3} >
                            <Box width='350px' pl={4} mr={4} >
                                <Heading size={'md'} pb={3}> Locate Us</Heading>
                                <Text fontSize={'14px'} mb={4}>
                                    <span style={{ fontWeight: 'bold' }}> Address:</span>
                                    <br />
                                    {data.address}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>Contact: </span>
                                    {data.contact}
                                </Text>
                                <Button _hover={{ bg: 'white' }} leftIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" className="mr-2 w-4 h-4 fill-current"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
                                } color='#f15824' variant='outline'>
                                    Whatsapp Us
                                </Button>
                                <br />
                                <Accordion allowToggle border={'1px solid grey'} borderRadius={'10px'} mt={4} >
                                    <AccordionItem border={'none'} >

                                        <AccordionButton _hover={{ bg: '#fafeff' }} cursor={'pointer'} borderRadius={'10px'} border={'none'} bg={'#fafeff'}>
                                            <Box border={'none'} as="span" flex='1' textAlign='left'>
                                                Directions
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel p={4} fontSize={'14px'}  >
                                            <Stack>
                                                <Text ><span style={{ fontWeight: 'bold' }}>By Car:</span>
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
                                <Box as='button' fontWeight={'bold'} border={'1px solid black'} p={2} borderRadius={10} textAlign={'left'} color={'#f15824'} variant={'outline'} w={'100%'}><UpDownIcon /> Get Direction</Box>

                            </Box>
                            <Box flex='1' alignItems={'center'} p={3} mt={4} >
                                <AspectRatio ratio={[30 / 25, 30 / 20, 30 / 15]} maxH={'200px'}>
                                    <iframe style={{ borderRadius: '10px', width: '100%' }}
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                    />
                                </AspectRatio>
                            </Box>
                        </Flex>

                    </Box>
                    <Box pl={4} pt={6} >
                        <Heading size={'md'} pb={4}>
                            Property Policy
                        </Heading>
                        <UnorderedList pl={0} fontSize={'14px'} spacing={1} >
                            <ListItem >
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
                        <Heading size={'md'} pb={4} pt={6}>
                            Cancellation Policy
                        </Heading>
                        <UnorderedList pl={0} fontSize={'14px'} spacing={1}>
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
                    </Box>
                    {/* <ViewAllPhotos images={data.images} /> */}

                    {/* Slider1 */}


                </Box>
            }
        </div>

    );
}

export default Hotelrooms;


