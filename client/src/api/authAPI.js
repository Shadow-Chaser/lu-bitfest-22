import axios from 'axios';

const API = process.env.REACT_APP_API_URL

console.log(API);

export const signUp = (user) => {
    return axios.post(`${API}/user/signup`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

export const signIn = (user) => {
    return axios.post(`${API}/user/signin`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};