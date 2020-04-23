import React, {useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {useMovieFetch} from "./hooks/useMovieFetch";
import {imagesOriginal, imagesSource} from "../../api/config";
import moment from "moment";

import classes from './movie.module.scss';
import {Loader} from "../../components/Loader";
import {CircularRating} from "../../components/CircularRating";
import {PersonCart} from "../../components/PersonCart";
import {minutesGetTime} from "../../helpers/minutesGetTime";

export const Movie = () => {
  let { id } = useParams();
  const { isFetching, data, credits } = useMovieFetch(id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const loader = isFetching && <Loader/>;


  const backdropImg = data && !!data.backdrop_path ? `${imagesOriginal}/${data.backdrop_path}` : '';
  const belongsToCollection = data && !!data.belongs_to_collection ? `${imagesOriginal}/${data.belongs_to_collection.backdrop_path}` : '';
  const posterImg = data && `${imagesSource}/${data.poster_path}`;
  //const backdropImg = data && `${imagesOriginal}/${data.backdrop_path}`;
  //isFetching, images, error
  // const backdropImgSmall = data && `${imagesSource}/${data.backdrop_path}`;
  // const posterImgSmall = data && `${imagesSource}/${data.poster_path}`;

  const genres = data && data.genres.reduce((prevVal, currentVal, i) => {
    return i === 0 ? currentVal.name : prevVal + ', ' + currentVal.name;
  }, '');


  const shortPeople = credits && (
    <ul className={classes.movie_page__section_details_persons}>
      {
        credits.directors && credits.directors.map(item => <li key={item.id}>
          <div className={classes.movie_page__section_details_person_name}>{item.name}</div>
          <div className={classes.movie_page__section_details_person_job}>
            {item.job}
          </div>
        </li>)
      }
      {
        credits.screenplay && credits.screenplay.map(item => <li key={item.id}>
          <div className={classes.movie_page__section_details_person_name}>{item.name}</div>
          <div className={classes.movie_page__section_details_person_job}>{item.job}</div>
        </li>)
      }
    </ul>
  );

  const actors = credits.cast && credits.cast.slice(0,10).map(item => <PersonCart key={item.id} {...item} text={item.character} />);

  const page = data && (
    <div className={classes.movie_page}>
      <section className={classes.movie_page__section_home}>
        <div
          className={classes.movie_page__section_home_bg}
          style={{backgroundImage: `url(${backdropImg || belongsToCollection}`}}
        />
        <div className={classes.movie_page__section_home_info}>
          <div className="container">
            <div className={classes.movie_page__section_home_info_title}>
              <h1>{data.title} <span className="">({moment(data.release_date).year()})</span></h1>
            </div>
            <div className={classes.movie_page__section_home_facts}>
              <div className={classes.movie_page__section_home_release}>
                { moment(data.release_date).format('DD/MM/YYYY') }
              </div>
              <div className={classes.movie_page__section_home_release}>{ genres }</div>
              <div className={classes.movie_page__section_home_runtime}>
                { minutesGetTime(data.runtime) }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.movie_page__section_details}>
        <div className="container">
          <div className={classes.movie_page__section_details_wrapper}>
            <div className={classes.movie_page__section_details_top}>
              <div className={classes.movie_page__section_details_top_left}>
                <div className={classes.movie_page__section_details_poster}>
                  <img src={posterImg} alt={data.title} />
                </div>
              </div>
              <div className={classes.movie_page__section_details_top_right}>

                <div className={classes.movie_page__section_details_rating}>
                  <CircularRating className={classes.movie_page__section_home_rating} rating={data.vote_average} />
                  <div className={classes.movie_page__section_details_rating_label}>Пользовательский рейтинг</div>
                </div>

                <div className={classes.movie_page__section_details_header}>
                  <div className={classes.movie_page__section_details_header_title}>{data.title}</div>
                  <div className={classes.movie_page__section_details_header_title_original}>{data.original_title}</div>
                </div>

                <div className={classes.movie_page__section_details_info}>
                  <div className={classes.movie_page__section_details_info_item}>
                    <span className={classes.movie_page__section_details_info_item_label}>Бюджет:</span>
                    <span className={classes.movie_page__section_details_info_item_text}>${(data.budget).toLocaleString('ru')}</span>
                  </div>
                  <div className={classes.movie_page__section_details_info_item}>
                    <span className={classes.movie_page__section_details_info_item_label}>Сборы:</span>
                    <span className={classes.movie_page__section_details_info_item_text}>${(data.revenue).toLocaleString('ru')}</span>
                  </div>
                </div>

                <div className={classes.movie_page__section_details_overview}>
                  <div className={classes.movie_page__section_details_overview_slogan}>{data.tagline}</div>
                  <h4 className={classes.movie_page__section_details_overview_title}>Обзор</h4>
                  <div className={classes.movie_page__section_details_overview_text}>{data.overview}</div>
                </div>

                {shortPeople}
              </div>
            </div>
            <section className={classes.movie_page__persons}>
              <div className={classes.movie_page__persons_title}>В главных ролях</div>
              {actors}
            </section>
          </div>
        </div>
      </section>


    </div>
  );


  return (
    <>
      { loader }
      { page }
    </>
  )
};