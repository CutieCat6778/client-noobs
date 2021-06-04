import axios from 'axios';

export function getUserDetails() {
    return axios.get(`${process.env.backend}/api/auth`, {withCredentials: true})
}

export function logOut(){
    return axios.get(`${process.env.backend}/api/authlogout`, {withCredentials: true})
}