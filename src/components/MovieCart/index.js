import React from 'react';
//import {useParams, useLocation} from "react-router-dom";
//import moment from "moment";
import moment from 'moment';
import 'moment/locale/ru';

import classes from "./MovieCart.module.scss";
import {imagesSource} from "../../api/config";
import {CircularRating} from "../CircularRating";
import {book} from "../../navigation/book";
import {Link} from "react-router-dom";

export const MovieCart = (props) => {
  const { id, title, release_date, vote_average, poster_path } = props;

  return (
    <div className={classes.MovieCart} id={id}>
      <div className={classes.img}>
        <Link to={`${book.popularFilms}/${id}`} className={classes.img_link}>
          <img src={`${imagesSource}${poster_path}`} alt={title}/>
        </Link>
        <CircularRating className={classes.rating} rating={vote_average} />
      </div>
      <div className={classes.title}>
        <Link to={`${book.popularFilms}/${id}`}>{title}</Link>
      </div>
      <div className={classes.date}>{moment(release_date).format('DD MMMM YYYY')}</div>
    </div>
  )
};

