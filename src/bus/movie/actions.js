// Types
import { types } from './types';

// Instruments
import { api } from './api';
import { uiActions } from '../ui';

export const movieActions = Object.freeze({
    // Sync
    fill: (payload) => {
        return {
            type: types.MOVIE_FILL,
            payload
        }
    },
    fillImages: (payload) => {
        return {
            type: types.MOVIE_IMAGES_FILL,
            payload
        }
    },
    fillCredits: (payload) => {
        return {
            type: types.MOVIE_CREDITS_FILL,
            payload
        }
    },
    // Async
    fetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.MOVIE_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.getMovie.fetch(id);

            if (response.status === 200) {
                const results = response.data;

                dispatch(movieActions.fill(results));
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
    },

    fetchMovieImagesAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.MOVIE_IMAGES_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.getMovieImages.fetch(id);

            if (response.status === 200) {
                const results = response.data;

                dispatch(movieActions.fillImages(results));
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
    },

    fetchMovieCreditsAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.MOVIE_CREDITS_FETCH_ASYNC
        });

        dispatch(uiActions.startFetching());

        try {
            const response = await api.getMovieCredits.fetch(id);

            if (response.status === 200) {
                const results = response.data;

                dispatch(movieActions.fillCredits(results));
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
    },
});
