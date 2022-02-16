import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brapi.ga/api/'
});

export default api;