import React from 'react';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    Image,
    Box,
    Heading,
    Center,
    Text,
    Button,
    HStack,
    Stack,
    Spacer,
    Card,
    VStack
} from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AiOutlineArrowRight} from 'react-icons/ai'

const Destinationdetails = () => {
   let [showMap,setShowMap]=useState(false)
   let [detail,setDetail] = useState(false)
   let [data,setData] = useState([])
   const {id}=useParams();
   
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
     var res = await fetch(``)
     var data = res.json();
     console.log(data);
     setData(data)
    }
   

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
                {/* <Center><Button border="none" color="rgb(241,88,36)" textDecoration="none" hover="none" bg="white"onClick={()=>setDetail(!detail)} ></Button></Center> */}
                <Center><Text fontSize={'15px'} mt="5px" color={'#f15824'} cursor={'pointer'} size='sm'bg="white"onClick={()=>setDetail(!detail)} >
                {detail?"Show less":"Show More..."}
                            </Text></Center>
                 
                  {
                    detail? <Box>
                        <Heading color="rgb(77,88,91)" size="md" mt="40px"><Center>Why we love Alleppey</Center></Heading>
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
                    </Center> </Text>
                    </Box>:null
                  }
            </Box>
             

             {/* Stay Section */}
             <Box ml="50px">
            <Center> <HStack mt="50px">  
                    <Heading size="xl">Stays at </Heading>
                    <Heading size="xl"  color="rgb(241,88,36)">Alleppey </Heading>
                    </HStack>
                    </Center>

                    <Box  display="flex"  >
                       
                        <Image
                             src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR3FiVcgbuuv-k0ZDgaNltDBr3WfJsOGfXHT-pImUPz4B1rqT4"
                             alt="zostel"
                             borderRadius="10px"
                             h="350px" w="700px" ml="80px" mt="50px" bg="black"
                             />
                           
                           <Box p="20px" boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;" borderRadius="10px" w="600px" h="280px" mt="90px" ml="-5%" overflow="none" >
                            <Heading fontSize="lg" color="rgb(150,164,169)">ZOSTEL</Heading>
                            <Heading fontSize="3xl" mt="10px">Zostel Alleppey</Heading>
                            <Text color="rgb(77,88,91)" mt="15px">Situated right at the scenic Alappuzha Beach, Zostel Alleppey is a happening backpackers' hostel ideal for exploring the town and its backwaters. A white-coloured building surrounded by swaying palm trees invites you to a dreamy beach vacation here.</Text>
                           
                                <HStack mt="30px">
                                    <Heading fontSize="lg">Starting from $6.68</Heading>
                                    <Spacer/>
                                    <Button bg="rgb(241,88,36)" color="white" _hover={{ bg: "white", color: "tomato" }}>View
                                  <span style={{marginLeft:"10px"}}><AiOutlineArrowRight/></span>
                                   </Button>
                                </HStack>
                           
                           </Box>
                    
                          
                    </Box>
          
            </Box>
             
             {/* Experience Section */}
            <Box ml="50px">
            <Center> <HStack mt="70px">  
                    <Heading size="xl">Experience in <span style={{color:"rgb(241,88,36)"}}>Alleppey</span> </Heading>
                    {/* <Heading size="xl"  color="rgb(241,88,36)">Alleppey </Heading> */}
                    </HStack>
                    </Center>

                    <Box w="80%" >
                       
                        <Image
                             src="https://img.cdn.zostel.com/zostel/gallery/images/bdlwcwDfSgKTP0EltHPNlA/wonders-of-south-india-21st-to-27th-may-202_uv5sndQ.jpg"
                             alt="zostel"
                             borderRadius="10px"
                             h="350px" w="700px" ml="80px" mt="50px" bg="white"
                             />
                           
                           <Box p="20px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" borderRadius="10px" w="600px" mt="-300px"ml="700px" >
                           
                            <Heading fontSize="3xl" mt="10px">Wonders of South India | 21st to 27th May 2023</Heading>
                            <Text color="rgb(77,88,91)" mt="15px">Prepare yourself to embark on a journey exploring some of India’s best destinations and to immerse in the staggering view and land so green, unlike</Text>
                           
                                <HStack mt="30px">
                                    <Heading fontSize="lg">Starting from $225.3</Heading>
                                    <Spacer/>
                                    <Button bg="rgb(241,88,36)" color="white">View
                                  <span style={{marginLeft:"10px"}}><AiOutlineArrowRight/></span>
                                   </Button>
                                </HStack>
                           
                           </Box>
                    
                          
                    </Box>
          
            </Box>
            
            {/* Map Section */}
             <Box mt="100px" ml="20px">
               <Center> <Button bg="rgb(241,88,36)" color="white" onClick={()=>setShowMap(!showMap)}>{showMap?"Hide Map":"Show Map"}</Button></Center>
               
                 {
                    showMap?  <Box  >
                    <div class="mapouter"><div class="gmap_canvas"><iframe style={{ borderRadius:"10px",marginTop:"50px", marginLeft:"100px"}} width="1230px" height="300px"  id="gmap_canvas" src="https://maps.google.com/maps?q=india&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                    </Box>
                    :null
                 }
             </Box>
              
              {/* Road Section */}
           
           <Box bg="rgb(232,240,242)" w="100%" h="500px" mt="20px" >
             <Center p="20px"><Heading>Latest Reads</Heading></Center>
            <Box display="flex" gap="20px" justifyContent="center">
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w="350px" borderRadius="10px">
                <Image src="https://img.cdn.zostel.com/blog_photo/varkala.jpg" alt="error" h="300px" w="350px" borderRadius="10px 10px 0px 0px"/>
                <Heading fontSize="lg" p="10px">All the Best Places to Visit in Kerala: </Heading>
                <Text p="10px">From tourist hubs to offbeat towns, there are man</Text>
             </Box>

             <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w="350px" borderRadius="10px">
                <Image src="https://img.cdn.zostel.com/blog_photo/varkala.jpg" alt="error" h="300px" w="350px" borderRadius="10px 10px 0px 0px"/>
                <Heading fontSize="lg" p="10px">All the Best Places to Visit in Kerala: </Heading>
                <Text p="10px">From tourist hubs to offbeat towns, there are man</Text>
             </Box>

             <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w="350px" borderRadius="10px">
                <Image src="https://img.cdn.zostel.com/blog_photo/varkala.jpg" alt="error" h="300px" w="350px" borderRadius="10px 10px 0px 0px"/>
                <Heading fontSize="lg" p="10px">All the Best Places to Visit in Kerala: </Heading>
                <Text p="10px">From tourist hubs to offbeat towns, there are man</Text>
             </Box>
            </Box>

             </Box>
          
          
             </Box>
            
        </div>
    );
}

export default Destinationdetails;
