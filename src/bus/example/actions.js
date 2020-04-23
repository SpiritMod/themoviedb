// Types
import { types } from './types';

// Instruments
import { api } from './api';
import { uiActions } from '../ui';

export const exampleActions = Object.freeze({
    // Sync
    fill: (payload) => {
        return {
            type: types.EXAMPLE_FILL,
            payload
        }
    },
    // Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.EXAMPLE_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.upcomingMovies.fetch();

            if (response.status === 200) {
                const { results } = response.data;

                dispatch(exampleActions.fill(results));
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
