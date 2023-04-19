import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Image,
    Box,
    Heading,
    Center,
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
         <Box>
         <Image
          h='720px' w="100%" 
          src="https://img.cdn.zostel.com/zostel/gallery/images/0fW6dUyPQ8mol0GHF841KA/alleppey-20230223105140.png?" 
          alt ="error">
         </Image>
         <Heading mt="-390px" ml="40%" color="rgb(255,255,255)"  fontSize='50px'
         >Alleppey
         </Heading>
         </Box>

         <Box  w='80%' m="auto" h="200px" mt="340px"  >
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
         
         <Box h="100px" w="80%" m="auto" border="1px solid blue" mt="-130px">
           <Heading fontSize="3xl"> 
            <Center>
             Welcome to
             Alleppey
             </Center>
             </Heading>
         </Box>
        </div>
    );
}

export default Destinationdetails;
