import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { movieActions } from '../actions';


export const useMovieFetch = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.fetchAsync(id));
    dispatch(movieActions.fetchMovieImagesAsync(id));
    dispatch(movieActions.fetchMovieCreditsAsync(id));
  },[dispatch, id]);

  const { data, images, credits } = useSelector((state) => state.movie);
  const { isFetching, error } = useSelector((state) => state.ui);

  const directors = credits && credits['crew'].filter(item => item.department === 'Directing' && item.job === 'Director');
  const screenplay = credits && credits['crew'].filter(item => item.department === 'Writing' && item.job === 'Screenplay');


  const peoples = credits && [...directors, ...screenplay];
  console.log('directors: ', directors);
  console.log('screenplay: ', screenplay);
  console.log('peoples: ', peoples);


  // const arr = credits && peoples.slice().reduce((unique, item) => {
  //   unique.map((itemUnique, index) => {
  //     if (itemUnique.id === item.id) {
  //       unique[index].job = unique[index].job + ', ' + item.job;
  //       return unique
  //     } else {
  //       return unique.includes(item) ? unique : unique.push(item);
  //     }
  //   });
  //   return unique.length === 0 ? [...unique, item] : unique
  // }, []);
  //
  // console.log('arr: ', arr);

  return {
    data,
    images,
    credits: {
      ...credits,
      directors: directors,
      screenplay: screenplay,
    },
    isFetching,
    error
  }
};
