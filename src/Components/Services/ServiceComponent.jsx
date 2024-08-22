import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

import img from '../../assests/aboutImage.jpeg';

const ServiceComponent = () => {
    const location = useLocation();
    const { title } = location.state || {};

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
                <Box
                    w={{ base: '90%', lg: '45%' }}
                >
                    <Text color="white" fontSize={{ base: '30px', lg: '40px' }} fontFamily="'Arapey', serif">
                        {title}
                    </Text>
                    <Text color='white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </Box>
            </Box>

            <Box
                h={{ base: '600px', lg: '830px' }}
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
                    display={{base : 'none' , lg : 'flex'}}
                >
                    <Image
                        src={img}
                        position="absolute"
                        w="40%"  
                        h="35%"  
                        top="10%"  
                        left="20%"  
                    />
                    <Image
                        src={img}
                        position="absolute"
                        w="35%"  
                        h="30%"  
                        top="35%"  
                        left="50%"  
                        transform="rotate(17.64deg)"
                    />
                    <Image
                        src={img}
                        position="absolute"
                        w="32%"  
                        h="25%"  
                        top="25%"  
                        left="5%"  
                        transform='rotate(17.64deg)'
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default ServiceComponent;
