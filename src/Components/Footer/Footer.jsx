import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { data1, data2 } from './data';

const Footer = () => {
    return (
        <Box p="64px 0px" gap='80px' backgroundColor='#F44A66' display='flex' flexDir='column' alignItems='center'>
            <Box display='flex' w={{ base: '90%', md: '70%' }} h='145px' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <Text
                        fontSize={{ base: '70px', lg: '100px' }}
                        fontWeight='600'
                        lineHeight={{ base: '100px', lg: '145px' }}
                        color='#4C0519'
                        fontFamily="'Inter', serif"
                    >
                        Logo
                    </Text>
                </Box>

                {/* Responsive Stack (HStack on large screens, VStack on small screens) */}
                <Box display='flex' alignItems={{ base: '', lg: 'center' }}>
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing="1rem"
                        fontSize='16px'
                        fontWeight='500'
                        lineHeight='24px'
                        fontFamily="'Inter', serif"
                        color="#4C0519"
                        me={1}

                    >
                        {data1.map((item) => (
                            <a
                                style={{ color: 'black', textDecoration: 'none' }}
                                key={item.title}
                                href={item.link}
                                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                            >
                                {item.title}
                            </a>
                        ))}

                    </Stack>

                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing="1rem"
                        fontSize='16px'
                        fontWeight='500'
                        lineHeight='24px'
                        fontFamily="'Inter', serif"
                        color="#4C0519"
                        ms={2}
                        
                    >
                        {data2.map((item) => (
                            <a
                                style={{ color: 'black', textDecoration: 'none' }}
                                key={item.title}
                                href={item.link}
                                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                            >
                                {item.title}
                            </a>
                        ))}
                    </Stack>
                </Box>
            </Box>

            <Box w={{ base: '90%', md: '70%' }} h="54px" gap='32px' display='flex' flexDir='column'>

                {/* divider */}
                <Box borderBottom='1px solid #FB7184' />

                <Box h="21px" display='flex' justifyContent='space-between'>
                    <Text
                        fontSize={{ base: '14px', lg: '16px' }}
                    >&copy; 2024 All Rights Reserved</Text>
                    <Box display='flex'>
                        <Text
                            fontSize='14px'
                            fontWeight='400'
                            lineHeight='21px'
                            fontFamily="'Roboto', serif"
                            color="#4C0519"
                            mr={2}
                            cursor='pointer'
                            _hover={{color : 'white'}}
                        >
                            Privacy Policy
                        </Text>
                        <Text
                            fontSize={{ base: '12px', lg: '14px' }}
                            fontWeight='400'
                            lineHeight='21px'
                            fontFamily="'Roboto', serif"
                            color="#4C0519"
                            ml={2}
                            cursor='pointer'
                            _hover={{color : 'white'}}
                        >
                            Terms of Service
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
