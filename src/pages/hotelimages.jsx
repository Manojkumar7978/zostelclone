import React from 'react';
import {
    Box, Grid, GridItem, Image, Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react';
import style from './hotelrooms.module.css'
import { ViewIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import ViewAllPhotos from './view_all_photos';

const Hotelimages = ({ images }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const sizes = ['full']

    return (
        <div>
            <Box borderRadius={'12px'} pt={2}>
                <Grid onClick={() => handleSizeClick('full')} bg={'white'} templateColumns='repeat(4, 1fr)' gap={1} display={['none', 'grid', 'grid']}>
                    <GridItem colSpan={3} rowSpan={3}>
                        <Image _hover={{ opacity: '0.7', cursor: 'zoom-in' }} borderRadius={'12px 0 0 12px'} src={images[0]} w={'100%'} h={'100%'} />
                    </GridItem>
                    <GridItem>
                        <Image _hover={{ opacity: '0.7', cursor: 'zoom-in' }} borderRadius={'0 12px 0 0'} src={images[1]} h={'100%'} w={'100%'} />
                    </GridItem>
                    <GridItem>
                        <Image _hover={{ opacity: '0.7', cursor: 'zoom-in' }} borderRadius={'0 0 0 0'} src={images[2]} h={'100%'} w={'100%'} />
                    </GridItem>
                    <GridItem>
                        <Image _hover={{ opacity: '0.7', cursor: 'zoom-in' }} borderRadius={'0 0 12px 0'} src={images[3]} h={'100%'} w={'100%'} />

                    </GridItem>
                    {/* <Button onClick={() => handleSizeClick(size)}
                        key={size}
                        m={4} ml={4} mt={-20} leftIcon={<ViewIcon />} colorScheme='gray' variant='solid' w={'150px'}>
                        View All Photos
                    </Button> */}
                    {sizes.map((size) => (
                        <Button
                            onClick={() => handleSizeClick(size)}
                            key={size}
                            m={4}
                            ml={4} mt={-20} leftIcon={<ViewIcon />} colorScheme='gray' variant='solid' w={'150px'}
                        >View All Photos</Button>
                    ))}
                </Grid>



                <Modal onClose={onClose} size={size} isOpen={isOpen} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader bg={'black'}></ModalHeader>
                        <ModalCloseButton color={'white'} />
                        <ModalBody bg={'black'}   >
                            <ViewAllPhotos images={images} />
                        </ModalBody>

                    </ModalContent>
                </Modal>


            </Box>

        </div >
    );
}

export default Hotelimages;
