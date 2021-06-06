import axios from 'axios';

export function getUserDetails() {
    return axios.get('https://dev.noobteam.ga/api/auth', {withCredentials: true})
}

export function logOut(){
    return axios.get('https://dev.noobteam.ga/api/auth/logout', {withCredentials: true})
}

export function updateUserLocation(query){
    return axios.get(`https://dev.noobteam.ga/api/map/location?location=${query}`, {withCredentials: true})
}