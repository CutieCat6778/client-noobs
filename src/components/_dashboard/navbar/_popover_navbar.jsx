import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Link, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import UserData from '../../userData';
import { logOut } from '../../../utils/api';

export function NavPopover({props}) {
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
        <MenuList display="block" backgroundColor="#9b455e" outline="none" border="none">
            <Box p={3}>
                {userData ? <UserData props={userData} /> : <Heading color="white">Noobs</Heading>}
            </Box>
            <MenuDivider />
            <MenuItem>
                <Link ml={3} href="https://noobteam.ga/" _hover={null}>
                    <Button colorScheme="grey">
                        Trang chủ
                    </Button>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link ml={3} href="https://noobteam.ga/map" _hover={null}>
                    <Button colorScheme="grey">
                        Noobs Map
                    </Button>
                </Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
                {userData ?
                    <Button colorScheme="red" onClick={LogOut} ml={3}>
                        Đăng xuất
                    </Button> :
                    <Link ml={3} href="https://dev.noobteam.ga/api/auth/discord" _hover={null}>
                        <Button colorScheme="green">
                            Đăng nhập
                        </Button>
                    </Link>
                }
            </MenuItem>
        </MenuList>
    )
}