import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import img from '../../assests/aboutImage.jpeg'

const AboutComponent = () => {
    return (
        <Box>
            <Box
                h = {{base : '311px' , lg : '330px'}}
                backgroundColor="#4C0519"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text color="white" fontSize={{ base: '40px', lg: '48px' }} fontFamily="'Arapey', serif">
                    About Us
                </Text>
            </Box>

            <Box
                h = {{base : '600px' , lg : '830px'}}
                display='flex'
                w = {{base : '90%' , lg : '80%'}}
                m = 'auto auto'
            >
                <Box
                    w={{ base: '0%', lg: '50%' }}
                    display='flex'
                    alignItems='center'
                >
                    <Image
                        src = {img}
                    />
                </Box>

                <Box
                    w={{ base: '100%', lg: '50%' }}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box w={{base : '100%' , lg : '80%'}}>
                        <Text>
                        We are passionate storytellers dedicated to capturing your unique love story with artistry and care. Our team combines years of experience with a genuine love for what we do, ensuring that every moment of your wedding day is beautifully documented. From our creative approach to our commitment to your vision, we’re here to make your special day truly unforgettable.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutComponent;
