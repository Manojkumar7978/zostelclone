import React from 'react';
import {
  Box, Flex, Button, Image, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack, chakra,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';

const HoverMenuItem = chakra(MenuItem, {
  baseStyle: {
    bg: 'black',
    color: 'white',
    _hover: { color: 'tomato' }
  },
});


const Navbar = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box overflow={'hidden'} maxW={'1150px'} bg='white' px={4} mt={1.5} mb={1.5}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Image
          src='https://user-images.githubusercontent.com/83694840/146682423-9bed17e3-83f7-412f-b5de-a0fe01f4f9bd.png'
          alt='logo'
          maxWidth="150px"
          maxHeight="170%"
          mr={15}
          ml={7}
          cursor={'pointer'}
          onClick={() => { navigate('/') }}
        />


        <Box gap={-1} alignItems={'center'} display={['none', 'none', 'flex']}>
          <Link to='/destination'>
            <Button colorScheme='black' size='sm' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
              Destinations
            </Button>
          </Link>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
              Zostel
            </MenuButton>
            <MenuList zIndex={2} bg={'black'} borderColor={'black'}>
              <Stack direction={["column", "row"]} fontSize={'sm'} borderColor={'black'}>
                <Box w="100%" h="100%">
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/1'>Zostel Alleppy</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/2'>Zostel Aurangabad</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/3'>Zostel Bangalore</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/4'>Zostel Banikhet (Dalhousie)</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/5'>Zostel Barot (Rajgundha)</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/8'>Zostel Bundi</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Chitkul</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Coorg (Madikeri)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Coorg (Siddapur)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dalhousie</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Delhi</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dharamkot</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dobhi</MenuItem>
                </Box>
                <Box w="100%" h="100%">
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Gangtok</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Goa (Morjim)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Gokarna</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Hyderabad</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jaipur</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jaisalmer</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jodhpur</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kathmandu</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kochi</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kodaikanal</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kolad</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Leh</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Manali (Burwa)</MenuItem>
                </Box>
                <Box w="100%" h="100%">
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Manali (Old Manali)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/9'>Zostel Manali (Vashisht)</Link></MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel McLeodganj</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mukteshwar</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mumbai</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Munnar</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mysore</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Ooty</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Pokhara</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Pushkar</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Rishikesh (Laxman Jhula)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Rishikesh (Tapovan)</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Sangla</MenuItem>
                </Box>
                <Box w="100%" h="100%">
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Shangarh</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Shillong</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Sissu</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Spiti</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Srinagar</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Udaipur</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Vagamon</MenuItem>
                  <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Varkala</MenuItem>
                </Box>
              </Stack>
            </MenuList>
          </Menu>


          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
              Zostel Homes
            </MenuButton>
            <MenuList zIndex={2} bg={'black'} borderColor={'black'}>
              <Stack direction={["column", "row"]} fontSize={'sm'} borderColor={'black'}>
                <Box w="100%" h="100%">
                  <HoverMenuItem><Link to='/destination/6'>Zostel Homes Bhor</Link></HoverMenuItem>
                  <HoverMenuItem><Link to='/destination/10'>Zostel Homes Chamera (Chamba)</Link></HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Cheog</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Harabhag (Joginder Nagar)</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Kasar Devi</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Kibber</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Kotkhai</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Laida</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Mashobra</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Pedong</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Pushkar</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Rakchham</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Ramgarh (Nainital)</HoverMenuItem>
                </Box>
                <Box w="100%" h="100%">
                  <HoverMenuItem>Zostel Homes Rashil</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Shimla</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Tabo</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Theog</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Wayanad (Karapuzha)</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Wayanad (Thirunelly)</HoverMenuItem>
                  <HoverMenuItem>Zostel Homes Wayanad (Vythiri)</HoverMenuItem>
                </Box>
              </Stack>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
              Zostel Plus
            </MenuButton>
            <MenuList zIndex={2} bg={'black'} borderColor={'black'}>
              <HoverMenuItem><Link to='/destination/7'>Zostel Plus Bir</Link></HoverMenuItem>
              <HoverMenuItem>Zostel Plus Kareri</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Lonavala</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Mussoorie</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Nainital (Naina Range)</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Panchgani</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Rishikesh (Mohanchatti)</HoverMenuItem>
              <HoverMenuItem>Zostel Plus Wayanad</HoverMenuItem>
            </MenuList>
          </Menu>
          <Link href='/contact'>
            <Button colorScheme='black' size='sm' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
              Franchise
            </Button>
          </Link>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
              Join us
            </MenuButton>
            <MenuList zIndex={2} bg={'black'} borderColor={'black'}>
              <HoverMenuItem>Careers</HoverMenuItem>
              <HoverMenuItem>Zostel Internship Program</HoverMenuItem>
              <HoverMenuItem>Artist Collaboration Program</HoverMenuItem>
              <HoverMenuItem>Travel Agency Partner Program</HoverMenuItem>
              <HoverMenuItem>Tour Operator Partner Program</HoverMenuItem>
              <HoverMenuItem>Travel, Shoot & Learn with Zostel</HoverMenuItem>
            </MenuList>
          </Menu>
          <Link href='/contact'>
            <Button colorScheme='black' size='md' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
              Blog
            </Button>
          </Link>
          <Link href='/contact'>
            <Button colorScheme='orange' size='sm' variant='outline' as='b' mr={8} _hover={{ color: "tomato" }}>
              Download App
            </Button>
          </Link>
        </Box>
        <Box display={['initial', 'initial', 'none']}>

          <HamburgerIcon cursor='pointer' onClick={() => onOpen()} />


          <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} size={'full'}>
            <DrawerOverlay />
            <DrawerContent bg='black'>

              <DrawerHeader pl={5}>
                <Flex alignItems={'center'}>
                  <Flex gap={4} alignItems={'center'} >
                    <Image src='data:image/png;base64,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' width={'40px'} />

                    <Text fontWeight={'bold'} color={'white'}>Z O S T E L</Text>
                  </Flex >
                  <Spacer />
                  <DrawerCloseButton color={'white'} />
                </Flex>
              </DrawerHeader>
              <DrawerBody p={5}>
                <Flex alignItems={'flex-start'} flexDirection={'column'} gap={10}>
                  <Text onClick={() => { onClose() }} fontWeight='bold' color='white' ><Link to={'/destination'}>Destination</Link></Text>
                  <Menu>
                    <MenuButton color={'white'} fontWeight={'bold'} as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' _hover={{ color: "tomato" }}>
                      Zostel
                    </MenuButton>
                    <MenuList onClick={() => { onClose() }} zIndex={2} bg={'black'} borderColor={'black'}>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/1'>Zostel Alleppy</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/2'>Zostel Aurangabad</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/3'>Zostel Bangalore</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/4'>Zostel Banikhet (Dalhousie)</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/5'>Zostel Barot (Rajgundha)</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/8'>Zostel Bundi</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Chitkul</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Coorg (Madikeri)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Coorg (Siddapur)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dalhousie</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Delhi</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dharamkot</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Dobhi</MenuItem>

                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Gangtok</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Goa (Morjim)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Gokarna</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Hyderabad</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jaipur</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jaisalmer</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Jodhpur</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kathmandu</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kochi</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kodaikanal</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Kolad</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Leh</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Manali (Burwa)</MenuItem>

                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Manali (Old Manali)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}><Link to='/destination/9'>Zostel Manali (Vashisht)</Link></MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel McLeodganj</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mukteshwar</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mumbai</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Munnar</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Mysore</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Ooty</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Pokhara</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Pushkar</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Rishikesh (Laxman Jhula)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Rishikesh (Tapovan)</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Sangla</MenuItem>

                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Shangarh</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Shillong</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Sissu</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Spiti</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Srinagar</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Udaipur</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Vagamon</MenuItem>
                      <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Varkala</MenuItem>


                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton color={'white'} fontWeight={'bold'} as={Button} rightIcon={<ChevronDownIcon />} colorScheme='white' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
                      Zostel Homes
                    </MenuButton>
                    <MenuList onClick={() => { onClose() }} zIndex={2} bg={'black'} borderColor={'black'}>
                      <HoverMenuItem><Link to='/destination/6'>Zostel Homes Bhor</Link></HoverMenuItem>
                      <HoverMenuItem><Link to='/destination/10'>Zostel Homes Chamera (Chamba)</Link></HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Cheog</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Harabhag (Joginder Nagar)</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Kasar Devi</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Kibber</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Kotkhai</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Laida</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Mashobra</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Pedong</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Pushkar</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Rakchham</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Ramgarh (Nainital)</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Rashil</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Shimla</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Tabo</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Theog</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Wayanad (Karapuzha)</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Wayanad (Thirunelly)</HoverMenuItem>
                      <HoverMenuItem>Zostel Homes Wayanad (Vythiri)</HoverMenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton color={'white'} fontWeight={'bold'} as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
                      Zostel Plus
                    </MenuButton>
                    <MenuList onClick={() => { onClose() }} zIndex={2} bg={'black'} borderColor={'black'}>
                      <HoverMenuItem><Link to='/destination/7'>Zostel Plus Bir</Link></HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Kareri</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Lonavala</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Mussoorie</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Nainital (Naina Range)</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Panchgani</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Rishikesh (Mohanchatti)</HoverMenuItem>
                      <HoverMenuItem>Zostel Plus Wayanad</HoverMenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton color={'white'} fontWeight={'bold'} as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='sm' variant='link' mr={8} _hover={{ color: "tomato" }}>
                      Join us
                    </MenuButton>
                    <MenuList onClick={() => { onClose() }} zIndex={2} bg={'black'} borderColor={'black'}>
                      <HoverMenuItem>Careers</HoverMenuItem>
                      <HoverMenuItem>Zostel Internship Program</HoverMenuItem>
                      <HoverMenuItem>Artist Collaboration Program</HoverMenuItem>
                      <HoverMenuItem>Travel Agency Partner Program</HoverMenuItem>
                      <HoverMenuItem>Tour Operator Partner Program</HoverMenuItem>
                      <HoverMenuItem>Travel, Shoot & Learn with Zostel</HoverMenuItem>
                    </MenuList>
                  </Menu>
                  <Link onClick={() => { onClose() }} href='/contact'>
                    <Button color={'white'} size='md' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
                      Blog
                    </Button>
                  </Link>
                  <Link onClick={() => { onClose() }} href='/contact'>
                    <Button colorScheme='orange' size='lg' variant='outline' as='b' mr={8} _hover={{ color: "tomato" }}>
                      Download App
                    </Button>
                  </Link>
                </Flex>

              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;