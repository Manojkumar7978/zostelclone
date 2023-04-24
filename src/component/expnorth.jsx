import { useState, useEffect } from "react";
import {
    Box,
    Image,
    Heading,
    Text,
    Button,
    Flex,
    IconButton,
    Center,
} from "@chakra-ui/react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    TimeIcon
} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";

const Expnorth = () => {
    let navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [whatsNewData, setWhatsNewData] = useState([]);

    useEffect(() => {
        const fetchWhatsNewData = async () => {
            const response = await fetch("http://localhost:8080/north");
            const data = await response.json();
            setWhatsNewData(data);
        };
        fetchWhatsNewData();
    }, []);

    const getCards = (startIndex) => {
        return whatsNewData.slice(startIndex, startIndex + 5);
    };

    const handleLeftArrowClick = () => {
        if (currentIndex != 0)
            setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleRightArrowClick = () => {
        if (currentIndex < 5)
            setCurrentIndex((prevIndex) => prevIndex + 1);
    };
    return (
        <div>
            <Box>
                <Flex alignItems={'center'}>
                    <IconButton
                        aria-label="Left Arrow"
                        icon={<ChevronLeftIcon />}
                        onClick={handleLeftArrowClick}
                        isDisabled={currentIndex === 0}
                        bg={'white'}
                        color={'tomato'}
                        boxShadow={'lg'}
                        fontWeight={'bold'}
                        mr={-10}
                    />
                    <Box display="flex" overflow={'auto'} maxWidth={["full", "full", "full"]}>
                        {
                            whatsNewData.length != 0 && <>
                                {getCards(currentIndex).map((card) => (
                                    <Box key={card.id} width="250px" borderWidth="1px" borderRadius="lg" margin="2" >
                                        <Box height={'220px'} overflow={'hidden'}>
                                            <Image
                                                borderRadius={'10px 10px 0 0'}
                                                backgroundSize={'cover'}
                                                boxSize="full" src={card.image} alt={card.title} width={'100%'} />
                                        </Box>
                                        <Box p={2} >
                                            <Box h={'38px'}>
                                                <Heading noOfLines={2} size="sm" mt={1}>{card.title}</Heading>
                                            </Box>
                                            <Box mt={1} h={'70px'}>
                                                <Text fontSize="14px" color={'gray.500'} noOfLines={3}>{card.place}</Text>
                                                <Text fontSize="14px" mt={1} color={'gray.500'} noOfLines={3}>Rs. {card.price} onwards</Text>
                                                <Text pt={1} fontSize="14px" color={'gray.500'} noOfLines={3}> <TimeIcon />{card.days}</Text>
                                            </Box>
                                            <Center>
                                                <Button onClick={() => {
                                                    navigate(`/destination/${Math.floor(Math.random() * 10) + 1}`)
                                                }} width={'80%'} boxShadow={'lg'} _hover={{ bg: 'white', color: 'tomato' }} color={'white'} bg={'tomato'} size="md" w={'150px'} mt={1}>Explore Now</Button>
                                            </Center>
                                        </Box>
                                    </Box>
                                ))}
                            </>
                        }
                    </Box>
                    <IconButton
                        aria-label="Right Arrow"
                        icon={<ChevronRightIcon />}
                        onClick={handleRightArrowClick}
                        isDisabled={currentIndex == 2}
                        bg={'white'}
                        color={'tomato'}
                        boxShadow={'lg'}
                        fontWeight={'bold'}
                        ml={-10}
                    />
                </Flex>
            </Box>
        </div>
    );
}

export default Expnorth;
