// Types
import { types } from './types';

// Instruments
import { api } from './api';
import { uiActions } from '../ui';

export const authenticationActions = Object.freeze({
    // Sync
    fillRequestToken: (payload) => {
        return {
            type: types.AUTH_REQUEST_TOKEN_FILL,
            payload
        }
    },

    // Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.AUTH_REQUEST_TOKEN_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.requestToken.fetch();

            if (response.status === 200) {
                const results = await response.data;
                const token = results.request_token;

                dispatch(authenticationActions.fillRequestToken(token));
            } else {
                console.log(response);
                const error = {
                    status: response.status
                };

                dispatch(uiActions.setFetchingError(error));
            }
        } catch (error) {
            dispatch(uiActions.setFetchingError({
                status: 401,
                message: 'Not authorized. Provide correct token please',
            }));
        }

        dispatch(uiActions.stopFetching());
    }
});
