import { Box, Text, Image, Input, Textarea, Button, Select } from '@chakra-ui/react';
import React, { useState } from 'react';

import img from '../../assests/getintouch2.jpg'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section id="contact" style={{ padding: '100px 0px', backgroundColor: '#FFFFFF' }}>
            <Box
                w={{ base: '90%', lg: '80%' }}
                display='flex'
                flexDir={{ base: 'column', lg: 'row' }}
                m='auto auto'
            >
                <Box
                    display='flex'
                    flexDir='column'
                    w={{ base: '100%', lg: '40%' }}
                    gap={{ base: '20px', lg: '30px' }}
                >
                    <Box
                        display='flex'
                        flexDir='column'
                        gap={{ base: '20px', lg: '30px' }}
                    >
                        <Text
                            fontSize={{ base: '40px', lg: '50px' }}
                            fontWeight='400'
                            lineHeight={{ base: '50px', lg: '62.4px' }}
                            fontFamily="'Arapey', serif"
                            color="#4C0519"
                            align={{ base: 'center', lg: 'left' }}
                        >
                            Get In Touch
                        </Text>
                        <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            fontWeight='530'
                            fontFamily="'Arapey', serif"
                            color="#4C0519"
                        >
                            We’re excited to help you capture your most cherished moments! Whether it's your wedding, engagement, or a special event, we’re dedicated to providing a photoshoot experience that highlights your unique story. Let us create lasting memories with stunning photography tailored just for you.
                        </Text>
                    </Box>

                    <Box>
                        <Image 
                            src={img}
                            alt="Contact Us"
                            objectFit="cover"
                            w="100%"
                            borderRadius="10px"
                        />
                    </Box>
                </Box>

                <Box
                    w={{ base: '100%', lg: '60%' }}
                    mt={{ base: '40px', lg: '0' }}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        w={{ base: '100%', lg: '90%' }}
                        as='form'
                        onSubmit={handleSubmit}
                        display='flex'
                        flexDir='column'
                        gap='20px'
                    >
                        <Input
                            placeholder='Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            bg='#F7F7F7'
                            borderRadius='5px'
                            p='10px'
                            _focus={{ borderColor: '#4C0519' }}
                            required
                        />
                        <Input
                            placeholder='Your Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            bg='#F7F7F7'
                            borderRadius='5px'
                            p='10px'
                            _focus={{ borderColor: '#4C0519' }}
                            required
                        />
                        <Box display='flex' gap='10px'>
                            <Select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                bg='#F7F7F7'
                                borderRadius='5px'
                                flex='1'
                                _focus={{ borderColor: '#4C0519' }}
                                required
                            >
                                <option value='+91'>+91 India</option>
                                <option value='+1'>+1 USA</option>
                                <option value='+44'>+44 UK</option>
                                <option value='+61'>+61 Australia</option>
                                <option value='+81'>+81 Japan</option>
                                <option value='+33'>+33 France</option>
                            </Select>
                            <Input
                                placeholder='Phone Number'
                                type='tel'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                bg='#F7F7F7'
                                borderRadius='5px'
                                p='10px'
                                flex='2'
                                _focus={{ borderColor: '#4C0519' }}
                                required
                            />
                        </Box>
                        <Textarea
                            placeholder='Your Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            bg='#F7F7F7'
                            borderRadius='5px'
                            p='10px'
                            h='150px'
                            _focus={{ borderColor: '#4C0519' }}
                            required
                        />
                        <Button
                            type='submit'
                            backgroundColor='#F44A66'
                            borderRadius='5px'
                            p='10px'
                            transition='all 0.3s ease'
                            _hover={{
                                transform: 'translateY(-10px)',
                                backgroundColor: 'transparent',
                                color: '#F44A66',
                                border: '0.5px solid #F44A66'
                            }}
                            w = {{base : '40%' , lg : '30%'}}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default Form;
