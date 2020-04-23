import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from './PopularFilmsBlock.module.scss';
import "./custome-slick.scss";

import { MovieCart } from '../../../components/MovieCart';
import { usePopularFilms } from '../hooks/usePopularFilms';
import { Loader } from "../../../components/Loader";
import { Empty } from '../../../components/Empty';
import {Link} from "react-router-dom";
import {book} from "../../../navigation/book";

const SLIDES_TO_SHOW = 20;

export const PopularFilmsBlock = () => {
  const { isFetching, data, error } = usePopularFilms();
  const sliderRef = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const loader = isFetching && <Loader/>;

  const errorMessage = !isFetching && error.status && <Empty message={error.message}/>;

  const movies = data && data.slice(0,SLIDES_TO_SHOW).map((movie) => {
    return (
      <div key={movie.id} className={classes.slideItem}>
        <MovieCart {...movie} />
      </div>
    )
  });

  const slider = !isFetching && !error && (
    <Slider ref={sliderRef} {...settings}>
      {movies}
    </Slider>
  );

  const sliderArrows = !isFetching && !error && (
    <div className={classes.Arrows}>
      <span className={`${classes.arrow} ${classes.arrowLeft}`} onClick={prev}><span className={'icon-arrow-left'}></span></span>
      <span className={`${classes.arrow} ${classes.arrowRight}`} onClick={next}><span className={'icon-arrow-right'}></span></span>
    </div>
  );

  return (
    <div className={classes.PopularFilmsBlock}>
      <div className={classes.BlockHeader}>
        <h2>Популярные</h2>
        <div className={classes.BlockHeader__actions}>
          <Link className={classes.BlockHeader__link} to={book.popularFilms}>Смотреть все</Link>
        </div>
      </div>
      <div className={`${classes.slider} ${isFetching ? classes.vertical : error ? classes.vertical : ''} `}>
        { loader }
        { errorMessage }
        { slider }
      </div>
      <div className={classes.PopularFilmsBlock__footer}>
        { sliderArrows }
      </div>
    </div>
  )
};