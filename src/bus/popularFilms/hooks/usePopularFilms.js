import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { popularFilmsActions } from '../actions';

export const usePopularFilms = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.popularFilms);
  const { isFetching, error } = useSelector((state) => state.ui);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(popularFilmsActions.fetchAsync());
    } else {
      if ((data.length/20) < page ) {
        dispatch(popularFilmsActions.fetchAsync(page));
      }
    }
  },[dispatch, data.length, page]);

  const loadMore = (e) => {
    e.preventDefault();
    dispatch(popularFilmsActions.setPager());
  };

  return {
    data,
    loadMore,
    isFetching,
    error
  }
};
