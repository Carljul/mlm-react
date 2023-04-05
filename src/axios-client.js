import axios from 'axios';

const APIBASEURL = process.env.REACT_APP_API_BASE_URL;
// const APIBASEURL = 'http://127.0.0.1:8000';

const axiosClient = axios.create({
    baseURL: `${APIBASEURL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
})


axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
    }

    return error;
})

export default axiosClient;