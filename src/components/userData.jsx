import React from 'react';
import { Avatar, Text } from "@chakra-ui/react"
import { Badge, Box, Flex} from '@chakra-ui/layout';

export function UserData({props}){
    if(!props) return null;
    const avatarURL = `http://cdn.discordapp.com/avatars/${props.discordId}/${props.avatar}.png?size=1024`
    return(
        <Flex m={1} color="white">
            <Avatar src={avatarURL} border="2px solid white" />
            <Box ml="3">
                <Text fontWeight="bold">
                    {props.username}
                    <Badge ml="1" colorScheme="green">
                        #{props.discriminator}
                    </Badge>
                </Text>
                <Text textTransform="uppercase" fontSize="sm">{props.location.country ? props.location.country : "Không có địa điểm"}</Text>
            </Box>
        </Flex>
    )
}

export default UserData;