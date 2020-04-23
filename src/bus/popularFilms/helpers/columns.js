import React from 'react';

export const columns = [
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
  {
    title: 'Индекс популярности',
    dataIndex: 'popularity',
    key: 'popularity',
  },
  {
    title: 'Количество проголосовавших людей',
    dataIndex: 'vote_count',
    key: 'vote_count',
  },
  {
    title: 'Средняя оценка',
    dataIndex: 'vote_average',
    key: 'vote_average',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.vote_average - b.vote_average,
  },
];