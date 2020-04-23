// Types
import { types } from './types';

const initialState = {
    data: [],
    page: 1,
};

export const popularFilmsReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.POPULAR_FILMS_FILL:
            return { ...state, data: [ ...state.data, ...payload ] };
        case types.POPULAR_FILMS_PAGER:
            return { ...state, page: state.page + 1 };
        default:
            return state;
    }
};
