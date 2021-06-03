import { Badge, Box, Flex, Spacer } from '@chakra-ui/layout';
import { Text, Button } from "@chakra-ui/react"
import React from 'react';
import { logOut } from '../../utils/api';
import UserData from '../userData';

export function DashboardNavigation({ props }) {

    function LogOut() {
        logOut()
        window.location.replace('http://localhost:3000/')
    }

    return (
        <div>
            <Flex m={4} justifyContent="space-between">
                <UserData props={props}/>
                <Spacer />
                <Box>
                    <Button colorScheme="teal" onClick={LogOut}>Thoát</Button>
                </Box>
            </Flex>
        </div>
    )
}

export default DashboardNavigation;