import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { exampleActions } from '../actions';

export const useExampleFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleActions.fetchAsync());
  },[dispatch]);

  const { data } = useSelector((state) => state.example);
  const { isFetching, error } = useSelector((state) => state.ui);

  return {
    data,
    isFetching,
    error
  }
};
