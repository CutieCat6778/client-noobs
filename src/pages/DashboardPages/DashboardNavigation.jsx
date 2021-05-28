import { Badge, Box, Flex, Heading, Link, Spacer } from '@chakra-ui/layout';
import { Avatar, Text, Button } from "@chakra-ui/react"
import React from 'react';
import { logOut } from '../../utils/api';

export function DashboardNavigation({ props }) {
    const avatarURL = `https://cdn.discordapp.com/avatars/${props.discordId}/${props.avatar}.png?size=1024`

    function LogOut() {
        logOut()
        window.location.replace('http://localhost:3000/')
    }

    return (
        <div>
            <Flex m={4} justifyContent="space-between">
                <Avatar src={avatarURL} />
                <Box ml="3">
                    <Text fontWeight="bold">
                        {props.username}
                        <Badge ml="1">
                            #{props.discriminator}
                        </Badge>
                    </Text>
                    <Text textTransform="uppercase" fontSize="sm">{props.location.country ? props.location.country : "Không có địa điểm"}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme="teal" onClick={LogOut}>Thoát</Button>
                </Box>
            </Flex>
        </div>
    )
}

export default DashboardNavigation;