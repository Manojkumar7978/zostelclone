import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { 
  ChevronLeftIcon,
  ChevronRightIcon } from "@chakra-ui/icons"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [whatsNewData, setWhatsNewData] = useState([]);

  useEffect(() => {
    const fetchWhatsNewData = async () => {
      const response = await fetch("http://localhost:8080/whatsnew");
      const data = await response.json();
      setWhatsNewData(data.whatsnew);
    };
    fetchWhatsNewData();
  }, []);

  const getCards = (startIndex) => {
    return whatsNewData.slice(startIndex, startIndex + 5);
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Box>
      <Flex>
        <IconButton
          aria-label="Left Arrow"
          icon={<ChevronLeftIcon />}
          onClick={handleLeftArrowClick}
          disabled={currentIndex === 0}
        />
        <Box display="flex" overflowX="scroll" maxWidth="full">
          {getCards(currentIndex).map((card) => (
            <Box key={card.id} width="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="2">
              <Image src={card.image} alt={card.title} />
              <Box p="6">
              <Heading as="h4" size="md" mb="2">{card.title}</Heading>
            <Text fontSize="sm" mb="2">{card.date}</Text>
            <Text fontSize="sm">{card.description}</Text>
            <Button colorScheme="tomato" size="sm" mt="4">Book Now</Button>
          </Box>
        </Box>
      ))}
    </Box>
    <IconButton
      aria-label="Right Arrow"
      icon={<ChevronRightIcon />}
      onClick={handleRightArrowClick}
      disabled={currentIndex + 5 >= whatsNewData.length}
    />
  </Flex>
</Box>
);
};
export default Slider;