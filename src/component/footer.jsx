import React from "react";
import { Box, Flex, Link, Text, Image, VStack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt={10} bg={'gray.700'} w={'100%'}>
      <Box overflow={'hidden'} p={4} maxWidth={'1150px'} m={'auto'} as="footer" backgroundColor={"gray.700"} paddingBottom={50}>
        <Flex
          // maxW="7xl"
          // mx="auto"
          // px={8}

          justifyContent="space-evenly"
          alignItems="left"
          flexWrap="wrap"

          m={'auto'}
        >
          <Box as="footer" backgroundColor={"gray.700"} py={8} paddingBottom={20}>
            <Flex
              justifyContent="space-between"
              alignItems="left"
              flexWrap="wrap"
              gap={8}
              pl={{ sm: 5 }}
            >
              <Box mb={[6, 0]} w={["100%", "50%", "33.33%"]}>

                <Image
                  src='https://user-images.githubusercontent.com/83694840/146682423-9bed17e3-83f7-412f-b5de-a0fe01f4f9bd.png'
                  alt='logo'
                  maxWidth="60%"
                  maxHeight="60%"
                  mr={2}
                  ml={2}
                />

                <Text fontSize="md" color={'white'} as='b'>
                  The website ends here, but your journey to the remotest destinations in India and Nepal begins with Zostel. Explore with our social hostels, homestays, and luxury stays on your next holiday.

                </Text>
              </Box>
              <Box
                w={["100%", "50%", "33.33%"]}
                mb={[6, 0]}
                justifyContent={"left"}

              >
                <Text color={"gray.50"} as='b' pb={10}>
                  USEFUL LINKS
                </Text>
                <HStack spacing='20px' mt={6} color={"white"}>
                  <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>

                    <Link href="#">
                      Guest Policy
                    </Link>
                    <Link href="#">
                      Privacy Policy
                    </Link>
                    <Link href="#">
                      Careers
                    </Link>
                    <Link href="#">
                      Conditions
                    </Link>
                  </VStack>
                  <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>
                    <Link mr={4} href="#">
                      Destinations
                    </Link>
                    <Link href="#">
                      Franchise
                    </Link>
                    <Link href="#">
                      Contact Us
                    </Link>
                    <Link href="#">
                      Cookie Policy
                    </Link>
                  </VStack>
                  <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>
                    <Link href="#">
                      About Us
                    </Link>
                    <Link href="#">
                      Support
                    </Link>
                    <Link href="#">
                      Terms
                    </Link>
                    <Link href="#">
                      Mobile App
                    </Link>
                  </VStack>
                </HStack>
              </Box>

              <Box
                flex={1}

              // justifyContent={["center", "center", "flex-end"]}
              // alignItems="left"
              >

                <Box ml={{ lg: '-10px', sm: '10px' }} direction={['column', 'row']}  >
                  <Text mb={6} fontWeight="bold" textAlign={{ sm: 'left' }} fontSize="lg" color={"gray.50"}>
                    DOWNLOAD OUR APP
                  </Text>
                  <Flex flexDirection={['column', 'column', 'row']} gap={4} mb={4}>
                    <Image src='data:image/png;base64,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'
                      alt='Apple & play store'
                      width="130px"
                      mb={5} />
                    <Image src='https://book.zostel.com/static/media/google-play-badge.fba2e10e.png'
                      alt='Apple & play store'
                      maxWidth="130px"
                      mb={5} />

                  </Flex>

                  <Flex mb={4}>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png'
                      alt='Facebook'
                      width={'30px'}
                      mr={8}
                    />
                    <Image src='https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta.png'
                      alt='Instagram'
                      width={'30px'}
                      mr={8}
                    />
                    <Image src='data:image/jpeg;base64,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'
                      alt='Twitter'
                      width={'30px'}
                      mr={8}
                    />
                    <Image src='data:image/png;base64,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'
                      alt='YouTube'
                      width={'30px'}
                    />
                  </Flex>

                  <Text fontWeight="bold" fontSize="sm" color={"gray.50"}>
                    Zostel © 2022. All Rights Reserved
                  </Text>
                </Box>
              </Box>
            </Flex>


          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;