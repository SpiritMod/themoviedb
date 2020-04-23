import React from 'react';
import { useAuthenticationFetch } from "./hooks/useAuthenticationFetch";

export const BtnAuth = () => {
  const { isFetching, request_token, error } = useAuthenticationFetch();

  const test = request_token;
  return (
    <div>
      {test}
    </div>
  )
};