import axios from 'axios';
import { $axios } from '../api/api';

export default class AuthService {
    static async login({ login, password }) {
        return $axios.post(`login?clientId=default`,
            { login: login, password: password });
    }

    static async refresh(refreshToken) {
        return axios.post(`https://poker.evenbetpoker.com/api/web/auth/token?clientId=default`,
            { refreshToken: refreshToken });
    }
}