import { Flex, Heading, Text, Box } from '@chakra-ui/layout';
import React from 'react';

export function Header(){
    return(
        <>
            <Flex justifyContent="center" alignItems="center" h="400px" textAlign="center">
                <Box display="block">
                    <Heading fontSize={{base: "3rem", lg: "4rem"}}>
                        Chúng tôi là Noobs
                    </Heading>
                    <Text mt={2} fontSize="3lg">
                        Nhà vô địch nào cũng từng thua
                    </Text>
                </Box>
            </Flex>
        </>
    )
}

export default Header