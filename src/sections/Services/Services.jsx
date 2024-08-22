import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import p1 from '../../assests/p1.jpeg';
import p2 from '../../assests/p2.jpeg';
import p3 from '../../assests/p3.jpeg';

const serviceData = [
    {
        image: p1,
        alt: "Full-Day Wedding Coverage",
        title: "Full-Day Wedding Coverage"
    },
    {
        image: p2,
        alt: "Engagement Sessions",
        title: "Engagement Sessions"
    },
    {
        image: p3,
        alt: "Custom Albums and Prints",
        title: "Custom Albums and Prints"
    }
];

const Services = () => {
    const navigate = useNavigate();

    const handleServiceClick = (title) => {
        navigate(`/services`, { state: { title } });
    };

    return (
        <section id="services" style={{ backgroundColor: '#FFF1F2', padding: '100px 0px' }}>
            <Box w={{ base: '90%', md: '70%' }} minH='auto' gap="48px" m="auto">
                <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} justifyContent='space-between' gap="32px" mb="32px">
                    <Box flex="1">
                        <Text
                            fontSize={{ base: '40px', lg: '48px' }}
                            fontWeight='400'
                            lineHeight={{ base: '50px', lg: '62.4px' }}
                            fontFamily="'Arapey', serif"
                            color='#4C0519'
                        >
                            Your Perfect Wedding Photography Experience
                        </Text>
                    </Box>
                    <Box flex="1" display='flex' alignItems='center'>
                        <Text fontSize='18px' fontWeight='400' lineHeight='27px' color='#525252'>
                            We offer personalized services to beautifully capture every moment of your wedding day.
                        </Text>
                    </Box>
                </Box>

                <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} justifyContent='space-between' gap="32px" mt="32px">
                    {serviceData.map((service, index) => (
                        <Box
                            key={index}
                            flex="1"
                            minW="0"
                            display='flex'
                            flexDir='column'
                            gap='16px'
                            transition='all 0.3s ease'
                            _hover={{
                                transform: 'scale(1.01)',
                                backgroundColor: 'transparent',
                            }}
                            cursor='pointer'
                            onClick={() => handleServiceClick(service.title)}
                        >
                            <Box flex="1" display='flex' justifyContent='center' alignItems='center'>
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    w={{ base: '100%', lg: '100%' }}
                                    h={{ base: '70vh', lg: '100%' }}
                                    objectFit="cover"
                                />
                            </Box>
                            <Text color='#3D3D3D' fontSize={{ base: '20px', lg: '18px' }} lineHeight='36.4px' fontWeight='400' fontFamily="'Arapey', serif">
                                {service.title}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </section>
    );
};

export default Services;
