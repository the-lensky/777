import { createStore } from 'vuex';
import * as types from '../stores/types';
import AuthService from '../api/auth-service';
import UserService from '../api/user-service';
import { USER_LOGIN_ERROR } from '../stores/types';


export const store = createStore({
    state() {
        return {
            isComeFromLogin: false,
            isLoading: false,
            isAuth: false,
            loginError: false,
            balance: null,
            games: [],
            gameUrl: ''
        };
    },

    actions: {
        async login({ commit }, { login, password }) {
            try {
                const response = await AuthService.login({ login, password });
                const data = response.data.data[0].attributes;
                localStorage.setItem('token', data.token);
                localStorage.setItem('refresh-token', data['refresh-token']);
                commit(types.USER_SET_IS_AUTH, true);
                commit(types.USER_LOGIN_ERROR, false);
            } catch (err) {
                commit(types.USER_LOGIN_ERROR, true);
                console.log('AuthService Error login', err);
            }
        },

        async refresh({ commit }) {
            try {
                const refreshToken = localStorage.getItem('refresh-token');
                const response = await AuthService.refresh(refreshToken);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refresh-token', response.data['refresh-token']);
                commit(types.USER_SET_IS_AUTH, true);
            } catch (err) {
                console.log('AuthService Error refresh', err);
                window.location.href = '/login';
            }
        },

        logout({ commit }) {
            try {
                localStorage.removeItem('token');
                commit(types.USER_SET_IS_AUTH, false);
            } catch (err) {
                console.log('logout', err);
            }
        },

        setIsComeFromLogin({ commit }, status) {
            commit(types.USER_SET_IS_COME_FROM_LOGIN, status);
        },

        async intiData({ commit, dispatch }, status) {
            if (status) {
                commit(types.USER_LOADING_START);
            }
            try {
                await dispatch('getBalance');
                await dispatch('getGames');
            } catch (err) {
                console.log('intiData Error');
            }

            if (status) {
                commit(types.USER_LOADING_FINISH);
            }
        },

        async getBalance({ commit }) {
            try {
                const token = localStorage.getItem('token');
                const response = await UserService.getBalance(token);
                const data = response.data.data[0].attributes
                    ? response.data.data[0].attributes
                    : response.data[0].attributes;
                commit(types.USER_FETCH_BALANCE, data.available);

                return response;
            } catch (err) {
                console.log('UserService Error getBalance', err);

            }
        },

        async getGames({ commit }) {
            try {
                const response = await UserService.getGames();
                commit(types.USER_FETCH_GAMES, response.data.data);

                return response;
            } catch (err) {
                console.log('UserService Error getGames', err);
            }

        },

        async getGame({ commit }, id) {
            try {
                const response = await UserService.getGame(id);
                commit(types.USER_FETCH_GAME, response.data.data[0].attributes['launch-options']['game-url']);

                return response;
            } catch (err) {
                console.log('UserService Error getGame', err);
            }
        }
    },

    mutations: {
        [types.USER_FETCH_TOKENS](state, data) {
            state.token = data;
        },

        [types.USER_FETCH_REFRESH_TOKEN](state, data) {
            state.refreshToken = data;
        },

        [types.USER_IS_LOGGED](state, data) {
            state.isComeFromLogin = data;
        },

        [types.USER_FETCH_BALANCE](state, data) {
            state.balance = data;
        },

        [types.USER_FETCH_GAMES](state, data) {
            const games = data.slice(0, 6);
            state.games = games;
        },

        [types.USER_FETCH_GAME](state, data) {
            state.gameUrl = data;
        },

        [types.USER_LOADING_START](state) {
            state.isLoading = true;
        },

        [types.USER_LOADING_FINISH](state) {
            state.isLoading = false;
        },

        [types.USER_SET_IS_COME_FROM_LOGIN](state, data) {
            state.isComeFromLogin = data;
        },

        [types.USER_SET_IS_AUTH](state, data) {
            state.isAuth = data;
        },

        [types.USER_LOGIN_ERROR](state, data) {
            state.loginError = data;
        },
    }
});

