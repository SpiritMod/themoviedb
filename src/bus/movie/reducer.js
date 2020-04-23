// Types
import { types } from './types';

const initialState = {
    data: null,
    images: null,
    credits: null,
};

export const movieReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.MOVIE_FILL:
            return { ...state, data: payload };
        case types.MOVIE_IMAGES_FILL:
            return { ...state, images: payload };
        case types.MOVIE_CREDITS_FILL:
            return { ...state, credits: payload };


        default:
            return state;
    }
};
