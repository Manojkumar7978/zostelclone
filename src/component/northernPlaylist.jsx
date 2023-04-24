import {
  Box, Grid, GridItem, IconButton, Image,
  Flex,
  Heading,
  Text,
  Center,
  Button

} from "@chakra-ui/react";
import {
  ArrowBackIcon, ArrowForwardIcon, ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NSlider = ({ type }) => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/${type}`);
        setData(res.data);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const handleLeftArrowClick = () => {
    if (start != 0)
      setStart((prevIndex) => prevIndex - 1);
  };

  const handleRightArrowClick = () => {
    if (start < 5)
      setStart((prevIndex) => prevIndex + 1);
  };
  const getCards = (start) => {
    return data.slice(start, start + 5);
  };

  return (
    <Box p={4}>

      <Flex alignItems={'center'}>
        <IconButton
          aria-label="Left Arrow"
          icon={<ChevronLeftIcon />}
          onClick={handleLeftArrowClick}
          isDisabled={start === 0}
          bg={'white'}
          color={'tomato'}
          boxShadow={'lg'}
          fontWeight={'bold'}
          mr={-10}
        />
        <Box display="flex" overflow={'auto'} width={'full'} >
          {
            data.length != 0 && <>
              {getCards(start).map((card) => (
                <Box cursor={'pointer'} onClick={() => {
                  navigate(`/destination/${Math.floor(Math.random() * 10) + 1}`)
                }} key={card.id} width="250px" borderWidth="1px" borderRadius="lg" margin="2" >
                  <Box height={'170px'} overflow={'hidden'}>
                    <Image
                      borderRadius={'10px'}
                      backgroundSize={'cover'}
                      boxSize="full" src={card.image} alt={card.place} width={'100%'} />
                  </Box>
                  <Heading noOfLines={1} ml={2} mt={'-32px'} color={'white'} size="md" w={'150px'} >{card.place}</Heading>
                </Box>
              ))}
            </>
          }
        </Box>
        <IconButton
          aria-label="Right Arrow"
          icon={<ChevronRightIcon />}
          onClick={handleRightArrowClick}
          isDisabled={start == 3}
          bg={'white'}
          color={'tomato'}
          boxShadow={'lg'}
          fontWeight={'bold'}
          ml={-10}
        />
      </Flex>
    </Box>
  );
};

export default NSlider;