import { useState } from 'react';
import { Flex, Box, Text, Button, Heading, Input, HStack, Image, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Availablerooms = ({ data }) => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "10px",
        h: "full",
        mt: "-72px",
        pt: '55px',
        pr: '15px',
        pl: '15px',
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.3,
            bg: "black",
        },
    };


    console.log(data)
    return (
        <div>
            <Box p={4} pt={30} pb={30} bg={'#e8f0f2'} mt={4}>
                <Flex gap={4} >

                    <Box flex='2'>
                        <Flex textAlign={['center', 'center', 'left']} flexDirection={['column', 'column', 'row']} gap={1} alignItems={'center'} justifyContent={'center'} >
                            <Box minW={{ lg: '300px' }}  >
                                <Heading size={'lg'}>
                                    Book your stay
                                </Heading>
                                <Text fontWeight={'bolder'} color={'grey'}>
                                    Select from a range of beautiful rooms
                                </Text>
                            </Box>
                            <Box >
                                <Button p={0} fontWeight={'bold'} rightIcon={<ChevronDownIcon />} variant={'ghost'} color={'#f26c4f'}>
                                    INR
                                </Button>
                            </Box>
                            <Box w={'100%'} borderRadius={10} mr={2} ml={2} boxShadow='xs'>
                                <Flex borderRadius={10} flexDirection={['column', 'row', 'row']} bg={'white'} alignItems={'center'}>
                                    <Input border={'none'} borderRadius={'5px 0 0 5px'} type='date' />
                                    <Box> <ArrowForwardIcon /></Box>
                                    <Input border={'none'} borderRadius={'0 5px 5px 0'} type='date' />
                                </Flex>
                            </Box>
                        </Flex>
                        <Box>
                            {
                                data.rooms.map((el, ind) => {
                                    const [currentSlide, setCurrentSlide] = useState(0);
                                    // const slidesCount = slides.length;

                                    const prevSlide = (slidesCount) => {
                                        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
                                    };

                                    const nextSlide = (slidesCount) => {
                                        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
                                    };

                                    const setSlide = (slide) => {
                                        setCurrentSlide(slide);
                                    };

                                    const carouselStyle = {
                                        transition: "all .5s",
                                        ml: `-${currentSlide * 100}%`,
                                    };
                                    return <Box boxShadow='base' borderRadius={10} key={ind} mt={10} mb={10} height={'150px'} bg={'white'} >
                                        <Flex>
                                            <Flex
                                                w="220px"
                                                bg="#edf3f8"
                                                _dark={{
                                                    bg: "#3e3e3e",
                                                }}
                                                alignItems="center"
                                                justifyContent="center"
                                                h={'150px'}
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
                                                            ></Box>
                                                        ))}
                                                    </HStack>
                                                </Flex>
                                            </Flex>
                                            <Stack pl={4} pt={3} pb={3}>
                                                <Heading size={'sm'}>{el.type} </Heading>
                                                <Text fontSize={'10px'} >👤 x {el.person}</Text>
                                            </Stack>
                                        </Flex>
                                    </Box>
                                })
                            }
                        </Box>
                    </Box>
                    <Box flex='1' display={['none', 'none', 'flex']} >
                        <Heading size={'md'}>Summary</Heading>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
}

export default Availablerooms;
