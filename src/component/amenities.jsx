import { Text, Heading, Grid, Box, Button, GridItem } from '@chakra-ui/react';
import React from 'react';

const Amenities = () => {
    let list = [
        '🌄 Mountain View',
        '🗝 Lockers',
        '♨️ Hot Water',
        '🧺 Laundry Services (Extra)',
        '📶 Free Wi-Fi',
        '📺 common Television',
        '🥛 Water Dispenser',
        'Air-conditioning',
        '⛰ 24/7 Reception',
        '♣ Common hangout area',
        '☕ Cafe',
        '🎮 In-house Activities',
        '🛏 Extra bed on request',
        '🥞 Breakfast (Extra)',
        '🏪 Storage Facility',
        'UPI Payment Accepted',
        '🏡 Balcony',
        '🚿 Shower',
        '🅿 Parking'
    ]
    return (
        <div>
            <Heading as='h1' size={'4xl'} color={'black'}>Amenities</Heading>
            <Text noOfLines={1}>
                <Grid gap={10} templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} >
                    {
                        list.map((el, ind) => {
                            return <GridItem key={ind} >
                                <Box as='button' color={'black'} textAlign={'left'} pl={0} bg={'white'} border={'none'}>
                                    {el}
                                </Box >
                            </GridItem>
                        })
                    }
                </Grid>
            </Text>
        </div>
    );
}

export default Amenities;
