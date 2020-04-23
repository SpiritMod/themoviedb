import axios from 'axios';

import { uri, token } from '../../../api/config';

export const api = Object.freeze({
    requestToken: {
        fetch: () => {
            return axios.get(`${uri}/authentication/token/new`, {
                params: {
                    api_key: token,
                }
            })
        }
    },

});

