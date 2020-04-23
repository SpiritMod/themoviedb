// Core
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// Routes
import {book} from './book';

// Pages
import {PopularFilmsPage} from '../pages/popularFilms';
import {Home} from '../pages/home';
import {MoviePage} from "../pages/movie";

export const Routes = () => (
    <>
        <Switch>
            <Route exact path={book.root}>
                <Home/>
            </Route>
            <Route exact path={book.popularFilms}>
                <PopularFilmsPage/>
            </Route>
            <Route exact path={book.popularFilm}>
                <MoviePage />
            </Route>

            <Redirect to={book.root}/>
        </Switch>
    </>
);
