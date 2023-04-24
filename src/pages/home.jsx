import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Image, Heading, HStack, Button, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react';
import Slider from '../component/whatsNew';
import NSlider from '../component/northernPlaylist';
import SSlider from '../component/southernPlaylist';
import WSlider from '../component/weekend';
import FSlider from '../component/food';
import NatSlider from '../component/nature';
import OffSlider from '../component/offbeat';
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { color } from 'framer-motion';



const Home = () => {
<<<<<<< HEAD
  const slides = [
    {
      img: "https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg",
    },
    {
      img: "https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg",
    },
    {
      img: "https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg",
    },
    {
      img: "https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg",
    },
    {
      img: "https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
=======
        const slides = [
          {
            img: "https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg",
          },
          {
            img: "https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg",
          },
          {
            img: "https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg",
          },
          {
            img: "https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg",
          },
          {
            img: "https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg",
          },
        ];
        const [currentSlide, setCurrentSlide] = useState(0);
        const slidesCount = slides.length;
        const carouselStyle = {
          transition: "all .5s",
          ml: `-${currentSlide * 100}%`,
        };
        const SLIDES_INTERVAL_TIME = 3000;
        const ANIMATION_DIRECTION = "right";
        useEffect(() => {
          const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
          };
      
          const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
          };
      
          const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
          }, SLIDES_INTERVAL_TIME);
          return () => clearInterval(automatedSlide);
        }, [slidesCount]);
        return (
          <Box
            maxWidth='1150px'
            margin='auto'
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Flex w="full" overflow="hidden">
              <Flex pos="relative" h="100%" w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                  <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" position="relative">
                    <Text
                      color="white"
                      fontSize="6xl"
                      fontWeight={700}
                      p="8px 12px"
                      pos='absolute'
                      top="15%"
                      left="50%"
                      as='b'
                      textShadow="2px 5px 10px #250b07"
                      transform="translate(-50%, -50%)"
                      textAlign="center"
                      zIndex="1"
                    >
                      Live it. Now
                    </Text>
                    
                    <Tabs
                     pos='fixed'
                     bg={'white'}
                     left="16%"
                     top="50%"
                     py={4}
                     width="72%"
                     height="30%"
                     variant="unstyled"
                  
                     >
                      <TabList
                      justifyContent="space-evenly"
                      color={'gray.600'}
                     
                      >
                        <Tab  as='b' >DESTINATIONS</Tab>
                        <Tab  as='b' >ZOSTEL</Tab>
                        <Tab  as='b' >ZOSTEL HOMES</Tab>
                        <Tab  as='b' >ZOSTEL PLUS</Tab>
                      </TabList>
                      <Box borderTop="1px solid lightgray" />
                      <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="tomato"
      borderRadius="1px"
    />              <Flex>
                  <Box borderBottom='1px solid gray.200' ml={6} marginRight={4}>
                   <TabPanels
                    marginLeft={10}
                    mt={5}
                   color={'gray.500'}
                   fontSize={'xs'}
                  >
                        <TabPanel>
                          <p>SELECT YOUR DESTINATION</p>
                        </TabPanel>
                        <TabPanel>
                           <p>SELECT YOUR ZOSTEL</p>
                           </TabPanel>
                              <TabPanel>
                           <p>SELECT YOUR ZOSTEL HOME</p>
                             </TabPanel>
                             <TabPanel>
                           <p>SELECT YOUR ZOSTEL PLUS</p>
                             </TabPanel>
                          </TabPanels>
                          <InputGroup  width= '105%' marginLeft={4} marginBottom={2}>
      <InputLeftElement
        pointerEvents='none'
      />
      <Input type='text' placeholder='eg.Manali, Jodhpur, Jaipur, etc.' textColor='gray.400'
       size="sm" 
  bg="transparent" 
  borderBottom='1px solid gray.800'
  borderTop='none'
  borderLeft='none'
  borderRight='none'
  />
    </InputGroup>
    </Box>
    <Box>
       <Flex>
        <Text fontSize="xs" pt={9} marginRight={5} marginLeft="80px" textColor="gray.500">CHECK IN</Text>
        <Text fontSize="xs" pt={9} marginLeft={10} textColor="gray.500">CHECK OUT</Text>
       </Flex>
       <Flex borderRadius={10} flexDirection={['column', 'row', 'row']} bg={'white'} alignItems={'center'} marginLeft={5} marginTop={4} >
                                    <Input type='date' size="sm" width="80%"
                                     />
                                    <Box> <ArrowForwardIcon /></Box>
                                    <Input type='date' size="sm" width="80%" />
                                </Flex>
    </Box>
    <Button width="30%" marginTop={16} marginLeft={2} bg='tomato' color='white'>Book Now</Button>
    </Flex>
    
                       </Tabs>
            
                    <Image
                      src={slide.img}
                      alt="carousel image"
                      boxSize="full"
                      backgroundSize="cover"
                    />
                  
                  </Box>
                ))}
              </Flex>
            </Flex>
            
            <Box>
            <Heading size="lg" my={10}>
      What's <Box color="tomato" as="span">New</Box>
    </Heading>
>>>>>>> 8ed6f9dc4040d32b9e4aa862eae7c34cb597b724

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Box
      maxWidth='1150px'
      margin='auto'
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="100%" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" position="relative">
              <Text
                color="white"
                fontSize="6xl"
                fontWeight={700}
                p="8px 12px"
                pos="absolute"
                top="15%"
                left="50%"
                as='b'
                textShadow="2px 5px 10px #250b07"
                transform="translate(-50%, -50%)"
                textAlign="center"
                zIndex="1"
              >
                Live it. Now
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>

      <Box>
        <Heading size="lg" my={10}>
          What's <Box color="tomato" as="span">New</Box>
        </Heading>

        <Slider />
      </Box>

      {/* 
      {/* <Box>
        <Heading size="lg" my={10}>
          Northern <Box color="tomato" as="span">Playlist</Box>
        </Heading>

        <NSlider />
      </Box>


      <Box>
        <Heading size="lg" my={10}>
          Southern <Box color="tomato" as="span">Playlist</Box>
        </Heading>

        <SSlider />
      </Box>


      <Box>
        <Heading size="lg" my={10}>
          Weekend <Box color="tomato" as="span">Singles</Box>
        </Heading>

        <WSlider />
      </Box>

      <Box>
        <Heading size="lg" my={10}>
          Food <Box color="tomato" as="span">Mixtape</Box>
        </Heading>

        <FSlider />
      </Box>

      <Box>
        <Heading size="lg" my={10}>
          Nature <Box color="tomato" as="span">Melodies</Box>
        </Heading>

        <NatSlider />
      </Box>

      <Box>
        <Heading size="lg" my={10}>
          Offbeat <Box color="tomato" as="span">Gems</Box>
        </Heading>

        <OffSlider />
      </Box> */} */}
    </Box>

  );
};

export default Home;