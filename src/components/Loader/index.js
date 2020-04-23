import React from 'react';

import classes from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.inner}></div>
      <div className={classes.inner}></div>
      <div className={classes.inner}></div>
    </div>
  )
};