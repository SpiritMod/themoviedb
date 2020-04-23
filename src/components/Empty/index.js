import React from 'react';

import classes from './Empty.module.scss';

import img from './assets/server.svg'

export const Empty = (props) => {
  console.log(classes);
  return (
    <div className={classes.Empty}>
      <div className={classes.Empty__image}>
        <img src={img} alt="img"/>
      </div>
      <div className={classes.Empty__description}>{props.message}</div>
    </div>
  );
};