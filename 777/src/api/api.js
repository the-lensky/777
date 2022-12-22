import axios from 'axios';

const baseUrl = `https://poker.evenbetpoker.com/api/web/v2/`;

export const $axios = axios.create({
    baseURL: baseUrl
});
