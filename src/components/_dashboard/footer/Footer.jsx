import React from 'react'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export function Footer() {
    return (
        <Flex justifyContent="center" alignItems="flex-end" backgroundImage="http://cutiecat6778.github.io/cdn/Noobs/test.jpg" py="3rem">
            <Grid templateColumns={{base: "repeat(1, 0fr)", sm:"repeat(2, 2.5fr)"}}>
                <Box color="gray.100">
                    <Heading>
                        Liên hệ
                    </Heading>
                    <Text>
                        <EmailIcon mr={{base: 0, sm:2}} display="inline"/>
                        support@noobteam.ga
                    </Text>
                    <Text>
                        <EmailIcon mr={{base: 0, sm:2}} display="inline"/>
                        admin@noobteam.ga
                    </Text>
                </Box>
                <Box color="gray.100">
                    <Heading>
                        Bản Quyền
                    </Heading>
                    <Text>
                        © 2021 Noobteam all rights reserved
                    </Text>
                </Box>
            </Grid>
        </Flex>
    )
}

export default Footer;