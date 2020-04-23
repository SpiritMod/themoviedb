// Core
import { combineReducers } from 'redux';

// Reducers
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';
import { movieReducer as movie } from '../bus/movie/reducer';
import { authenticationReducer as authentication } from '../bus/authentication/reducer';
import { uiReducer as ui } from '../bus/ui';

export const rootReducer = combineReducers({
    authentication,
    popularFilms,
    movie,
    ui,
});
