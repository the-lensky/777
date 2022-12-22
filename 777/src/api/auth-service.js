import axios from 'axios';
import { $axios } from '../api/api';

export default class AuthService {
    static async login({ login, password }) {
        console.log('AuthService: login');
        return $axios.post(`login?clientId=default`,
            { login: login, password: password });
    }

    static async refresh(refreshToken) {
        console.log('AuthService: refresh');
        return axios.post(`https://poker.evenbetpoker.com/api/web/auth/token?clientId=default`,
            { refreshToken: refreshToken });
    }
}