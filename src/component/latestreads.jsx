import { Flex, Box, Card, Stack, Heading, Text, Button, CardBody, CardFooter, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Latestreads = () => {
    return (
        <div >

            <Box pt={4} pb={4} bg={'gray.200'} p={4}>
                <Heading size={'lg'} pb={4}>Latest<span style={{ color: '#f26c4f' }}> Reads</span></Heading>
                <Flex m={'auto'} flexWrap={'wrap'} gap={6} columns={[1, 2, 3]}>
                    <Card maxW={'100%'} w={['340px', '100%', '340px']}>
                        <CardBody>
                            <Image height={'200px'} borderRadius={10} src='https://img.cdn.zostel.com/blog_photo/cola_beach.jpg' />
                            <Stack mt='6' spacing='3'>
                                <Heading noOfLines={1} size='md'>Best of North Goa for backpackers: Hikes, Cafes, & Places to Explore</Heading>
                                <Text noOfLines={2}>
                                    Speaking of reasons to visit Goa, this coveted destination has way too many. And in this travel guide, we are going to cover some heard of, and some entirely new Goa specials.
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Button color='gray.700' leftIcon={'🔥'} variant='ghost' colorScheme='blue'>
                                Vineet Gupta
                            </Button>

                        </CardFooter>
                    </Card>
                    <Card maxW={'100%'} w={['340px', '100%', '340px']}>
                        <CardBody>
                            <Image height={'200px'} borderRadius={10} src='https://img.cdn.zostel.com/blog_photo/DJI_0520.jpg' />
                            <Stack mt='6' spacing='3'>
                                <Heading noOfLines={1} size='md'>A Guide to Your Shillong Tour: Adventure, Day Trips, and More</Heading>
                                <Text noOfLines={2}>
                                    Viridescent visuals, shimmering streams, wondrous waterfalls, and a rocking rhythm encompass the essence of Meghalaya and the splendour of its capital, Shillong. The once-upon-a-time capital of colonial and post-independence Assam became the capital of the newly formed state of Meghalaya in 1972. Since then, Shillong has transformed into an up-and-coming urban cityscape widely famed for its breathtaking natural marvels.                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Button color='gray.700' leftIcon={'🔥'} variant='ghost' colorScheme='blue'>
                                Kajal Semwal
                            </Button>

                        </CardFooter>
                    </Card>
                    <Card maxW={'100%'} w={['340px', '100%', '340px']}>
                        <CardBody>
                            <Image height={'200px'} borderRadius={10} src='https://img.cdn.zostel.com/blog_photo/Cover.jpg' />
                            <Stack mt='6' spacing='3'>
                                <Heading noOfLines={1} size='md'>A Guide to Your Bundi Sightseeing Escape</Heading>
                                <Text noOfLines={2}>
                                    A land of vibrant culture, rich heritage, immemorial traditions, and jaw-dropping architecture, Bundi is an oasis situated in the Hadoti region of Rajasthan. Bundi is also lovingly titled “the Queen of Hadoti,” owing to its replete beauty, which served as a muse to Rudyard Kipling’s “Kim.”                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Button color='gray.700' leftIcon={'🔥'} variant='ghost' colorScheme='blue'>
                                Kajal Semwal
                            </Button>

                        </CardFooter>
                    </Card>
                </Flex >
            </Box>
        </div >
    );
}

export default Latestreads;
