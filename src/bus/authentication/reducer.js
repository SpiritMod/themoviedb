// Types
import { types } from './types';

const initialState = {
    request_token: null,
};

export const authenticationReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.AUTH_REQUEST_TOKEN_FILL:
            return { ...state, request_token: payload };

        default:
            return state;
    }
};
