import axios from 'axios';

export function getUserDetails() {
    return axios.get('https://noobs-map-backend.herokuapp.com//api/auth', {withCredentials: true})
}

export function logOut(){
    return axios.get('https://noobs-map-backend.herokuapp.com//api/auth/logout', {withCredentials: true})
}

export function updateUserLocation(query){
    return axios.get(`https://noobs-map-backend.herokuapp.com//api/map/location?location=${query}`, {withCredentials: true})
}