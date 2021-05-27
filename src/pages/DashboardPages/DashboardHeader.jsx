import React, {useEffect, useState} from 'react';
import { Box, Heading, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react'
import Vietnam from '../../maps/vietnam.jsx';
import Usa from '../../maps/usa.jsx';
import World from '../../maps/world.jsx';

export function DashboardHeader({ props }) {
    const [currentLocation, setCurrentLocation] = useState();
    const [currentSelect, setCurrentSelect] = useState();

    useEffect(() => {
        const paths = document.getElementsByTagName('path');
        for (let path of paths) {
            path.addEventListener('click', function (event) {
                if (event.target.style.fill == "#03ff00") return;
                const name = event.target.getAttribute('class')
                console.log(name)
                if(name == "United States"){
                    setCurrentSelect(null);
                    setCurrentLocation('usa');
                }else if(name == "Vietnam"){
                    setCurrentSelect(null);
                    setCurrentLocation('vietnam');
                }
                if(!currentSelect){
                    event.target.style.fill = "orange"
                    setCurrentSelect(event.target.getAttribute('class'));
                }else {
                    console.log("last", currentSelect)
                    if(currentSelect == event.target.getAttribute('class')) return;
                    const els = document.getElementsByClassName(currentSelect)
                    event.target.style.fill = "orange";
                    console.log(els.length, typeof(els))
                    if(!els) return;
                    else if(els.length > 1){
                        for(let el of els){
                            console.log(els.length)
                            el.style.fill = "#7c7c7c"
                        }
                    }else if(els.length == 1) {
                        console.log(els)
                        els[0].style.fill = "#7c7c7c"
                    }
                    setCurrentSelect(event.target.getAttribute('class'));
                }
            })
        }
    })
    switch (currentLocation) {
        case "usa":
            return (
                <Box display={{ md: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <Usa />
                    </Box>
                    <Spacer/>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect : "World Map"}
                        </Heading>
                        <Button colorScheme="teal" onClick={() => (setCurrentLocation(null), setCurrentSelect(null))}>Trở lại</Button>
                    </Box>
                </Box>
            )
        case "vietnam":
            return (
                <Box display={{ md: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <Vietnam />
                    </Box>
                    <Spacer/>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect : "World Map"}
                        </Heading>
                        <Button colorScheme="teal" onClick={() => (setCurrentLocation(null), setCurrentSelect(null))}>Trở lại</Button>
                    </Box>
                </Box>
            )
        default:
            return (
                <Box display={{ md: "flex" }} m={4}>
                    <Box flexShrink={0}>
                        <World />
                    </Box>
                    <Spacer/>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Heading
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="teal.600"
                            id="country"
                            size="3xl"
                            mt="5rem"
                        >
                            {currentSelect ? currentSelect : "World Map"}
                    </Heading>
                    </Box>
                </Box>
            )
    }
}

export default DashboardHeader;