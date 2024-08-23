import React, { useEffect } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import img from '../../assests/aboutImage.jpeg';

const ServiceComponent = () => {
    const location = useLocation();
    const { title } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Box
                h={{ base: '311px', lg: '330px' }}
                backgroundColor="#4C0519"
                display="flex"
                flexDir='column'
                alignItems="center"
                justifyContent="center"
            >
                <Box w={{ base: '90%', lg: '45%' }}>
                    <Text color="white" fontSize={{ base: '30px', lg: '40px' }} fontFamily="'Arapey', serif">
                        {title}
                    </Text>
                    <Text color='white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </Box>
            </Box>

            <Box
                h={{ base: '400px', lg: '730px' }}
                display='flex'
                w={{ base: '90%', lg: '80%' }}
                m='auto'
                position="relative"
            >
                <Box
                    w={{ base: '100%', lg: '50%' }}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box w={{ base: '100%', lg: '80%' }}>
                        <Text>
                            We are passionate storytellers dedicated to capturing your unique love story with artistry and care. Our team combines years of experience with a genuine love for what we do, ensuring that every moment of your wedding day is beautifully documented. From our creative approach to our commitment to your vision, we’re here to make your special day truly unforgettable.
                        </Text>
                    </Box>
                </Box>

                <Box
                    w={{ base: '0%', lg: '50%' }}
                    position="relative"
                    display={{ base: 'none', lg: 'flex' }}
                >
                    <Image
                        src={img}
                        position="absolute"
                        w="40%"
                        h="35%"
                        top="10%"
                        left="20%"
                    
                        sx={{
                            '@media (max-width: 1900px)': {
                                height: '33%',
                            },
                            '@media (max-width: 1800px)': {
                                height: '31%',
                            },
                            '@media (max-width: 1700px)': {
                                height: '29%',
                            },
                            '@media (max-width: 1600px)': {
                                height: '27%',
                                top : '15% '
                            },
                            '@media (max-width: 1500px)': {
                                height: '25%',
                                top : '16%'
                            },
                            '@media (max-width: 1400px)': {
                                height: '23%',
                                top : '17%'
                            },
                            '@media (max-width: 1300px)': {
                                height: '21%',
                                top : '18%'
                            },
                            '@media (max-width: 1200px)': {
                                height: '19%',
                                top : '19%'
                            },
                        }}
                    />
                    <Image
                        src={img}
                        position="absolute"
                        w="35%"
                        h="30%"
                        top="35%"
                        left="50%"
                        transform="rotate(17.64deg)"
                        sx={{
                            '@media (max-width: 1900px)': {
                                height: '28%',
                            },
                            '@media (max-width: 1800px)': {
                                height: '26%',
                            },
                            '@media (max-width: 1700px)': {
                                height: '24%',
                            },
                            '@media (max-width: 1600px)': {
                                height: '22%',
                            },
                            '@media (max-width: 1500px)': {
                                height: '20%',
                            },
                            '@media (max-width: 1400px)': {
                                height: '18%',
                            },
                            '@media (max-width: 1300px)': {
                                height: '16%',
                            },
                            '@media (max-width: 1200px)': {
                                height: '14%',
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default ServiceComponent;
