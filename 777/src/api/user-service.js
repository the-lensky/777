import { $axios } from '../api/api';

export default class UserService {
    static async getBalance(token) {
        return $axios.get(`users/me/balance?clientId=default&auth=${token}`);
    }

    static async getGames() {
        return await $axios.get(`casino/games?clientId=default`);
    }

    static async getGame(id) {
        return await $axios.post(`casino/games/${id}/session-demo?clientId=default`);
    }
}