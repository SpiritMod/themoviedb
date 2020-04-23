import axios from 'axios';

import { uri, token } from '../../../api/config';

export const api = Object.freeze({
    upcomingMovies: {
        fetch: () => {
            return axios.get(`${uri}/movie/upcoming`, {
                params: {
                    api_key: token,
                    language: 'ru-Ru'
                }
            })
        }
    },
});