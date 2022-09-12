import axios from 'axios';
import { userInfo } from '../utils/Auth';

const API = process.env.REACT_APP_API_URL
export const addBus = (bus) => {
    return axios.post(`${API}/bus/`, bus, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userInfo().token
        }
    })
};


export const getAllBus = () => {
    return axios.get(`${API}/bus/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userInfo().token
        }
    })
};