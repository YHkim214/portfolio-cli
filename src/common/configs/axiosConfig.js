import axios from "axios";
import { API_HOST, REFRESH_API } from "../constants/api";

const axiosWrapperAuth = axios.create({
    baseURL: API_HOST,
    timeout: 30000
})

const axiosWrapper = axios.create({
    baseURL: API_HOST,
    timeout: 30000
})

const refresh = async () => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');

    const result = await axios.post(API_HOST + REFRESH_API, {
            'oldAccessToken': accessToken,
            'refreshToken': refreshToken
        }
    )
    .then((response) => {
        let data = response.data.data;
        
        localStorage.setItem('accessToken', data.newAccessToken);

        return response;
    })
    .catch((error) => Promise.reject(error))

    return result;
}

axiosWrapperAuth.interceptors.request.use(
    (config) => {
        let accessToken = localStorage.getItem('accessToken');
        let tokenType = localStorage.getItem('tokenType');
        
        if(accessToken) {
            config.headers['Authorization'] = `${tokenType} ${accessToken}`;
        }

        return config;
    }
);

axiosWrapperAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if(error.response?.status === 401) {
            await refresh();

            let accessToken = localStorage.getItem('accessToken');
            let tokenType = localStorage.getItem('tokenType');
       
            error.config.headers = {
                'Authorization': `${tokenType} ${accessToken}`,
                'Content-Type': 'application/json'
            };

            const response = await axios.request(error.config)

            return response;
        } else {
            return Promise.reject(error);
        }
    }
);

export {axiosWrapperAuth, axiosWrapper};