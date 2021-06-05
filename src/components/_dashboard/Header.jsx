import { Image } from '@chakra-ui/image';
import { Flex, Heading, Text, Box } from '@chakra-ui/layout';
import React from 'react';

export function Header(){
    return(
        <>
            <Flex justifyContent="center" alignItems="center" textAlign="center" w="100%" position="relative">
                <Box position="absolute" textAlign="center" color="white">
                    <Heading fontSize={{base: "6rem", md:"10rem"}}>
                        Noobs
                    </Heading>
                    <Text fontSize={{base: "1rem", md: "1.3rem"}}>
                        Mỗi người chiến thắng đều từng là Noob
                    </Text>
                </Box>
                <Image src="http://cutiecat6778.github.io/cdn/Noobs/test.jpg" w="100%" maxH="500px"/>
            </Flex>
        </>
    )
}

export default Header