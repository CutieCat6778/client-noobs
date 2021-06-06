import React from 'react'
import World from '../../maps/world.jsx';
import Usa from '../../maps/usa.jsx';
import Vietnam from '../../maps/vietnam.jsx'
import { useMutation } from '@apollo/client';
import { updateUserLocationMutation } from '../../graphql/mutations';
import { Box, Heading, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react'
import ErrorPage from '../errorPage.jsx';
import Loading from '../loadingCircle.jsx';

export function Map({ currentLocation, currentSelect, userData }) {
    const [updateUser, { loading: mutationLoading, error: mutationError },] = useMutation(updateUserLocationMutation);
    function updateUserLocationGQL({ country, userLocation, location_id }) {
        try {
            updateUser({
                variables: {
                    discordId: userData.discordId,
                    country,
                    location: userLocation ? userLocation : "none",
                    location_id
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    function updateLocation() {
        if (!currentLocation && !currentSelect) return;
        let res = currentSelect;
        currentLocation ? res = currentLocation + "/" + res : null;
        res = require('../../utils/locationConvert')(res);
        const result = {
            country: res[0],
            userLocation: res[1],
            location_id: res[2]
        }
        console.log(res, result)
        updateUserLocationGQL(result);
        return window.location.reload();
    }
    console.log(currentLocation)
    if (mutationError) return (<ErrorPage error={mutationError} />)
    if (!mutationLoading) {
        return (
            <Box display={{ xl: "flex" }} m={4} minH="800px">
                <Box flexShrink={0}>
                    {!currentLocation || currentLocation == "world" ? <World /> : (currentLocation == "usa" ? <Usa /> : <Vietnam />)}
                </Box>
                <Spacer />
                <Box mt={{ base: 4, xl: 0 }} ml={{ xl: 6 }} pr={{base: "0rem", xl: "2rem"}}>
                    <Heading
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        color="#9b455e"
                        id="country"
                        size="3xl"
                        mt="5rem"
                    >
                        {currentSelect ? currentSelect.split("-")[0] : "Noob map"}
                    </Heading>
                    {currentLocation == "world" ? null : <Button m={4} backgroundColor="#9b455e" color="white" onClick={() => (setCurrentLocation(null), setCurrentSelect(null))}>Trở lại</Button>}
                    <Button m={4} colorScheme="green" onClick={updateLocation}>Gửi</Button>
                </Box>
            </Box>
        )
    } else {
        return (<Loading />)
    }
}

export default Map;