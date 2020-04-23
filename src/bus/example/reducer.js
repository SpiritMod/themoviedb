// Types
import { types } from './types';

const initialState = {
    data: [],
};

export const exampleReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.EXAMPLE_FILL:
            return { ...state, data: payload };

        default:
            return state;
    }
};
