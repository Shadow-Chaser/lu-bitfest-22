import axios from 'axios';
import { userInfo } from '../utils/Auth';

const API = process.env.REACT_APP_API_URL

export const addConsumerRequest = (request) => {
    return axios.post(`${API}/consumer-request/`, request, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userInfo().token
        }
    })
};


export const getAllConsumerRequest = () => {
    return axios.get(`${API}/consumer-request/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userInfo().token
        }
    })
};


export const getTransportDemands = () => {
    return axios.get(`${API}/consumer-request/transport-demands`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userInfo().token
        }
    })
};