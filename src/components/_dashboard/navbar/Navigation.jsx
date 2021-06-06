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
        <Flex position="relative" justifyContent="center" alignItems="center" p={4} backgroundColor="#9b455e">
            <Box position="absolute" left="0" _hover={null}>
                <Heading ml={4} color="white">Noobs</Heading>
            </Box>
            <Box display={{ base: "none", md: "block" }}>
                <Link href="https://noobteam.ga/" _hover={null}>
                    <Button colorScheme="grey">
                        Trang chủ
                    </Button>
                </Link>
                <Link ml={3} href="https://noobteam.ga/map" _hover={null}>
                    <Button colorScheme="grey">
                        Noobs Map
                    </Button>
                </Link>
            </Box>
            <Box position="absolute" right="0" display={{ base: "none", md: "block" }}>
                <UserPopover props={userData} />
            </Box>
            <Menu autoSelect={false} >
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    display={{ base: "block", md: "none" }}
                    color="white"
                    backgroundColor="#9b455e"
                    position="absolute"
                    right="0"
                    m={4}
                />
                <NavPopover props={userData} />
            </Menu>
        </Flex>
    )
}

export default Navbar