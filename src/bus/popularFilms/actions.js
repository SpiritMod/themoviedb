// Types
import { types } from './types';

// Instruments
import { api } from './api';
import { uiActions } from '../ui';

export const popularFilmsActions = Object.freeze({

    // Sync
    fill: (payload) => {
        return {
            type: types.POPULAR_FILMS_FILL,
            payload
        }
    },
    setPager: () => {
        return {
            type: types.POPULAR_FILMS_PAGER,
        }
    },
    // Async
    fetchAsync: (page) => async (dispatch) => {
        dispatch({
            type: types.POPULAR_FILMS_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.upcomingMovies.fetch(page || 1);

            if (response.status === 200) {
                const { results } = response.data;

                dispatch(popularFilmsActions.fill(results));
            } else {
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
        // setTimeout(function() {
        //     dispatch(uiActions.stopFetching());
        // }, 2000);

    }
});
