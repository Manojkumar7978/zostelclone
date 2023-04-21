import React from 'react';
import { Box, Flex, Link, Button, Image, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Stack
 } from '@chakra-ui/react';
 import { ChevronDownIcon } from "@chakra-ui/icons";



const Navbar = () => {
  return (
    <Box bg='white' px={4} mt={1.5} mb={1.5}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        

  <Image
    src='https://franchisebyte.com/wp-content/uploads/2022/09/Zostel-Franchise-Logo.png'
    alt='logo'
    maxWidth="150%"
    maxHeight="150%"
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
  <MenuList bg='black' borderColor='black'>
  <Stack direction={["column","row"]} fontSize={'sm'} borderColor={'black'}>
  <Box w="100%" h="100%">
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Alleppy</MenuItem>
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Aurangabad</MenuItem>
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Bangalore</MenuItem>
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Banikhet (Dalhousie)</MenuItem>
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Barot (Rajgundha)</MenuItem>
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Bundi</MenuItem>
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
    <MenuItem bg={'black'} color={'white'} _hover={{ color: "tomato" }}>Zostel Manali (Vashisht)</MenuItem>
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
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
          
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='black' size='md' variant='link' mr={8} _hover={{ color: "tomato" }}>
    Zostel Plus
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
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
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
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
