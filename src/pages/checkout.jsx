import React from 'react';
import {
    Box, Button, Heading, Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Input,
    Grid,
    Select,
    InputGroup,
    InputLeftAddon,
    Textarea,
    Divider,
    Checkbox,
    Image,
    Spacer

} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../component/loading';

const Checkout = () => {
    let [loading, setLoading] = useState(true)
    let totalPrice = 0;
    let data = JSON.parse(localStorage.getItem('bookedRooms'))
    console.log(data)
    let [reserve, setReserve] = useState(false)
    let [formData, setFormData] = useState({ gender: 'male', checkbox: false })
    document.title = 'Confirm your Booking'
    let navigate = useNavigate()
    let [query, setQuery] = useSearchParams()
    let [validate, setValidate] = useState('name')
    let hotelid = query.get('hotelid')
    let destinationid = query.get('destinationid')
    let checkin = query.get('checkin')
    let checkout = query.get('checkout')
    let currency = query.get('currency')
    let totalnight = query.get('totalnight')
    // console.log(totalPrice)

    useEffect(() => {
        if (formData.firstname == '' || formData.firstname == undefined) {
            setValidate('name')
            setReserve(false)
        } else if (formData.email == '' || formData.email == undefined || formData.email.includes('@') == false) {
            setValidate('email')
            setReserve(false)
        } else if (formData.number == undefined || formData.number.length != 10) {
            setValidate('valid number')
            setReserve(false)
        } else if (formData.address == '' || formData.address == undefined) {
            setValidate('address')
            setReserve(false)
        } else if (formData.checkbox == false) {
            setValidate('checkbox')
            setReserve(false)
        } else {
            setReserve(true)
        }
        setLoading(false)
    }, [formData, loading])

    return (
        <div w={'1100px'} m={'auto'} >
            {
                loading ? <><Loading /></> :
                    <Box maxWidth={'1100px'} m={'auto'} mt={4} mb={2}>
                        <ArrowBackIcon onClick={() => {
                            navigate({
                                pathname: `/zostelhomes/${destinationid}`,
                                search: `?hotelid=${hotelid}`,
                            });
                        }} cursor={'pointer'} fontWeight={'bold'} size={'lg'} fontSize={'3xl'} />
                        <Button fontWeight={'bold'} fontSize={'3xl'} variant={'ghost'} _hover={{ bg: 'white' }} >Confirm your booking</Button>
                        <Box >
                            <Flex gap={4} flexDirection={['column', 'column', 'row']}>
                                <Box flex={2} width={'auto'}  >
                                    <Accordion mt={4} mb={3} flex={2} border={'1px solid white'} defaultIndex={[0, 1]} allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton _hover={{ bg: '#f4f8fb' }} bg={'#f4f8fb'} borderRadius={10} border={'1px solid #f4f8fb'} boxShadow={'sm'}>
                                                    <Box fontWeight={'bold'} color={'gray.700'} as="span" flex='1' textAlign='left'>
                                                        Guest Information
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel  >
                                                <Box>

                                                    <Heading fontWeight={'bold'} fontSize={'13px'} color={'gray.700'}>Guest #1</Heading>
                                                    <Flex mt={5} flexDirection={'row'} gap={4} alignItems={'center'}>
                                                        <Box w={'80px'}>Name<sup style={{ color: 'red' }}>*</sup></Box>
                                                        <Box><Input onChange={(e) => {
                                                            setFormData({
                                                                ...formData,
                                                                firstname: e.target.value
                                                            })
                                                        }} type='text' color={'gray.700'} fontSize={'13px'} placeholder='Enter the first name' /></Box>
                                                        <Box><Input onChange={(e) => {
                                                            setFormData({
                                                                ...formData,
                                                                middlename: e.target.value
                                                            })
                                                        }} type='text' color={'gray.700'} fontSize={'13px'} placeholder='Enter the middle name' />
                                                        </Box>
                                                        <Box><Input onChange={(e) => {
                                                            setFormData({
                                                                ...formData,
                                                                lastname: e.target.value
                                                            })
                                                        }} type='text' color={'gray.700'} fontSize={'13px'} placeholder='Enter the last name' />
                                                        </Box>
                                                    </Flex >
                                                    <Flex mt={5} flexDirection={'row'} gap={4} alignItems={'center'} >
                                                        <Box w={'80px'}>Gender<sup style={{ color: 'red' }}>*</sup></Box>
                                                        <Box flex='1' >
                                                            <Select onChange={(e) => {
                                                                setFormData({
                                                                    ...formData,
                                                                    gender: e.target.value
                                                                })
                                                            }} defaultValue={'male'} >
                                                                <option value='male'>Male</option>
                                                                <option value='female'>Female</option>
                                                                <option value='other'>Other</option>
                                                            </Select>
                                                        </Box>

                                                    </Flex >
                                                    <Flex mt={5} flexDirection={'row'} gap={4} alignItems={'center'} >
                                                        <Box w={'80px'}>Email<sup style={{ color: 'red' }}>*</sup></Box>
                                                        <Box flex='1' >
                                                            <Input onChange={(e) => {
                                                                setFormData({
                                                                    ...formData,
                                                                    email: e.target.value
                                                                })
                                                            }} type='email' placeholder='Select the Email' />
                                                        </Box>

                                                    </Flex >
                                                    <Flex mt={5} flexDirection={'row'} gap={4} alignItems={'center'} >
                                                        <Box w={'80px'}>Number<sup style={{ color: 'red' }}>*</sup></Box>
                                                        <Box flex='1' >
                                                            <InputGroup>
                                                                <InputLeftAddon children='+91' />
                                                                <Input onChange={(e) => {
                                                                    setFormData({
                                                                        ...formData,
                                                                        number: e.target.value
                                                                    })
                                                                }} type='tel' placeholder='phone number' />
                                                            </InputGroup>                                                    </Box>

                                                    </Flex >
                                                    <Flex mt={5} flexDirection={'row'} gap={4} alignItems={'center'} >
                                                        <Box w={'80px'}>Address<sup style={{ color: 'red' }}>*</sup></Box>
                                                        <Box flex='1' >
                                                            <Textarea onChange={(e) => {
                                                                setFormData({
                                                                    ...formData,
                                                                    address: e.target.value
                                                                })
                                                            }} placeholder='Select the address' />


                                                        </Box>

                                                    </Flex >

                                                </Box>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion mt={2} mb={2} flex={2} border={'1px solid white'} defaultIndex={[0, 1]} allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton _hover={{ bg: '#f4f8fb' }} bg={'#f4f8fb'} borderRadius={10} border={'1px solid #f4f8fb'} boxShadow={'sm'}>
                                                    <Box fontWeight={'bold'} color={'gray.700'} as="span" flex='1' textAlign='left'>
                                                        Property Policy
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel color={'gray.700'}>
                                                <Text size={'13px'}>- Guests are required to pay a 21% advance at the time of booking itself. The entire balance needs to be cleared upon arrival at the property during check-in.</Text>
                                                <Text size={'13px'}>- Our standard check-in time is 12 PM and the standard check-out time is 10 AM. Early check-in and late check-out requests are subject to availability, and may also attract an additional fee at the property's discretion.</Text>
                                                <Text size={'13px'}>- We strictly DO NOT allow a group of more than 8 people. In case of a group of 4 or more, you might be purposefully allotted different dorm rooms. Further, if the group behaviour is deemed unfit at the property, the Zostel Property Manager, upon subjective evaluation, retains the full right to take required action which may also result in an on-spot cancellation without refunds.</Text>
                                                <Text size={'13px'}>- Children below 18 years of age are not permitted entry/stay at any of our hostels, with or without guardians. We do not recommend families.</Text>
                                                <Text size={'13px'}>- We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.</Text>
                                                <Text size={'13px'}>- Guests are not permitted to bring outsiders inside the hostel campus.</Text>
                                                <Text size={'13px'}>- We believe in self-help and do not provide luggage assistance or room services.</Text>
                                                <Text size={'13px'}>- Drugs and any substance abuse is strictly banned inside and around the property.</Text>
                                                <Text size={'13px'}>- Alcohol consumption is permitted at the premises as per the property’s discretion and local laws. Please reach out to the property prior to your arrival to confirm the same.</Text>
                                                <Text size={'13px'}>- Right to admission reserved. </Text>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion mt={3} mb={4} flex={2} border={'1px solid white'} defaultIndex={[0, 1]} allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton _hover={{ bg: '#f4f8fb' }} bg={'#f4f8fb'} borderRadius={10} border={'1px solid #f4f8fb'} boxShadow={'sm'}>
                                                    <Box fontWeight={'bold'} color={'gray.700'} as="span" flex='1' textAlign='left'>
                                                        Cancellation Policy
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel color={'gray.700'} >
                                                <Text mb={3} size={'13px'}>We understand that sometimes plans change. Hence, to make it light on your pocket, we are only charging a 21% advance, which is on a non-refundable basis.</Text>
                                                <Heading size={'13px'} fontWeight={'normal'}>NOTE:</Heading>
                                                <Text size={'13px'}>- 21% advance payment is non-refundable at all times, as stated above. </Text>
                                                <Text size={'13px'}>- If you have paid any amount over this 21%, it stands applicable for a credit only if the cancellation is informed 7 days or more in advance. You will be able to avail the credited amount for any future booking at any of our properties.</Text>
                                                <Text size={'13px'}>- If informed within 7 days of the standard check-in time (12 pm), the amount shall be adjusted against the cancellation fee.</Text>
                                                <Text size={'13px'} mt={5}>For any other queries, please reach out to us at reservations@zostel.com.</Text>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Box>
                                <Box flex={1} width={'auto'} pt={5} >
                                    <Box position={'sticky'} top={0} zIndex={2} borderRadius={10} boxShadow={'sm'} p={4} bg={'#f4f8fb'}>
                                        <Heading size={'md'} >Summary</Heading>
                                        <Flex gap={1} fontSize={'13px'}>
                                            <Text fontWeight={'bold'} color={'black'}>{totalnight} night
                                            </Text>
                                            <Text color='gray' fontWeight='bold'>{' '}starting from </Text>
                                            <Text color='black' fontWeight='bold'>
                                                {checkin}
                                            </Text>

                                        </Flex>
                                        <Box mt={4}>
                                            {
                                                data.map((el, ind) => {
                                                    totalPrice += (el.pricepernight * el.bed * totalnight)
                                                    console.log(totalPrice)
                                                    return <Box mt={4}>
                                                        <Flex gap={1}>
                                                            <Image src={el.image} borderRadius={5} width={'70px'} />
                                                            <Flex flex={1} flexDirection={'column'}>
                                                                <Text noOfLines={1}><span style={{ fontSize: '13px', fontWeight: 'bold' }}>{el.type} <span style={{ color: 'grey' }}>x {el.bed}</span></span>
                                                                </Text>
                                                                <Flex>
                                                                    <span style={{ fontSize: '13px', fontWeight: 'bolder', color: 'grey' }}>
                                                                        {
                                                                            currency == "USD" ?
                                                                                <>
                                                                                    $

                                                                                    {
                                                                                        ' ' + (el.pricepernight * el.bed / 82.14).toFixed(2) + ' '
                                                                                    }
                                                                                    x {totalnight} night
                                                                                </> :
                                                                                <>

                                                                                    ₹
                                                                                    {
                                                                                        ' ' + el.pricepernight * el.bed + ' '
                                                                                    }
                                                                                    x {totalnight} night</>
                                                                        }
                                                                    </span>
                                                                    <Spacer />
                                                                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{
                                                                        currency == "USD" ?
                                                                            <>
                                                                                $
                                                                                {
                                                                                    ' ' + (el.pricepernight * el.bed * totalnight / 82.14).toFixed(2)
                                                                                }
                                                                            </> :
                                                                            <>

                                                                                ₹
                                                                                {
                                                                                    ' ' + el.pricepernight * el.bed * totalnight
                                                                                }
                                                                            </>
                                                                    }</span>
                                                                </Flex>
                                                            </Flex>

                                                        </Flex>

                                                    </Box>
                                                })
                                            }
                                        </Box>
                                        <Box>
                                            <Flex mt={5} alignItems={'center'}>
                                                <Text fontSize={'14px'} fontWeight={'bold'}>Tax</Text>
                                                <Spacer />
                                                <Text fontSize={'14px'} fontWeight={'bold'} >
                                                    {
                                                        currency == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + Math.round((totalPrice * 12) / 100)
                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((Math.round((totalPrice * 12) / 100)) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }

                                                </Text>
                                            </Flex>
                                            <Flex mt={2} alignItems={'center'}>
                                                <Text fontSize={'14px'} fontWeight={'bold'}>Total (tax incl.)</Text>
                                                <Spacer />
                                                <Text fontSize={'14px'} fontWeight={'bold'} >

                                                    {
                                                        currency == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + (totalPrice + (Math.round((totalPrice * 12) / 100)))
                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((totalPrice + (Math.round((totalPrice * 12) / 100))) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }
                                                </Text>
                                            </Flex>
                                            <Flex mt={2} alignItems={'center'}>
                                                <Text fontSize={'14px'} fontWeight={'bold'}>Payable Now</Text>
                                                <Spacer />
                                                <Text fontSize={'14px'} fontWeight={'bold'} >
                                                    {
                                                        currency == 'INR' ?
                                                            <>
                                                                {
                                                                    '₹ ' + Math.round(((totalPrice + (Math.round((totalPrice * 12) / 100))) * 25) / 100)

                                                                }
                                                            </> :
                                                            <>
                                                                {
                                                                    '$ ' + ((Math.round(((totalPrice + (Math.round((totalPrice * 12) / 100))) * 25) / 100)) / 82.14).toFixed(2)
                                                                }
                                                            </>
                                                    }

                                                </Text>
                                            </Flex>
                                        </Box>
                                        {
                                            currency == 'USD' && <>
                                                <Divider mt={4} mb={4} />
                                                <Flex mt={2} alignItems={'center'}>
                                                    <Text fontSize={'14px'} fontWeight={'bold'}>Payable in our currency</Text>
                                                    <Spacer />
                                                    <Text fontSize={'14px'} fontWeight={'bold'} >
                                                        {
                                                            '₹ ' + Math.round(((totalPrice + (Math.round((totalPrice * 12) / 100))) * 25) / 100)
                                                        }

                                                    </Text>
                                                </Flex></>
                                        }
                                        <Flex mt={3} gap={2} alignItems={'flex-start'}>
                                            <Checkbox onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    checkbox: e.target.checked
                                                })
                                            }} colorScheme='blue' boxShadow={'sm'} mt={1} size={'sm'} />
                                            <Text fontSize={'12px'} >I acknowledge and accept the terms and conditions mentioned in the Property Policy & Cancellation Policy.<sup style={{ color: 'red', fontSize: '14px' }}>*</sup> </Text >
                                        </Flex>
                                        <Button onClick={() => { console.log(1) }} isDisabled={!reserve} _hover={reserve ? { bg: '#f15824 ' } : { bg: 'gray.500' }} mt={4} variant={'solid'} color={'white'} bg={reserve ? '#f15824' : 'gray.500'} width={'100%'}>Reserve</Button>
                                        {
                                            !reserve && <Text mt={1} fontSize={'12px'} color={'red'} textAlign={'center'}><sup style={{ color: 'red', fontSize: '12px' }}>*</sup> Please enter {validate} </Text>
                                        }
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Box >
            }
        </div >
    );
}

export default Checkout;
