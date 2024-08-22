import { Box, Text, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import t1 from '../../assests/t1.jpeg';

const testimonials = [
    {
        text: "Working with Jessica at Radiant Moments Photography was an absolute dream! From our engagement shoot to the wedding day, the photos were stunning and captured every special moment perfectly. Jessica’s attention to detail and genuine passion made us feel so comfortable. We couldn’t have asked for a better experience!",
        image: t1,
        name : 'Emily & James'
    },
    {
        text: "Another testimonial text here. This will be replaced with actual client feedback. The carousel will cycle through multiple testimonials, showcasing different experiences and stories.",
        image: t1,
        name : 'Bride & Groom'
    },
    {
        text: "Yet another testimonial text here. This placeholder text will be updated with actual client feedback, providing diverse perspectives and stories in the carousel.",
        image: t1,
        name : 'Bride & Groom'
    }
];

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" style={{ padding: '100px 0px', backgroundColor: '#4C0519' }}>
            <Box w={{ base: '80%', md: '60%' }} m='auto'>
                {/* header */}
                <Box display='flex' mb='32px'>
                    <Box w = {{base : '100%' , lg : '40%'}}>
                        <Text
                            fontSize='48px'
                            fontWeight='400'
                            lineHeight='62.4px'
                            fontFamily="'Arapey', serif"
                            color="#FFF1F2"
                        >
                            Love Stories from Our Clients
                        </Text>
                    </Box>
                    <Box w = {{base : '0%' , lg : '60%'}}>
                    </Box>
                </Box>

                {/* body */}
                <Box display='flex' flexDir='column' justifyContent='space-between'>
                    <Box display='flex'>
                        <Box w='40%' display={{base : 'none' , lg : 'flex'}}>
                            <Image
                                src={testimonials[currentIndex].image}
                                alt="happy couple"
                                objectFit='cover'
                                h='100%'
                                w='100%'
                            />
                        </Box>

                        <Box w = {{base : '100%' , lg : '60%'}} display='flex' alignItems='center' justifyContent='flex-end' ms = {{base : 0 , lg : 4}}>
                            <Box w='595px' h='191px' display='flex' flexDir='column' justifyContent='space-between'>
                                <Text
                                    fontSize='18px'
                                    fontWeight='400'
                                    lineHeight='27px'
                                    fontFamily="'Inter', serif"
                                    color="white"
                                >
                                    {testimonials[currentIndex].text}
                                </Text>

                                <Box display='flex' alignItems='center'>
                                    <Box
                                        borderBottom='1px solid #F44A66'
                                        w='24px'
                                        mr='8px'
                                    />
                                    <Text
                                        fontSize='16px'
                                        fontWeight='700'
                                        lineHeight='24px'
                                        fontFamily="'Inter', serif"
                                        color="white"
                                    >
                                        {testimonials[currentIndex].name}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* dots */}
                    <Box display='flex' justifyContent='center' mt = {{base : 8 , lg : 10}}>
                        {testimonials.map((_, index) => (
                            <Box
                                key={index}
                                w='12px'
                                h='12px'
                                bg={currentIndex === index ? '#F44A66' : '#FFF1F2'}
                                borderRadius='50%'
                                mx='4px'
                                cursor='pointer'
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default Testimonials;
