import React, { useEffect, useState } from 'react';
import ErrorPage from '../errorPage.jsx';
import { Map } from './Map.jsx';


export function DashboardHeader({ userData }) {
    try {
        const [currentLocation, setCurrentLocation] = useState();
        const [currentSelect, setCurrentSelect] = useState();

        console.log(currentLocation, currentSelect)

        useEffect(() => {
            const paths = document.getElementsByTagName('path');
            for (let path of paths) {
                if (userData.location.country) {
                    if (userData.location.country == "usa" && path.getAttribute('class') == "United States") path.style.fill = "#68D391";
                    else if (userData.location.country == "vietnam" && path.id == "VN") path.style.fill = "#68D391";
                    else if (path.getAttribute('class') == userData.location.country || path.id == userData.location.location_id) path.style.fill = "#68D391";
                    if (path.getAttribute('class') == userData.location.location) return path.style.fill = "#68D391";
                }
                if (!userData.location.country || (userData.location.country && path.id != userData.location.location_id)) {
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
            }
        })

        return (
            <Map currentLocation={currentLocation} currentSelect={currentSelect} userData={userData} />
        )
    } catch (e) {
        return (
            <ErrorPage error={e} />
        )
    }
}

export default DashboardHeader;