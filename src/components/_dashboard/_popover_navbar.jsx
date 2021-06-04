import React, { useEffect, useState } from 'react';
import { Button, Heading, Link, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import UserData from '../userData';
import { logOut } from '../../utils/api';

export function NavPopover({props}) {
    const [userData, setUserData] = useState();
    let avatarURL;
    if(props) avatarURL = `https://cdn.discordapp.com/avatars/${props.discordId}/${props.avatar}.png?size=1024`

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
            {userData ? <UserData props={userData} /> : <Heading ml={4} color="black">Noobs</Heading>}
            <MenuDivider />
            <MenuItem>
                <Link ml={3} href="http://localhost:3000/" _hover={null}>
                    <Button colorScheme="grey">
                        Trang chủ
                    </Button>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link ml={3} href="http://localhost:3000/map" _hover={null}>
                    <Button colorScheme="grey">
                        Noobs Map
                    </Button>
                </Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem ml={3}>
                {userData ?
                    <Button colorScheme="red" onClick={LogOut}>
                        Đăng xuất
                    </Button> :
                    <Link href="http://localhost:3001/api/auth/discord" _hover={null}>
                        <Button colorScheme="green">
                            Đăng nhập
                        </Button>
                    </Link>
                }
            </MenuItem>
        </MenuList>
    )
}