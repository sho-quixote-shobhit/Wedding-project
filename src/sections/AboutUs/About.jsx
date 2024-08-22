import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

import r1 from '../../assests/r1.jpeg';
import r2 from '../../assests/r2.jpeg';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()

    return (
        <section id="about" style={{ padding: '100px 0px', backgroundColor: '#FFFFFF' }}>
            <Box
                w={{ base: '90%', md: '70%' }}
                h = {{base : '' , lg : '600px'}}
                m='auto'
                display='flex'
                justifyContent='space-between'
                gap='32px'
            >
                <Box
                    w='50%'
                    position="relative"
                    display={{base : 'none' , lg : 'flex'}}
                >
                    <Image
                        h='60%'
                        w='70%'
                        src={r2}
                        position="absolute"
                        top="0"
                        left="0"
                    />
                    <Image
                        w='50%'
                        h='50%'
                        src={r1}
                        position="absolute"
                        top='40%'
                        left='50%'
                    />
                </Box>

                <Box
                    w = {{base : '100%' , lg : '50%'}}
                    display='flex'
                    alignItems='center'
                >
                    <Box
                        w='100%'
                        gap='24px'
                        display='flex'
                        flexDir='column'
                    >
                        <Text
                            fontSize={{base: '40px' , lg : '48px'}}
                            fontWeight='400'
                            lineHeight='62.4px'
                            fontFamily="'Arapey', serif"
                            color="#4C0519"
                        >
                            About Us
                        </Text>
                        <Text 
                            fontSize='18px'
                            fontWeight='400'
                            lineHeight='27px'
                            fontFamily="'Inter', serif"
                            color="#525252"
                        >
                            We are passionate storytellers dedicated to capturing your unique love story with artistry and care. Our team combines years of experience with a genuine love for what we do, ensuring that every moment of your wedding day is beautifully documented. From our creative approach to our commitment to your vision, we’re here to make your special day truly unforgettable.
                        </Text>

                        <Button
                            backgroundColor='#F44A66'
                            p = "12px 16px 12px 16px"
                            w = '118px'
                            h = '43px'
                            transition='all 0.3s ease'
                            _hover={{ 
                                transform: 'translateY(-10px)', 
                                backgroundColor: 'transparent',
                                color: '#F44A66',
                                border: '2px solid #F44A66'
                            }}
                            onClick={()=>{navigate('/about')}}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default About;
