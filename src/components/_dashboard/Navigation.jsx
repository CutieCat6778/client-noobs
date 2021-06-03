import { Button, IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import {Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { logOut } from '../../utils/api';
import UserData from '../userData';

export function Navbar({props}){
    const [userData, setUserData] = useState();

    function LogOut(){
        logOut();
        window.location.reload()
    }

    useEffect(() => {
        if(props) {
            setUserData(props);
        }
    })

    return(
        <>
            <Flex p={2} display={{base: "none", sm: "flex"}}>
                {userData ? <UserData props={userData}/> : <Heading ml={4} color="black">Noobs</Heading>}
                <Spacer/>
                <Box m={1}>
                    <Button colorScheme="teal"  ml={2}>
                        About
                    </Button>
                    {userData ? 
                        <Button colorScheme="red" ml={2} onClick={LogOut}> 
                            Thoát 
                        </Button> : 
                        <Link href="http://localhost:3001/api/auth/discord" _hover={null}>
                            <Button colorScheme="green" marginLeft={2}>
                                Đăng nhập
                            </Button>
                        </Link>
                    }
                </Box>
            </Flex>
            <Menu >
                <MenuButton
                    m={2}
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon/>}
                    variant="outline"
                    display={{base: "block", sm: "none"}}
                />
                <MenuList display="block">
                    <MenuItem>
                        {userData ? <UserData props={userData}/> : <Heading ml={4} color="black">Noobs</Heading>}
                    </MenuItem>
                    <MenuItem>
                        <Button colorScheme="teal">
                            About
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        {userData ? 
                            <Button colorScheme="red" onClick={LogOut}> 
                                Thoát 
                            </Button> : 
                            <Link href="http://localhost:3001/api/auth/discord" _hover={null}>
                                <Button colorScheme="green">
                                    Đăng nhập
                                </Button>
                            </Link>
                        }
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Navbar