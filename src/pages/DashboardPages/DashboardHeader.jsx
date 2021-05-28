import React, { useEffect, useState } from 'react';
import { Box, Heading, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react'
import Vietnam from '../../maps/vietnam.jsx';
import Usa from '../../maps/usa.jsx';
import World from '../../maps/world.jsx';
import { useMutation } from '@apollo/client';
import { updateUserLocationMutation } from '../../graphql/mutations';


export function DashboardHeader({ userData }) {
    const [updateUser, { loading: mutationLoading, error: mutationError },] = useMutation(updateUserLocationMutation);
    const [currentLocation, setCurrentLocation] = useState();
    const [currentSelect, setCurrentSelect] = useState();

    console.log(userData.location)

    async function updateUserLocationGQL({country, userLocation, location_id}) {
        try {
            const res = await updateUser({
                variables: {
                    discordId: userData.discordId,
                    country,
                    location: userLocation ? userLocation : "none" ,
                    location_id
                }
            })
            console.log(res)
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
        updateUserLocationGQL(result);
        return window.location.reload();
    }

    useEffect(() => {
        const paths = document.getElementsByTagName('path');
        for (let path of paths) {
            if (userData.location.country == "usa" && path.getAttribute('class') == "United States") path.style.fill = "#68D391";
            else if (userData.location.country == "vietnam" && path.id == "VN") path.style.fill = "#68D391";
            else if (path.getAttribute('class') == userData.location.country || path.id == userData.location.country) path.style.fill = "#68D391";
            if (path.getAttribute('class') == userData.location.location) return path.style.fill = "#68D391";
            path.addEventListener('click', function (event) {
                const name = event.target.getAttribute('class')
                if (name == "United States") {
                    setCurrentSelect(null);
                    setCurrentLocation('usa');
                } else if (name == "Vietnam") {
                    setCurrentSelect(null);
                    setCurrentLocation('vietnam');
                } else {
                    if (!currentSelect) {
                        event.target.style.fill = "#F6AD55"
                        setCurrentSelect(event.target.getAttribute('class') + "-" + event.target.id);
                    } else {
                        if (currentSelect.split("-")[0] == event.target.getAttribute('class')) return;
                        const els = document.getElementsByClassName(currentSelect.split("-")[0])
                        event.target.style.fill = "#F6AD55";
                        if (!els) return;
                        else if (els.length > 1) {
                            for (let el of els) {
                                el.style.fill = "#7c7c7c"
                            }
                        } else if (els.length == 1) {
                            els[0].style.fill = "#7c7c7c"
                        }
                        setCurrentSelect(event.target.getAttribute('class') + "-" + event.target.id);
                    }
                }
            })
        }
    })
    switch (currentLocation) {
        case "usa":
            return (
                <Box display={{ xl: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <Usa />
                    </Box>
                    <Spacer />
                    <Box mt={{ base: 4, xl: 0 }} ml={{ xl: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect.split("-")[0] : "World Map"}
                        </Heading>
                        <Button m={4} colorScheme="teal" onClick={() => (setCurrentLocation(null), setCurrentSelect(null))}>Trở lại</Button>
                        <Button m={4} colorScheme="teal" onClick={updateLocation}>Submit</Button>
                    </Box>
                </Box>
            )
        case "vietnam":
            return (
                <Box display={{ xl: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <Vietnam />
                    </Box>
                    <Spacer />
                    <Box mt={{ base: 4, xl: 0 }} ml={{ xl: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect.split("-")[0] : "World Map"}
                        </Heading>
                        <Button m={4} colorScheme="teal" onClick={() => (setCurrentLocation(null), setCurrentSelect(null))}>Trở lại</Button>
                        <Button m={4} colorScheme="teal" onClick={updateLocation}>Submit</Button>
                    </Box>
                </Box>
            )
        default:
            return (
                <Box display={{ xl: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <World />
                    </Box>
                    <Spacer />
                    <Box mt={{ base: 4, xl: 0 }} ml={{ xl: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect.split("-")[0] : "World Map"}
                        </Heading>
                        <Button m={4} colorScheme="teal" onClick={updateLocation}>Submit</Button>
                    </Box>
                    {mutationLoading && <p>Loading...</p>}
                    {mutationError && <p>Error :( Please try again <br/> {mutationError.toString()}</p>}
                </Box>
            )
    }
}

export default DashboardHeader;