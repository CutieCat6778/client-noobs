import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Heading, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import UserData from '../userData';
import { HamburgerIcon } from '@chakra-ui/icons';
import { logOut } from '../../utils/api';


export function UserPopover({props}) {
    const [userData, setUserData] = useState();
    let avatarURL;
    if(props) avatarURL = `http://cdn.discordapp.com/avatars/${props.discordId}/${props.avatar}.png?size=1024`

    function LogOut() {
        logOut();
        window.location.reload()
    }

    useEffect(() => {
        if (props) {
            setUserData(props);
        }
    })
    
    return (
        <Menu autoSelect={false} position="relative">
            <MenuButton
                m={2}
                as={IconButton}
                aria-label="Options"
                icon={props ? <Avatar src={avatarURL} /> : <HamburgerIcon />}
                color="white"
                position="sticky"
                backgroundColor="#9b455e"
                _hover={null}
            />
            <MenuList display="block" backgroundColor="#9b455e" outline="none" border="1px solid black">
                {userData ? <UserData props={userData} _hover={null} ml={2} /> : <Heading ml={4} _hover={null} color="white">Noobs</Heading>}
                <MenuDivider />
                <Box>
                    {userData ? <>
                        <MenuItem>
                            <Button colorScheme="grey">
                                Profile của tôi
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button colorScheme="grey">
                                Sửa thông tin
                            </Button>
                        </MenuItem>
                        <MenuDivider />
                    </> : null}
                </Box>
                <MenuItem _hover={null}>
                    {userData ?
                        <Button ml={3} colorScheme="red" onClick={LogOut} _hover={null}>
                            Đăng xuất
                                        </Button> :
                        <Link ml={3} href="http://noobs-map-backend.herokuapp.com/api/auth/discord" _hover={null}>
                            <Button colorScheme="green" _hover={null}>
                                Đăng nhập
                            </Button>
                        </Link>
                    }
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserPopover;