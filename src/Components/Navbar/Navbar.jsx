import React from 'react';
import { Box, Text, HStack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import data from './data';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const updatedData = data.map((item) => ({
        ...item,
        link: currentPath === '/' ? item.link : '/'
    }));

    return (
        <section
            id="navbar"
            style={{
                padding: '12px 0px',
                gap: '10px',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'white',
                zIndex: 1000,
            }}
        >
            <Box
                w={{ base: '90%', md: '70%' }}
                h="43px"
                m="auto auto"
                color="black"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    cursor="pointer"
                    fontSize="2xl"
                    color='red'
                    onClick={() => { navigate('/') }}
                >
                    Logo
                </Text>

                <HStack spacing="2rem" display={{ base: 'none', lg: 'flex' }}>
                    {updatedData.map((item) => (
                        item.title === "Service" ? (
                            <Menu key={item.title}>
                                <MenuButton
                                    as={Text}
                                    cursor="pointer"
                                    display="flex"
                                    alignItems="center"
                                    _hover={{ color: 'red.500' }}
                                >
                                    {item.title} <ChevronDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Full-Day Wedding</MenuItem>
                                    <MenuItem>Engagement Sessions</MenuItem>
                                    <MenuItem>Custom Albums & Prints</MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <a
                                style={{ color: 'black', textDecoration: 'none' }}
                                key={item.title}
                                href={item.link}
                                onMouseOver={(e) => e.currentTarget.style.color = 'red'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                            >
                                {item.title}
                            </a>
                        )
                    ))}
                </HStack>
            </Box>
        </section>
    );
}

export default Navbar;
