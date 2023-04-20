import React from 'react';
import { Link } from 'react-router-dom';
import {
    Image,
    Box,
    Heading,
    Center,
    Text,
    Button,
    HStack,
    Card
} from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Destinationdetails = () => {
    return (
        <div>
            <Box >
            {/* Image Section */}
            <Box>
                <Image
                    h='720px' w="100%"
                    src="https://img.cdn.zostel.com/zostel/gallery/images/0fW6dUyPQ8mol0GHF841KA/alleppey-20230223105140.png?"
                    alt="error">
                </Image>
                <Heading mt="-390px" ml="40%" color="rgb(255,255,255)" fontSize='50px'
                >Alleppey
                </Heading>
            </Box>
             
             {/* BreadcrumbLink Section */}
            <Box w='80%' m="auto" h="200px" mt="340px"  >
                <Breadcrumb fontSize={'15px'} spacing='8px' separator={<ChevronRightIcon color='rgb(150,164,169)' />}>
                    <BreadcrumbItem>
                        <Link to={'#'} style={{ textDecoration: 'none' }}>
                            <BreadcrumbLink _hover={{ color: '#f15824' }} color={'rgb(150,164,169)'}>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to={'#'} style={{ textDecoration: 'none' }}>
                            <BreadcrumbLink _hover={{ color: '#f15824' }} color={'rgb(150,164,169)'}>Destination</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to={'#'} style={{ textDecoration: 'none' }}>
                            <BreadcrumbLink _hover={{ color: '#f15824' }} color={'rgb(77,88,91)'}>Alleppey</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Box>
             
             {/* Title Section */}
            <Box h="100px" w="80%" m="auto" mt="-130px">
                <Heading fontSize="4xl" >
                    <Center>
                        Welcome to
                    </Center>
                </Heading>
                <Heading fontSize="5xl" color="rgb(241,88,36)" >
                    <Center>
                        Alleppey
                    </Center>
                </Heading>
            </Box>
             
             {/* Information Section */}
            <Box>
                <Heading color="rgb(77,88,91)" size="md" mt="40px"><Center>About</Center></Heading>
                <Text color="rgb(77,88,91)" w="70%" m="auto"><Center>
                    Frequent wisps of air soothing your senses, boatmen stories with their generations following the same age-old traditions, and a never-ending scent of local food filling narrow lanes of the city- Alleppey is one hell of an experience. Attractions like the Alappuzha Beach, brilliant orange and pink sunsets, and frequent snake boat races make Alleppey one of the most enthralling water towns in the list of a backpacker.
                </Center> </Text>

                {/* <Heading color="rgb(77,88,91)" size="md" mt="40px"><Center>Why we love Alleppey</Center></Heading>
                <Text color="rgb(77,88,91)" w="70%" m="auto"><Center>
                    A row through the calm canals and quaint paddy fields around the backwaters of Alappuzha take you back in time, as you take in all the green around you.

                    The canal & backwater culture of Alleppey has won it the title of Venice of the East. When explored, these canals open up to tiny villages, with the residents leading simple & truly unique lives in the middle of the water.

                    The popular Snake Boat Races of Alleppey are also the world’s largest team sport, with sometimes over 100 participants rowing from a single boat. Can you imagine what a sight that would be?!
                </Center> </Text>

                <Heading color="rgb(77,88,91)" size="md" mt="40px"><Center>Fun Facts</Center></Heading>
                <Text color="rgb(77,88,91)" w="70%" m="auto"><Center>
                    Known for its stupendous backwaters, Alleppey offers its visitors the surreal experience of staying in a houseboat!

                    Kuttanad, a region in Alleppey, is known to be the lowest village in India. It resides at the height of 1 to 3 meters below sea level! The place often floods during the rainfall, so to adapt to this, the houses here are built to have no ground floors at all!

                    There are entire villages on minuscule islands in the town of Alleppey. The residents use canoes to go from one place to another since there are no roads and only water all around!
                </Center> </Text> */}
                
                <Center><Button border="none" color="rgb(241,88,36)" bg="white" >Show more</Button></Center>
            </Box>

            <Box>
            <Center> <HStack mt="50px">  
                    <Heading size="xl">Stays at </Heading>
                    <Heading size="xl"  color="rgb(241,88,36)">Alleppey </Heading>
                    </HStack>
                    </Center>

                    <Box w="80%">
                        
                        <Image
                             src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR3FiVcgbuuv-k0ZDgaNltDBr3WfJsOGfXHT-pImUPz4B1rqT4"
                             alt="zostel"
                             borderRadius="10px"
                             h="300px" w="500px" ml="80px"
                             />
                        
                    </Box>
            </Box>
            </Box>
        </div>
    );
}

export default Destinationdetails;
