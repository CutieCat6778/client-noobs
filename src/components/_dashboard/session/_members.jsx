import React from 'react'
import Data from '../../../asset/members.json';
import UserInfo from './_userInfo';
import { Flex, Heading, Grid } from '@chakra-ui/layout'

export function Members(){
    return(
        <Flex backgroundColor="#fdfdfd" p={{base: 2, sm: 6}} justifyContent="center" alignItems="center" w="100%">
            <Flex flexDirection="column" >
                <Heading fontSize="1.5rem" mb={5} display="block">
                    Những cán bộ của chúng tôi
                </Heading>
                <Grid
                    display={{base: "none", md: "grid"}}
                    templateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg:"repeat(4, 1fr)", xl:"repeat(5, 1fr)"}}
                    w="100%"
                    mt={5}
                >
                    {Data.map(userData => <UserInfo key={userData.id} data={userData} />)}
                </Grid>
                <Grid
                    display={{base: "grid", md: "none"}}
                    templateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg:"repeat(4, 1fr)", xl:"repeat(5, 1fr)"}}
                    w="100%"
                    mt={5}
                >
                    {Data.slice(0, 5).map(userData => <UserInfo key={userData.id} data={userData} />)}
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Members;