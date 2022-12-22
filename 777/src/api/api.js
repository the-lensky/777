import axios from 'axios';
import { store } from "../stores/index";
import AuthService from './auth-service';

export const baseUrl = `https://poker.evenbetpoker.com/api/web/v2/`;

export const $axios = axios.create({
    baseURL: baseUrl,
})

// $axios.interceptors.response.use(
//     async (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config
//         const response = error.response;
//
//         if (response && response.status === 401 || response && response.status === 422) {
//             try {
//                 const refreshToken = localStorage.getItem('refresh-token');
//                 console.log('refreshToken', refreshToken);
//                 await axios.post(`https://poker.evenbetpoker.com/api/web/auth/token?clientId=default`,
//                     { refreshToken: refreshToken});
//                 return $axios.request(originalRequest);
//
//             } catch (e) {
//                 console.log('Not authorized');
//             }
//         }
//     }
// );
