import React from 'react';
import { Flex, Box, Text, Button, Heading, Input, } from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Availablerooms = () => {
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
