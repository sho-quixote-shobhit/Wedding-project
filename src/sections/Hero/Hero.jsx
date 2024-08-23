import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import HeroImage from '../../assests/heroImage.png';

const Hero = () => {
    return (
        <section id="hero" style={{ padding: '150px 0px' }}>
            <Box
                w={{ base: '90%', md: '80%' }}
                gap="48px"
                m="auto"
            >
                <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} justifyContent='space-between' gap = {{base : '50px' , lg : '100px'}}>

                    <Box flex="1">
                        <Text
                            fontSize={{ base: '50px', lg: '72px' }}
                            fontWeight='400'
                            lineHeight={{ base: '60px', lg: '79.2px' }}
                            fontFamily="'Arapey', serif"
                        >
                            Capturing Timeless Moments with Elegance
                        </Text>
                    </Box>

                    <Box flex="1" display='flex' flexDir='column' justifyContent='space-between'>
                        <Text fontSize='20px' fontWeight='400' lineHeight='30px'>
                            At Radiant Moments Photography, we capture the beauty, emotion, and uniqueness of your wedding day with a timeless, artistic approach. Let us help you preserve your love story, one elegant frame at a time.
                        </Text>

                        <Box>
                            <a href="/#contact"
                                style={{
                                    display: 'inline-block',
                                    textDecoration: 'none'
                                }}>
                                <Button
                                    backgroundColor='#F44A66'
                                    color='#292929'
                                    borderRadius='10'
                                    transition='all 0.3s ease'
                                    _hover={{
                                        transform: 'translateY(-10px)',
                                        backgroundColor: 'transparent',
                                        color: '#F44A66',
                                        border: '2px solid #F44A66'
                                    }}
                                    my={{ base: 3, lg: 0 }}
                                >
                                    Book Your Session - 000 000 000
                                </Button>
                            </a>
                        </Box>
                    </Box>

                </Box>

                <Box
                    mt="2rem"
                >
                    <Image src={HeroImage} objectFit='cover' w='100%' h='100%' />
                </Box>
            </Box>
        </section>
    );
}

export default Hero;
