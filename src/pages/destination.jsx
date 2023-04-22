import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Box, Heading, Breadcrumb,
    Center,
    BreadcrumbItem, BreadcrumbLink, Grid, Image, SimpleGrid, Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Loading from '../component/loading';
export { ChevronRightIcon } from '@chakra-ui/icons'
let fetchData = async () => {
    try {
        let res = await fetch(`http://localhost:8080/destination`)
        let data = (await res).json()
        return data
    } catch (error) {
        return error
    }
}
let otherImage = [
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/yWTp6A-2QumdgAMRwEwhjg/chamera-20230223110128.png?h=400",
        Title: "Chamera",
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/XKIjO23yQGiZ5JUD3lYbbQ/cheog-20230223110216.png?h=400",
        title: "Cheog"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/0wlj3wscTd-7gpMeKkSinA/a-pure-hidden-gem-of-the-himalayas-20201112102045.jpg?h=400",
        title: "Chitkul"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/nFSCCFyoT1On6QD2gG3SHQ/greenery-is-found-at-its-best-in-coorg-2020_o86HXBS.jpg?h=400",
        title: "Coorg"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/lIJKYWeJTHeGQuLr-W-H5Q/dalhousie-20230223110356.png?h=400",
        title: "Dalhousia"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/2qNpdv4mTy-OyDx-VFpTOg/explore-history-modernism-in-the-capital-of_2l8lKSl.jpg?h=400",
        title: "Delhi"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/Rp7QpX-JS42R933SRiONNw/dharamkot-20220807174126.jpg?h=400",
        title: "Dharamkote"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/J6PrS4pARLyk0Yr4_hOzRA/dharamshala-20230223114554.png?h=400",
        title: "Dharmasala"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/BVnn4xgjStqnXN3VLgRh5Q/dobhi-20230223110631.png?h=400",
        title: "Dobhi"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/Um739YDBSuSRUSTyNUQzJQ/fagu-20220129085617.jpeg?h=400",
        title: "Fagu"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/ZP7PLUJqTUOAqLSTCvgd4A/gangtok-20230223114448.png?h=400",
        title: "Gangtok"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/9CYBxW_DQouGWfRFLL50Kw/goa-20230213101022.jpg?h=400",
        title: "goa"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/_an1bHWaQnKXGbfqJit26Q/gokarna-20230223110705.png?h=400",
        title: "Gokorna"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/h53v7Qw4Q5uzvmUyHX1SGQ/harabhag-20220812144602.jpg?h=400",
        title: "Harabhag"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/cTHdge5sSRC8ezqHjVrO7Q/hyderabad-20221226163404.jpg?h=400",
        title: "Hydrabad"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/Du8SGQOGTf2fv801B28URw/the-pink-city-swarms-with-exceptional-monum_cvNBOwX.jpg?h=400",
        title: "Jeypore"
    },
    {
        image: "https://img.cdn.zostel.com/zostel/gallery/images/xwDPNHkoTP2HbensSRXyuQ/lonavala-20230223112001.png?h=400",
        title: "Lonavala"
    },
    {
        image: 'https://img.cdn.zostel.com/zostel/gallery/images/Kjfv0jr7TqCSXis9GMd6PA/kareri-20230223111123.png?h=400',
        title: 'Kareri'
    }
]

const Destination = () => {
    let [loading, setLoading] = useState(true)
    document.title = loading ? 'Loading...' : 'Explore Destination | Zostel'

    let [destination, setDestination] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        fetchData()
            .then((res) => {
                console.log(res);
                setDestination([...res])
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading ? <Loading /> : <Box pt={10} maxW={'1100px'} m={'auto'}>
                    {/* <Link to={'/'}>Hii</Link> */}
                    <Heading textAlign={'center'} size={'lg'}>Explore <span style={{ color: '#f15824' }}>Destinations</span></Heading>
                    <Breadcrumb fontSize={'14px'} separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem _hover={{ color: '#f15824' }}>
                            <Link to={'/'} style={{ textDecoration: 'none' }} _hover={{ color: '#f15824' }} color={'grey'}>Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem _hover={{ color: '#f15824' }}>
                            <Link color={'black'} >Destination</Link>
                        </BreadcrumbItem>

                    </Breadcrumb>

                    <SimpleGrid mb={6} minChildWidth='250px' gap={6} mt={4}>
                        {
                            destination.map((el, ind) => {
                                return <Box onClick={() => {
                                    navigate(`/destination/${el.id}`)
                                }} borderRadius={10} position="relative" height="300px" overflow="hidden">
                                    <Image cursor={'pointer'} src={el.img2} alt={el.place} width="100%" height="100%" objectFit="cover" />
                                    <Heading
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        color="white"
                                        fontSize="20px"
                                        padding="10px"
                                        width="100%"
                                        textAlign="left"
                                    >
                                        {el.place}
                                    </Heading>
                                </Box>
                            })
                        }
                        {
                            otherImage.map((el, ind) => {
                                return <Box onClick={() => {
                                    navigate(`/destination/${el.id}`)
                                }} borderRadius={10} position="relative" height="300px" overflow="hidden">
                                    <Image cursor={'pointer'} src={el.image} alt={el.place} width="100%" height="100%" objectFit="cover" />
                                    <Heading
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        color="white"
                                        fontSize="20px"
                                        padding="10px"
                                        width="100%"
                                        textAlign="left"
                                    >
                                        {el.title}
                                    </Heading>
                                </Box>
                            })
                        }
                    </SimpleGrid >
                    <Center>
                        <Button variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: '#f15824' }}>Show Map</Button>

                    </Center>
                </Box>
            }
        </div>
    );
}

export default Destination;
