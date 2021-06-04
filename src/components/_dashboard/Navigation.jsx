import { Button, IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Link, Menu, MenuButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { NavPopover } from './_popover_navbar';
import UserPopover from './_popover_user';

export function Navbar({ props }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        if (props) {
            setUserData(props);
        }
    })

    return (
        <>
            <Flex position="relative" backgroundColor="#9b455e" p={4} display={{ base: "none", md: "flex" }} justifyContent="center" alignItems="center">
                <Box position="absolute" left="5" _hover={null}>
                    <Heading ml={4} color="white">Noobs</Heading>
                </Box>
                <Box>
                    <Link ml={3} href={`${process.env.client}/`} _hover={null}>
                        <Button colorScheme="grey">
                            Trang chủ
                        </Button>
                    </Link>
                    <Link ml={3} href={`${process.env.client}/map`} _hover={null}>
                        <Button colorScheme="grey">
                            Noobs Map
                        </Button>
                    </Link>
                </Box>
                <Box position="absolute" right="5">
                    <UserPopover props={userData}/>
                </Box>
            </Flex>
            <Menu autoSelect={false} position="relative">
                <MenuButton
                    m={2}
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    display={{ base: "block", md: "none" }}
                    color="white"
                    position="sticky"
                    backgroundColor="#9b455e"
                />
                <NavPopover props={userData}/>
            </Menu>
        </>
    )
}

export default Navbar