import { Box, Button, Image, Text, keyframes } from '@chakra-ui/react';
import React from 'react';
import { CgInstagram } from "react-icons/cg";
import c1 from '../../assests/c1.jpeg';
import c2 from '../../assests/c2.jpeg';
import c3 from '../../assests/c3.jpeg';
import c4 from '../../assests/c4.jpeg';

const handleInstaLink = () => {
    // Handle Instagram link click
};

const images = [c1, c2, c3, c4];

// Keyframe animation for continuous movement
const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Contact = () => {
    return (
        <section id="portfolio" style={{ backgroundColor: '#FFF1F2', padding: '100px 0px' }}>
            <Box
                w={{ base: '90%', md: '90%' }}
                gap='48px'
                m='auto'
                display='flex'
                flexDir='column'
                alignItems='center'
            >

                {/* Header */}
                <Box
                    gap='32px'
                    display='flex'
                    flexDir={{ base: 'column', lg: 'row' }}
                    w = {{base : '100%' , lg : '90%'}}
                >
                    <Box
                        w={{ base: '100%', lg: '50%' }}
                        display='flex'
                        alignItems='center'
                    >
                        <Text
                            fontSize={{base : '40px' , lg : '48px'}}
                            fontWeight='400'
                            lineHeight={{base : '50px' , lg : '62.4px'}}
                            fontFamily="'Arapey', serif"
                            color="#4C0519"
                        >
                            Preserving Love, Crafting Timeless Memories
                        </Text>
                    </Box>

                    <Box
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        w={{ base: '100%', lg: '50%' }}
                        mt={{ base: '24px', lg: '0' }}
                    >
                        <Text
                            fontSize='18px'
                            fontWeight='400'
                            lineHeight='27px'
                            fontFamily="'Inter', serif"
                            color="#525252"
                        >
                            We capture the essence of your wedding day, turning fleeting moments into timeless memories. Explore our portfolio to see the magic we've preserved for couples like you.
                        </Text>

                        <Button
                            backgroundColor='#F44A66'
                            p='12px 24px'
                            gap='8px'
                            w='142px'
                            display='flex'
                            alignItems='center'
                            mt = {{base : 5 , lg : 0}}
                            transition='all 0.3s ease'
                            _hover={{
                                transform: 'translateY(-10px)',
                                backgroundColor: 'transparent',
                                color: '#F44A66',
                                border: '0.5px solid #F44A66'
                            }}
                            onClick={handleInstaLink}
                        >
                            Follow Us <CgInstagram boxSize="24px" />
                        </Button>
                    </Box>
                </Box>

                {/* Images */}
                <Box
                    mt="48px"
                    overflow="hidden"
                    position="relative"
                    w='105%'
                    order={{ base: 3, lg: 3 }}
                >
                    <Box
                        display="flex"
                        animation={`${scrollAnimation} 20s linear infinite`}
                    >
                        {images.concat(images).map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                h = {{base : '400px' , lg : '541px'}}
                                w="auto"
                                mx={2}
                                objectFit="cover"
                                flexShrink={0}
                            />
                        ))}
                    </Box>
                </Box>

            </Box>
        </section>
    );
}

export default Contact;
