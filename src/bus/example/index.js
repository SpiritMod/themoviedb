// Core
import React from 'react';
import { Table } from 'antd';

import { imagesSource } from '../../api/config';

import { useExampleFetch } from './hooks/useExampleFetch';

export const Example = () => {
  const { isFetching, data, error } = useExampleFetch();

  const errorAuth = error.status === 401 && (<p>{ error.message }</p>);

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const movies = data && data.map(({id, title, overview, poster_path}) => (
    {
      title,
      overview,
      key: id,
      poster: `${imagesSource}${poster_path}`
    }
  ));

  const columns = [
    {
      title: 'Постер',
      dataIndex: 'poster',
      key: 'poster',
      render: (url) => (
        <img src={url} alt="poster" width={100}/>
      )
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Короткое описание',
      dataIndex: 'overview',
      key: 'overview',
    },
  ];

  const moviesJSX = !isFetching && data.length > 0 && (
    <Table dataSource={movies} columns={columns} />
  );

  return (
    <>
      {errorAuth}
      {errorMessage}
      {loader}
      {moviesJSX}
    </>
  )
};
