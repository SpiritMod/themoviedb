import axios from 'axios';

import { uri, token } from '../../../api/config';

export const api = Object.freeze({
    upcomingMovies: {
        fetch: (page) => {
            return axios.get(`${uri}/movie/popular`, {
                params: {
                    api_key: token,
                    language: 'ru-Ru',
                    page: page
                }
            })
        }
    },
});