import React, { useState, useEffect, useRef } from 'react';
import {
  Flex, Box, Text, Image, Heading,
  TabList,
  Tabs,
  Tab,
  TabIndicator,
  InputLeftElement,
  Input,

  Button,
  TabPanel,
  TabPanels,
  InputGroup,
  useToast

} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Slider from '../component/whatsNew';
import NSlider from '../component/northernPlaylist';
import Latestreads from '../component/latestreads';
//import Expnorth from '../component/expnorth';

//import Loading from '../component/loading';
import { Toast } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
//import Search from '../component/search';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const Home = () => {
  let startingDate = useRef()
  let endingDate = useRef()
  let navigate = useNavigate()
  let [isLoading, setIsloading] = useState(true)
  document.title = isLoading ? 'Loading...' : "Zostel Largest Branded Hostel"
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
  let toast = useToast()
  const [currentSlide, setCurrentSlide] = useState(0);
  let [searchQuery, setSearQuery] = useState(undefined)
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  let [bigIndex, setBigIndex] = useState(0)
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
  let [date, setDates] = useState({ checkin: `${year}-${month}-${day}`, checkout: `${tyear}-${tmonth}-${tday}`, smin: `${year}-${month}-${day}`, emin: `${year}-${month}-${day}`, end: `${tyear}-${tmonth}-${tday}` })
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const intervalId = setInterval(() => {
      setBigIndex((activeSlide) => (activeSlide + 1) % slides.length);
    }, 3000);
    setIsloading(false)
    // return () => clearInterval(intervalId);
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
    console.log(compareDates(date.checkin, date.checkout))
    if (!compareDates(date.checkin, date.checkout)) {

      if (startingDate.current != undefined) {
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
      }
      if (startingDate.current != undefined && endingDate.current != undefined) {
        startingDate.current.value = `${year}-${month}-${day}`
        endingDate.current.value = `${tyear}-${tmonth}-${tday}`
      }

    }

  }, [slidesCount, date]);




  return (
    <>
      {
        isLoading ? <Loading /> : <>

          <>
            {/* Slider Container */}
            <Box
              w={'full'}
              h={'800px'}
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              position="relative"
            >
              {/* Images */}

              <Image
                key={bigIndex}
                src={slides[bigIndex].img}
                alt={bigIndex}
                // width="100%"
                h={'auto'}
                maxH={'800px'}
                position="absolute"
                top="0"
                // left={`${bigIndex * 100}%`}
                transition="left 0.3s ease-in-out"
                backgroundSize="cover"
                boxSize="full"
              />
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
                w={'500px'}
                m={'auto'}
              >
                Live it. Now
              </Text>

              {/* Box with Shadow */}
              <Tabs
                pos='relative'
                bg={'white'}

                top=""
                p={4}
                width="72%"
                height="30%"
                variant="unstyled"

              >
                <TabList
                  justifyContent="space-evenly"
                  color={'gray.600'}

                >
                  <Tab as='b' >DESTINATIONS</Tab>
                  <Tab as='b' >ZOSTEL</Tab>
                  <Tab as='b' >ZOSTEL HOMES</Tab>
                  <Tab as='b' >ZOSTEL PLUS</Tab>
                </TabList>
                <Box borderTop="1px solid lightgray" />
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="tomato"
                  borderRadius="1px"
                />              <Flex >
                  <Box borderBottom='1px solid gray.200' ml={6} marginRight={4}>
                    <TabPanels

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
                    <InputGroup width='105%' marginBottom={2}>
                      <InputLeftElement
                        pointerEvents='none'
                      />
                      {/* <Input type='text' placeholder='eg.Manali, Jodhpur, Jaipur, etc.' textColor='gray.400'
                        size="sm"
                        bg="transparent"
                        borderBottom='1px solid gray.800'
                        borderTop='none'
                        borderLeft='none'
                        borderRight='none'
                        textAlign={'left'}
                        borderRadius={'5px'}
                      /> */}
                      <Search setSearQuery={setSearQuery} />
                    </InputGroup>
                  </Box>
                  <Box>
                    <Flex>
                      <Text fontSize="xs" pt={9} marginRight={5} marginLeft="80px" textColor="gray.500">CHECK IN</Text>
                      <Text fontSize="xs" pt={9} marginLeft={10} textColor="gray.500">CHECK OUT</Text>
                    </Flex>
                    <Flex borderRadius={10} flexDirection={['column', 'row', 'row']} bg={'white'} alignItems={'center'} marginLeft={5} marginTop={4} >
                      <Input defaultValue={date.checkin} ref={startingDate} onChange={(e) => { setDates({ ...date, checkin: e.target.value }) }} min={`${year}-${month}-${day}`} type='date' size="sm" width="80%"
                      />
                      <Box> <ArrowForwardIcon /></Box>
                      <Input defaultValue={date.checkout} ref={endingDate} onChange={(e) => { setDates({ ...date, checkout: e.target.value }) }} min={`${tyear}-${tmonth}-${tday}`} type='date' size="sm" width="80%" />
                    </Flex>
                  </Box>
                  <Button _hover={{ bg: 'tomato' }} isDisabled={searchQuery == undefined} onClick={() => {

                    navigate({
                      pathname: `/destination/${searchQuery}`,
                      search: `?checkin=${date.checkin}&checkout=${date.checkout}`,
                    });
                  }} width="30%" marginTop={16} marginLeft={2} bg='tomato' color='white'>Book Now</Button>
                </Flex>

              </Tabs>
            </Box>
          </>
          <Box
            maxWidth='1150px'
            margin='auto'

            alignItems="center"
            justifyContent="center"
          >
            <Flex w="full" overflow="hidden">

            </Flex>

            <Box p={4}>
              <Heading size="lg" my={10}>
                What's <Box color="tomato" as="span">New</Box>
              </Heading>

              <Slider />
            </Box>
            <Box p={4}>
              <Heading size="lg" my={10}>
                Experience<Box color="tomato" as="span">North</Box>
              </Heading>

              <Expnorth />
            </Box>


            <Box mt={10} pt={10} pb={10} bg={'gray.100'}>
              <Heading p={4} size="lg" >
                Northern <Box color="tomato" as="span">Playlist</Box>
              </Heading>

              <NSlider type={'northplaylist'} />
            </Box>


            <Box>
              <Heading p={4} size="lg" my={10}>
                Southern <Box color="tomato" as="span">Playlist</Box>
              </Heading>

              <NSlider type={'southernplaylist'} />
            </Box>

            <Box mt={10} pt={10} pb={10} bg={'gray.100'}>
              <Box>
                <Heading p={4} size="lg">
                  Weekend <Box color="tomato" as="span">Singles</Box>
                </Heading>

                <NSlider type={'weekend'} />
              </Box>
            </Box>

            <Box>
              <Heading p={4} size="lg" my={10}>
                Food <Box color="tomato" as="span">Mixtape</Box>
              </Heading>

              <NSlider type='food' />
            </Box>
            <Box mt={10} pt={10} pb={10} bg={'gray.100'}>

              <Box>
                <Heading p={4} size="lg" >
                  Nature <Box color="tomato" as="span">Melodies</Box>
                </Heading>

                <NSlider type={'nature'} />
              </Box>
            </Box>

            <Box>
              <Heading p={4} size="lg" my={10}>
                Offbeat <Box color="tomato" as="span">Gems</Box>
              </Heading>

              <NSlider type={'offbeat'} />
            </Box>

            <Box mt={10}>
              <Latestreads />
            </Box>
          </Box></>
      }

    </>
  );
};

export default Home;