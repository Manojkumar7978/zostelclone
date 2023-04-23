import React from 'react';
import { Box, Flex, Link, Button, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Stack, chakra
 } from '@chakra-ui/react';
 import { ChevronDownIcon } from "@chakra-ui/icons";

const HoverMenuItem = chakra(MenuItem, {
  baseStyle: { 
    bg: 'black', 
    color: 'white', 
    _hover: { color: 'tomato' } 
  },
});


const Navbar = () => {
  return (
    <Box bg='white' px={4} mt={1.5} mb={1.5}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        

  <Image
    src='https://user-images.githubusercontent.com/83694840/146682423-9bed17e3-83f7-412f-b5de-a0fe01f4f9bd.png'
    alt='logo'
    maxWidth="170%"
    maxHeight="170%"
    mr={15}
    ml={7}
  />

        <Box>
          <Link href='/about'>
            <Button colorScheme='black' size='md' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
              Destinations
            </Button>
          </Link>
         
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='md' variant='link' mr={8} _hover={{ color: "tomato" }}>
    Zostel
  </MenuButton>
  <MenuList bg={'black'} borderColor={'black'}>
  <Stack direction={["column","row"]} fontSize={'sm'} borderColor={'black'}>
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
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='md' variant='link' mr={8} _hover={{ color: "tomato" }}>
    Zostel Homes
  </MenuButton>
  <MenuList  bg={'black'} borderColor={'black'}>
    <Stack direction={["column","row"]} fontSize={'sm'} borderColor={'black'}>
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
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='md' variant='link' mr={8} _hover={{ color: "tomato" }}>
    Zostel Plus
  </MenuButton>
  <MenuList bg={'black'} borderColor={'black'}>
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
            <Button colorScheme='black' size='md' variant='link' as='b' mr={8} _hover={{ color: "tomato" }}>
              Franchise
            </Button>
          </Link>
          
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='md' variant='link' mr={8} _hover={{ color: "tomato" }}>
    Join us
  </MenuButton>
  <MenuList bg={'black'} borderColor={'black'}>
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
            <Button colorScheme='orange' size='md' variant='outline' as='b' mr={8} _hover={{ color: "tomato" }}>
              Download App
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
