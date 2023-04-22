import { useState, useEffect, useRef } from 'react';
import {
    useDisclosure, Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Progress,
    Box,
    Flex,
    Grid,
    Text,
    Heading,
    Center

} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
)

const Sucesspayment = ({ cardDetails, reserve, toast }) => {
    let navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [processValue, setProcessValue] = useState(11)
    let ref = useRef()


    const handelFinalSubmit = () => {
        if (cardDetails.card == undefined || cardDetails.card.length != 16) {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon /> Please enter correct card details.
                    </Box>
                ),
            })
        } else if (cardDetails.expiry == "") {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon /> Please enter expiry maonth & date.
                    </Box>
                ),
            })
        } else if (cardDetails.name == undefined || cardDetails.name.length == 0) {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon /> Please enter card holder's name.
                    </Box>
                ),
            })
        } else if (cardDetails.cvv == undefined || cardDetails.cvv.length != 3) {
            toast({

                status: 'info',
                isClosable: true,
                position: 'top-right',
                bg: 'black',
                render: () => (
                    <Box color='white' p={3} bg='black' borderRadius={10} opacity={'0.7'}>
                        <InfoOutlineIcon /> Please enter correct card CVV.
                    </Box>
                ),
            })
        } else {
            onOpen()
            ref.current = setInterval(() => {
                setProcessValue(prv => prv + 1)
            }, Math.random() * (200 - 10) + 10)
        }
    }
    if (processValue == 101) {
        clearInterval(ref.current)
    }
    return (
        <div>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Button onClick={() => { handelFinalSubmit() }} isDisabled={!reserve} size={'sm'} flex={1} fontSize={'14px'} variant={'solid'} color={'white'} bg={'#f15824'} _hover={{ bg: '#f15824' }}>Pay Now</Button>


            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <OverlayOne />
                <ModalContent height={'500px'}>
                    <ModalHeader></ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody pb={6}>
                        {processValue < 100 && <Grid mt={'200px'} alignItems={'center'}>
                            <Progress colorScheme='orange' hasStripe value={processValue} />
                            <Text textAlign={'center'} mt={4}>Please wait while we process your payment...</Text>

                        </Grid>


                        }
                        {processValue >= 100 && <>
                            <Grid mt={'50px'}>
                                <div class="success-checkmark">
                                    <div class="check-icon">
                                        <span class="icon-line line-tip"></span>
                                        <span class="icon-line line-long"></span>
                                        <div class="icon-circle"></div>
                                        <div class="icon-fix"></div>
                                    </div>
                                </div>
                                <center>
                                    <Heading size={'xl'} color={'green'} >Payment Success!</Heading>
                                </center>
                                <Center>
                                    <Button onClick={() => {
                                        navigate('/')
                                    }} mt={10} variant={'solid'} color={'white'} colorScheme='orange'>Go to Home</Button>
                                </Center>
                            </Grid>
                        </>}
                    </ModalBody>


                </ModalContent>
            </Modal>
        </div>
    );
}

export default Sucesspayment;
