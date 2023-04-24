import { useEffect, useState, useRef } from 'react';
import {
    Flex, Box, Text, Button, Heading, Input, HStack, Image, Stack, Spacer,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ButtonGroup,
    IconButton,
    useToast,
    useBoolean,
} from '@chakra-ui/react';
import { AddIcon, ArrowForwardIcon, ChevronDownIcon, DeleteIcon, InfoOutlineIcon, MinusIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import Hotelimages from './hotelimages';
import ViewAllPhotos from './view_all_photos';
import Calendar from './calendar';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
const Smallslider = ({ el, ind }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [size, setSize] = useState('full')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    // const slidesCount = slides.length;
    let boolean = false
    let index = -1;
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        // top: "50%",
        w: "10px",
        h: "100%",
        // mt: "-72px",
        pt: '30%',
        // pb: "10%",
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
    return (
        <div>
            <Flex
                w={['full', "200px", "200px"]}
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                alignItems="center"
                justifyContent="center"
                aria-expanded="false"
            // h={'150px'}

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
                                    onClick={() => handleSizeClick('full')}
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
                            >
                            </Box>
                        ))}
                    </HStack>
                </Flex>
            </Flex>
            <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg={'black'}>
                    <ModalHeader bg={'black'}></ModalHeader>

                    <ModalCloseButton color={'white'} />
                    <ModalBody>
                        <ViewAllPhotos images={el.roomimages} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Smallslider;
