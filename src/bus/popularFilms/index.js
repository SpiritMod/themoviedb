// Core
import React from 'react';

// Hooks
import { usePopularFilms } from './hooks/usePopularFilms';

// classes
import classes from './styles/index.module.scss';

// Components
import {MovieCart} from "../../components/MovieCart";
import {Loader} from "../../components/Loader";
import {Empty} from "../../components/Empty";

export const PopularFilms = () => {
  const { isFetching, data, loadMore, error } = usePopularFilms();

  const errorMessage = !isFetching && error.status && <Empty message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const movies = data && data.map((movie, index) => <MovieCart key={`${movie.id}-${index}`} {...movie} />);

  const moviesLoadMore = isFetching ? <Loader/> : <div className={classes.moviesFooter_btn} onClick={(e) => loadMore(e)}>Показать ещё</div>

  return (
    <>
      <div className={classes.moviesHeader}>
        <h2>Популярные</h2>
      </div>
      <div className={classes.moviesGrid}>
        { errorMessage }
        { loader }
        { movies }
      </div>
      <div className={classes.moviesFooter}>
        { moviesLoadMore }
      </div>
    </>
  )
};
