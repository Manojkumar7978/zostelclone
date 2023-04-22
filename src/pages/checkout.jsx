import React from 'react';
import '../App.css';

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
    Spacer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ButtonGroup,
    NumberInput,
    NumberInputField,
    useToast,
    Center

} from '@chakra-ui/react';
import { ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../component/loading';
import { color } from 'framer-motion';
import Sucesspayment from '../component/sucesspayment';

const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
)



const Checkout = () => {
    let [paymentPage, setPaymentPage] = useState('home')
    let [loading, setLoading] = useState(true)
    let totalPrice = 0;
    let data = JSON.parse(localStorage.getItem('bookedRooms'))

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
    let toast = useToast()
    useEffect(() => {
        if (formData.firstname == '' || formData.firstname == undefined) {
            setValidate('name')
            setReserve(false)
        } else if (formData.email == '' || formData.email == undefined || (formData.email.includes('@gmail.com') == false && formData.email.includes('@GMAIL.COM') == false)) {
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
        setCardDetails({ ...cardDetails, name: formData.firstname })
    }, [formData, loading])
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSizeClick = () => {
        onOpen()
        setPaymentPage('home')
    }
    let [cardDetails, setCardDetails] = useState({
        card: "",
        expiry: "",
        name: formData.firstname,
        cvv: "",
    })


    return (
        <div w={'1150px'} m={'auto'} >
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
                                                            <Input defaultValue={formData.email} onChange={(e) => {
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
                                                                <Input defaultValue={formData.number} onChange={(e) => {
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
                                        <Button key={'xs'} m={4} onClick={() => {
                                            handleSizeClick()
                                        }} isDisabled={!reserve} _hover={reserve ? { bg: '#f15824 ' } : { bg: 'gray.500' }} mt={4} variant={'solid'} color={'white'} bg={reserve ? '#f15824' : 'gray.500'} width={'100%'}>Reserve</Button>
                                        {
                                            !reserve && <Text mt={1} fontSize={'12px'} color={'red'} textAlign={'center'}><sup style={{ color: 'red', fontSize: '12px' }}>*</sup> Please enter {validate} </Text>
                                        }
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Box >
            }




            <Modal closeOnOverlayClick={false} m={0} onClose={onClose} size={'xs'} isOpen={isOpen}>
                <OverlayOne />
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Box borderRadius={'6px 6px 0 0 '} mt={-4} mr={-6} ml={-6} h={'70px'} bg={'#f15824'}>
                            <Flex pr={4} pl={4} borderRadius={'6px 6px 0 0 '} gap={3} h={'100%'} justifyContent={'center'} align={'center'} flexDirection={'row'}>
                                <Image w={'40px'} bg={'white'} src='https://cdn.razorpay.com/logos/K1ZMdO01lopiw9_medium.png' />
                                <Flex flex={1} flexDirection={'column'}>
                                    <Text color={'white'} fontSize={'14px'}>BNGH107-B6JX5W7</Text>
                                    <Text width={'142px'} color='white' pl={1} pr={1} bg={'whiteAlpha.400'} fontSize={'10px'} variant={'ghost'}>Razorpay Trusted Business <InfoOutlineIcon /></Text>
                                </Flex>
                                <Box>
                                    <ModalCloseButton onClick={() => { setPaymentPage('home') }} _hover={{ bg: '#f15824' }} color={'white'} fontSize={'7px'} />
                                </Box>
                            </Flex>
                        </Box>
                    </ModalHeader>

                    <ModalBody mr={-6} ml={-6} mt={-5} mb={-5}>
                        <Box h={'400px'} overflow={'auto'}>
                            {
                                paymentPage == 'home' && <Box pr={4} pl={4}>
                                    <Text mt={3} fontSize={'12px'} color={'black'} fontWeight={'bold'}> Pay With UPI QR</Text>
                                    <Box p={1} mt={1} h={'130px'} border={'1px solid gray'} >
                                        <Flex gap={3} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'} >
                                            <Image width={'120px'} src='data:image/png;base64,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' />
                                            <Flex flexDirection={'column'}>
                                                <Text fontSize={'10px'} color={'gray.700'}>Scan the QR using any UPI app on your phone.</Text>
                                                <ButtonGroup mt={2} gap={1}>
                                                    <Image w={'15px'} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjIxOCIgdmlld0JveD0iMCAwIDI1NiAyMTgiIHZlcnNpb249IjEuMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGc+CgkJCQk8cGF0aCBkPSJNMjMyLjUwMzk2Niw0Mi4xNjg5NjczIEMyMDcuMjUzOTA5LDI3LjU5MzI2NiAxNzQuOTY2MTEzLDM2LjI1NDQyMDYgMTYwLjM3NDQ0Myw2MS41MDQ1ODk1IEwxMjMuNTkyMTg3LDEyNS4yMjIxMTMgQzExMi45NDg5ODMsMTQzLjYyMTY3NSAxMjYuNjUwNTM0LDE1MC4wNTEwMDcgMTQxLjkyODc3MiwxNTkuMjExNDI3IEwxNzcuMzIyMTQ4LDE3OS42MzkyMDQgQzE4OS4zMDc1NiwxODYuNTUyNjc2IDIwNC42MTY3MjUsMTgyLjQ0ODQ1MiAyMTEuNTMwMTk3LDE3MC40Nzg3ODQgTDI0OS4zNDI1ODUsMTA0Ljk5NzMyNyBDMjYyLjA0NTQ5Miw4Mi45OTM0MjUgMjU0LjUwNzg2OCw1NC44NzIyNjc2IDIzMi41MDM5NjYsNDIuMTY4OTY3MyBaIiBmaWxsPSIjRUE0MzM1Ii8+CgkJCQk8cGF0aCBkPSJNMTkwLjg4NDI0OCw2OC41NDE3NjcgTDE1NS40OTA4NzIsNDguMTE0MTU5MyBDMTM1Ljk1MjY1MywzNy4yNjgyNDY1IDEyNC44ODgyODcsMzYuNTUwMzU4OCAxMTYuODY2NTIzLDQ5LjMwMDIxNzUgTDY0LjY2NjAxNjksMTM5LjcwNDEzNSBDNTAuMDkwMDkwNywxNjQuOTM4NDQ3IDU4Ljc2NjkzMzQsMTk3LjIxMTA2MSA4NC4wMDEyNDU1LDIxMS43NTU0OTkgQzEwNi4wMDUxNDcsMjI0LjQ1ODQwNiAxMzQuMTI2ODY3LDIxNi45MjA3ODIgMTQ2LjgyOTc3NCwxOTQuOTE2ODggTDIwMC4wMjk0ODYsMTAyLjc2NDk5OCBDMjA2Ljk3Mzg4NCw5MC43ODAxNDc2IDIwMi44Njk2NjEsNzUuNDU1MjM4NiAxOTAuODg0MjQ4LDY4LjU0MTc2NyBaIiBmaWxsPSIjRkJCQzA0Ii8+CgkJCQk8cGF0aCBkPSJNMTk3LjY5NjUwNiwyMi4wNjg2NzQgTDE3Mi44MzY2ODUsNy43MTE0ODIzNSBDMTQ1LjMzOTY4LC04LjE1OTUwOTM4IDExMC4xODAyMjEsMS4yNTA3MDY3NCA5NC4zMDkzMTg5LDI4Ljc0Nzg5MTcgTDQ2Ljk3NzE0NDgsMTEwLjcyNDM0NyBDMzkuOTg1Nzk0NywxMjIuODE4ODQ1IDQ0LjEzNjkxNDEsMTM4LjI5OTUxMSA1Ni4yMzE1MjUyLDE0NS4yNzUzOTggTDg0LjA3MjA5NTIsMTYxLjM0OTI5IEM5Ny44MjAzMTY2LDE2OS4yOTI4OTQgMTE1LjM5MjE3NCwxNjQuNTc5NyAxMjMuMzM1Nzc4LDE1MC44MzA5MTcgTDE3Ny40MDkzMDQsNTcuMTgxNjMxNCBDMTg4LjYxNDI0NSwzNy43ODM1OTM5IDIxMy40MTE2NTEsMzEuMTM1NTgzOCAyMzIuODA5Mjk0LDQyLjM0MDQ2ODYgTDE5Ny42OTY1MDYsMjIuMDY4Njc0IFoiIGZpbGw9IiMzNEE4NTMiLz4KCQkJCTxwYXRoIGQ9Ik0xMDEuMDMzMjk2LDUyLjIwMjUyNiBMNzQuMTYwNDQyOSwzNi43MjE2OTE0IEM2Mi4xNzUwMzAzLDI5LjgyNDAyMDQgNDYuODY2MDkwNiwzMy45MTI2NjgzIDM5Ljk1Mjc4NzcsNDUuODY2NjQ4NCBMNy43MTE0OTM1NywxMDEuNTc5MTA4IEMtOC4xNTk1MjA2NSwxMjguOTk3OTU0IDEuMjUwNzEyMzQsMTY0LjA3OTgxNiAyOC43NDc5MDI5LDE3OS45MDQwNDcgTDQ5LjIwNjk0MzIsMTkxLjY4NTkwNyBMNzQuMDE5ODY4MSwyMDUuOTgwNjg0IEw4NC43ODc5MDI0LDIxMi4xNzYwOTkgQzY1LjY3MDg0NiwxOTkuMzc5ODUgNTkuNjAwMjYxMiwxNzMuNzM5NTU4IDcxLjI4ODc3OTcsMTUzLjU0NTY5OCBMNzkuNjM3ODAxOCwxMzkuMTI2MDkxIEwxMTAuMjA5NDYsODYuMzAwODcwMyBDMTE3LjEwNzE4Nyw3NC4zNzg0MzUyIDExMy4wMDI5NjQsNTkuMTAwMTk3MSAxMDEuMDMzMjk2LDUyLjIwMjUyNiBaIiBmaWxsPSIjNDI4NUY0Ii8+CiAgICA8L2c+Cjwvc3ZnPg==' />

                                                    <Image w={'15px'} src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png' />

                                                    <Image w={'15px'} src='https://cdn.icon-icons.com/icons2/730/PNG/512/paytm_icon-icons.com_62778.png' />

                                                    <Image w={'15px'} src='https://cdn.razorpay.com/app/bhim.svg' />


                                                </ButtonGroup>
                                                <Text mt={2} fontSize={'10px'} color={'gray.700'}>QR Code is valid for
                                                    10 minutes</Text>

                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Text mb={3} mt={3} fontSize={'12px'} color={'black'} fontWeight={'bold'}>Cards, UPI & More</Text>
                                    <Flex flexDirection={'column'}>
                                        <Box p={2} flex={1} border={'1px solid grey'} onClick={() => { setPaymentPage('card') }} _hover={{ bg: 'orange.100' }} cursor={'pointer'} borderBottom={'none'}>
                                            <Flex alignItems={'center'} gap={4} >
                                                <Image src="data:image/png;base64,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" w={'20px'} />
                                                <Box >
                                                    <Text fontSize={'14px'} color={'gray.500'}>Card</Text>
                                                    <Text fontSize={'10px'} color={'gray.500'}>Visa, MasterCard, RuPay & More</Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box p={2} flex={1} border={'1px solid grey'} onClick={() => { setPaymentPage('upi') }} _hover={{ bg: 'orange.100' }} cursor={'pointer'} borderBottom={'none'}>
                                            <Flex alignItems={'center'} gap={4} >
                                                <Image src="https://cdn.razorpay.com/app/bhim.svg" w={'20px'} />
                                                <Box >
                                                    <Text fontSize={'14px'} color={'gray.500'}>UPI or QR Code</Text>
                                                    <Text fontSize={'10px'} color={'gray.500'}>
                                                        <Flex gap={2} alignItems={'center'}>
                                                            <Image w={'10px'} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjIxOCIgdmlld0JveD0iMCAwIDI1NiAyMTgiIHZlcnNpb249IjEuMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGc+CgkJCQk8cGF0aCBkPSJNMjMyLjUwMzk2Niw0Mi4xNjg5NjczIEMyMDcuMjUzOTA5LDI3LjU5MzI2NiAxNzQuOTY2MTEzLDM2LjI1NDQyMDYgMTYwLjM3NDQ0Myw2MS41MDQ1ODk1IEwxMjMuNTkyMTg3LDEyNS4yMjIxMTMgQzExMi45NDg5ODMsMTQzLjYyMTY3NSAxMjYuNjUwNTM0LDE1MC4wNTEwMDcgMTQxLjkyODc3MiwxNTkuMjExNDI3IEwxNzcuMzIyMTQ4LDE3OS42MzkyMDQgQzE4OS4zMDc1NiwxODYuNTUyNjc2IDIwNC42MTY3MjUsMTgyLjQ0ODQ1MiAyMTEuNTMwMTk3LDE3MC40Nzg3ODQgTDI0OS4zNDI1ODUsMTA0Ljk5NzMyNyBDMjYyLjA0NTQ5Miw4Mi45OTM0MjUgMjU0LjUwNzg2OCw1NC44NzIyNjc2IDIzMi41MDM5NjYsNDIuMTY4OTY3MyBaIiBmaWxsPSIjRUE0MzM1Ii8+CgkJCQk8cGF0aCBkPSJNMTkwLjg4NDI0OCw2OC41NDE3NjcgTDE1NS40OTA4NzIsNDguMTE0MTU5MyBDMTM1Ljk1MjY1MywzNy4yNjgyNDY1IDEyNC44ODgyODcsMzYuNTUwMzU4OCAxMTYuODY2NTIzLDQ5LjMwMDIxNzUgTDY0LjY2NjAxNjksMTM5LjcwNDEzNSBDNTAuMDkwMDkwNywxNjQuOTM4NDQ3IDU4Ljc2NjkzMzQsMTk3LjIxMTA2MSA4NC4wMDEyNDU1LDIxMS43NTU0OTkgQzEwNi4wMDUxNDcsMjI0LjQ1ODQwNiAxMzQuMTI2ODY3LDIxNi45MjA3ODIgMTQ2LjgyOTc3NCwxOTQuOTE2ODggTDIwMC4wMjk0ODYsMTAyLjc2NDk5OCBDMjA2Ljk3Mzg4NCw5MC43ODAxNDc2IDIwMi44Njk2NjEsNzUuNDU1MjM4NiAxOTAuODg0MjQ4LDY4LjU0MTc2NyBaIiBmaWxsPSIjRkJCQzA0Ii8+CgkJCQk8cGF0aCBkPSJNMTk3LjY5NjUwNiwyMi4wNjg2NzQgTDE3Mi44MzY2ODUsNy43MTE0ODIzNSBDMTQ1LjMzOTY4LC04LjE1OTUwOTM4IDExMC4xODAyMjEsMS4yNTA3MDY3NCA5NC4zMDkzMTg5LDI4Ljc0Nzg5MTcgTDQ2Ljk3NzE0NDgsMTEwLjcyNDM0NyBDMzkuOTg1Nzk0NywxMjIuODE4ODQ1IDQ0LjEzNjkxNDEsMTM4LjI5OTUxMSA1Ni4yMzE1MjUyLDE0NS4yNzUzOTggTDg0LjA3MjA5NTIsMTYxLjM0OTI5IEM5Ny44MjAzMTY2LDE2OS4yOTI4OTQgMTE1LjM5MjE3NCwxNjQuNTc5NyAxMjMuMzM1Nzc4LDE1MC44MzA5MTcgTDE3Ny40MDkzMDQsNTcuMTgxNjMxNCBDMTg4LjYxNDI0NSwzNy43ODM1OTM5IDIxMy40MTE2NTEsMzEuMTM1NTgzOCAyMzIuODA5Mjk0LDQyLjM0MDQ2ODYgTDE5Ny42OTY1MDYsMjIuMDY4Njc0IFoiIGZpbGw9IiMzNEE4NTMiLz4KCQkJCTxwYXRoIGQ9Ik0xMDEuMDMzMjk2LDUyLjIwMjUyNiBMNzQuMTYwNDQyOSwzNi43MjE2OTE0IEM2Mi4xNzUwMzAzLDI5LjgyNDAyMDQgNDYuODY2MDkwNiwzMy45MTI2NjgzIDM5Ljk1Mjc4NzcsNDUuODY2NjQ4NCBMNy43MTE0OTM1NywxMDEuNTc5MTA4IEMtOC4xNTk1MjA2NSwxMjguOTk3OTU0IDEuMjUwNzEyMzQsMTY0LjA3OTgxNiAyOC43NDc5MDI5LDE3OS45MDQwNDcgTDQ5LjIwNjk0MzIsMTkxLjY4NTkwNyBMNzQuMDE5ODY4MSwyMDUuOTgwNjg0IEw4NC43ODc5MDI0LDIxMi4xNzYwOTkgQzY1LjY3MDg0NiwxOTkuMzc5ODUgNTkuNjAwMjYxMiwxNzMuNzM5NTU4IDcxLjI4ODc3OTcsMTUzLjU0NTY5OCBMNzkuNjM3ODAxOCwxMzkuMTI2MDkxIEwxMTAuMjA5NDYsODYuMzAwODcwMyBDMTE3LjEwNzE4Nyw3NC4zNzg0MzUyIDExMy4wMDI5NjQsNTkuMTAwMTk3MSAxMDEuMDMzMjk2LDUyLjIwMjUyNiBaIiBmaWxsPSIjNDI4NUY0Ii8+CiAgICA8L2c+Cjwvc3ZnPg==' />

                                                            <Image w={'10px'} src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png' />

                                                            <Image w={'10px'} src='https://cdn.icon-icons.com/icons2/730/PNG/512/paytm_icon-icons.com_62778.png' />

                                                            & More
                                                        </Flex>
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box p={2} flex={1} border={'1px solid grey'} onClick={() => { setPaymentPage('netbanking') }} _hover={{ bg: 'orange.100' }} cursor={'pointer'} borderBottom={'none'}>
                                            <Flex alignItems={'center'} gap={4} >
                                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqPI8qkJdOC2_YpGmO2AamC6Zsa7HIo2gWw&usqp=CAU" w={'20px'} />
                                                <Box >
                                                    <Text fontSize={'14px'} color={'gray.500'}>Netbanking</Text>
                                                    <Text fontSize={'10px'} color={'gray.500'}>All Indian Bank</Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box p={2} flex={1} border={'1px solid grey'} onClick={() => { setPaymentPage('wallete') }} _hover={{ bg: 'orange.100' }} cursor={'pointer'}>
                                            <Flex alignItems={'center'} gap={4} >
                                                <Image src="data:image/png;base64,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" w={'20px'} />
                                                <Box >
                                                    <Text fontSize={'14px'} color={'gray.500'}>Wallete</Text>
                                                    <Text fontSize={'10px'} color={'gray.500'}>Jio Money & More</Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                    <Text cursor={'pointer'} mb={4} onClick={() => { setPaymentPage('account') }} fontSize={'12px'} color={'#f15824'}>Account+</Text>
                                </Box>

                            }
                            {
                                paymentPage == 'account' && <Box pr={4} pl={4}>
                                    <Text style={{ color: 'gray.500', fontWeight: 'bold' }} mb={1} mt={3} fontSize={'14px'} color={'gray.500'}><ArrowBackIcon cursor={'pointer'} color={'orange.400'} onClick={() => { setPaymentPage('home') }} /> 👤 Contact Details</Text>
                                    <label style={{ color: 'gray.500' }}>Phone number</label>

                                    <InputGroup>
                                        <InputLeftAddon children='+91' />
                                        <Input onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                number: e.target.value
                                            })
                                        }} type='tel' color='gray.500' defaultValue={formData.number} />
                                    </InputGroup>
                                    <label style={{ color: 'gray.500' }}>E-Mail</label>

                                    <Input color='gray.500' type='email' defaultValue={formData.email} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }} />
                                </Box>
                            }
                            {
                                paymentPage == 'card' && <Box pr={4} pl={4}>
                                    <Text style={{ color: 'gray.500', fontWeight: 'bold' }} mb={1} mt={3} fontSize={'14px'} color={'gray.500'}><ArrowBackIcon cursor={'pointer'} color={'orange.400'} onClick={() => { setPaymentPage('home') }} />{' '} Enter Card Details</Text>
                                    <Flex gap={3}>

                                        <Box fontSize={'14px'} color={'gray.500'}>
                                            <lable style={{ fontSize: '10px' }} >Enter 16 Digit Card Number</lable>
                                            {/* <br /> */}
                                            <input onChange={(e) => {
                                                setCardDetails({
                                                    ...cardDetails,
                                                    card: e.target.value
                                                })
                                            }} placeholder='0000000000000000' style={{ padding: '5px', borderRadius: '5px', height: '40px', border: '1px solid gray' }} type='number' maxlength={16} />
                                        </Box>
                                        <Box fontSize={'14px'} color={'gray.500'}>
                                            <lable style={{ fontSize: '10px' }} >Expiry</lable>
                                            <br />
                                            <input onChange={(e) => {
                                                setCardDetails({
                                                    ...cardDetails,
                                                    expiry: e.target.value
                                                })
                                            }} placeholder='MM/YY' style={{ width: '100px', padding: '5px', borderRadius: '5px', height: '40px', border: '1px solid gray' }} type='month' min={'2023-05'} maxlength={5} />
                                        </Box>
                                        <NumberInput type='number' placeholder='Card Number' fontSize={'12px'} color={'gray.500'} />

                                    </Flex>
                                    <Flex mt={3} gap={3}>

                                        <Box fontSize={'14px'} color={'gray.500'}>
                                            <lable style={{ fontSize: '10px' }} >Card Holder's Name</lable>
                                            <br />
                                            <input onChange={(e) => {
                                                setCardDetails({
                                                    ...cardDetails,
                                                    name: e.target.value
                                                })
                                            }} defaultValue={formData.firstname} style={{ padding: '5px', borderRadius: '5px', height: '40px', border: '1px solid gray' }} type='text' />
                                        </Box>
                                        <Box fontSize={'14px'} color={'gray.500'}>
                                            <lable style={{ fontSize: '10px' }} >CVV</lable>
                                            <br />
                                            <input onChange={(e) => {
                                                setCardDetails({
                                                    ...cardDetails,
                                                    cvv: e.target.value
                                                })
                                            }} placeholder='123' style={{ width: '100px', padding: '5px', borderRadius: '5px', height: '40px', border: '1px solid gray' }} type='number' maxlength={3} />
                                        </Box>
                                        <NumberInput type='number' placeholder='Card Number' fontSize={'12px'} color={'gray.500'} />

                                    </Flex>

                                </Box>
                            }
                        </Box>
                    </ModalBody>
                    <ModalFooter mb={-4} ml={-6} mr={-6}>
                        <Box boxShadow='rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' borderRadius={'0 0 6px 6px'} w={'100%'} h={'70px'} m={'auto'}  >
                            <Flex pl={4} pr={4} h={'100%'} width={'100%'} alignItems={'center'} flexDirection={'row'}>
                                <Text color={'gray.700'} fontWeight={'bold'} size={'14px'}>{
                                    '₹ ' + Math.round(((totalPrice + (Math.round((totalPrice * 12) / 100))) * 25) / 100)
                                }</Text>
                                <Spacer />
                                {/* <Button onClick={() => { handelFinalSubmit() }} isDisabled={!reserve} size={'sm'} flex={1} fontSize={'14px'} variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: '#f15824' }}>Pay Now</Button> */}
                                <Sucesspayment reserve={reserve} cardDetails={cardDetails} toast={toast} />

                            </Flex>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div >
    );
}

export default Checkout;
