import React from 'react';
import {Flex, Box, Image, Heading, Badge, Code, Text} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

export function ErrorPage({error}){
    console.log(error, error.stack)

    return(
        <>
            <Box display={{ xl: "flex",  }} alignItems="center" justifyContent="space-around" m={5}>
                <Box>
                    <Heading>
                    <Badge colorScheme="red" fontSize="2rem">500</Badge> Internal Server Error
                    </Heading>
                    <Box display="inline">
                        <Text>
                            Nếu bạn muốn hỗ trợ đội ngũ kỹ thuật của chúng tôi thì bạn có thể chụp màn hình lỗi này lại và thông báo cho đội ngũ mod hoặc kỹ thuật viên biết!
                        </Text>
                    </Box>
                    <Box>
                        <Code 
                            color="white"
                            background="black"
                            p={4}
                            display="block"
                            whiteSpace="pre"
                            children={error.stack}
                            borderRadius="10px"
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ErrorPage
