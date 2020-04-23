import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authenticationActions } from '../actions';

export const useAuthenticationFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationActions.fetchAsync());
  },[dispatch]);

  const { request_token } = useSelector((state) => state.authentication);
  const { isFetching, error } = useSelector((state) => state.ui);

  return {
    request_token,
    isFetching,
    error
  }
};
