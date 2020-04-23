import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './CircularRating.scss'

export const CircularRating = props => {
  const { rating } = props;
  const calculatedRating = rating * 10;

  const cls = [
    'CircularRating',
    props.className
  ];

  if (calculatedRating <= 40) {
    cls.push('red');
  }
  if (calculatedRating <= 69 && calculatedRating >= 41 ) {
    cls.push('yellow');
  }


  return (
    <div className={cls.join(' ')}>
      <CircularProgressbar
        value={calculatedRating}
        text={`${rating}`}
      />
    </div>
  )
};