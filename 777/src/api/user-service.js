import { $axios } from '../api/api';

export default class UserService {
    static async getBalance(token) {
        console.log('UserService: getBalance');
        return $axios.get(`users/me/balance?clientId=default&auth=${token}`);
    }

    static async getGames() {
        console.log('UserService: getGames');
        return await $axios.get(`casino/games?clientId=default`);
    }

    static async getGame(id) {
        console.log('UserService: getGames');
        return await $axios.post(`casino/games/${id}/session-demo?clientId=default`);
    }
}