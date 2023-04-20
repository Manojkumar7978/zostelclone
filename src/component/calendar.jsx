import React, { useState } from 'react';
import { Text, Box, Flex, Image } from '@chakra-ui/react';




const Calendar = ({ data }) => {
    let [x, setX] = useState(1);
    let array = [x, x + 1, x + 2, x + 3, x + 4, x + 5, x + 6]
    const today = new Date()
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const months = ["Jan", "Feb", "Mar", "Aprl", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dev"];

    return (
        <div style={{ width: '100%' }}>
            <Flex alignItems={'cennter'} justifyContent={'space-evenly'}>
                {
                    array.map((el, ind) => {

                        const tomorrow = new Date(today)
                        tomorrow.setDate(tomorrow.getDate() + el)
                        let unit = Math.floor(Math.random() * 11)

                        return <>

                            <Flex flexDirection={'column'} alignItems={'center'}>

                                <Text color={'#718096'} fontSize={'12px'}>{day[tomorrow.getDay()]}</Text>
                                <Text mb={2} color={'#718096'} fontWeight={'bold'} fontSize={'14px'}>{months[tomorrow.getMonth()]} <span>
                                    {tomorrow.getDate()}
                                </span></Text>

                                <Text color={'#48bb78'} fontWeight={'bold'} fontSize={'14px'}>{
                                    unit != 0 ? <>₹ {data.pricepernight}</> : <Text color={'#718096'}>x</Text>
                                }  </Text>
                                <Text color={'#718096'} fontSize={'12px'} fontWeight={'bold'}>{
                                    unit == 0 ? <>
                                        No Units
                                    </> :
                                        <>
                                            {unit} units
                                        </>
                                }</Text>
                            </Flex>
                        </>
                    })
                }
            </Flex>

        </div>
    );
}

export default Calendar;
