import { Avatar } from '@chakra-ui/avatar';
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

export function UserInfo({data}){
    return(
        <Flex 
            justifyItems="center" 
            alignItems="center" 
            flexDirection="column" 
            textAlign="center"
            backgroundColor="#ececec" 
            p={{base: "5rem", sm: "3rem", md: "4rem"}} 
            py={{base: "1rem", sm: "2rem"}} 
            mr={4}
            mb={4}
            boxShadow="xl"
            borderRadius="0.6rem"
        >
            <Avatar src={`http://cutiecat6778.github.io/cdn/Noobs/${data.avatar}`} w="75px" h="75px"/>
            <Box color="black">
                <Heading fontSize={{base: "1rem", sm:"1.4rem"}}>{data.nickname}</Heading><Badge variant="solid" colorScheme={data.color}>{data.role}</Badge>
            </Box>
        </Flex>
    )
}
export default UserInfo;