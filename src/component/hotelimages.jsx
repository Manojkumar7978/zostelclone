import React from 'react';
import { Box, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import style from './hotelrooms.module.css'

const Hotelimages = ({ images }) => {

    return (
        <div>
            <Box borderRadius={'12px'}>
                <Grid bg={'white'} templateColumns='repeat(4, 1fr)' gap={3}>
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
                    {/* <Button className={style.viewallimage} colorScheme='teal' variant='outline'>
                        View All Image
                    </Button> */}
                </Grid>


            </Box>

        </div>
    );
}

export default Hotelimages;
