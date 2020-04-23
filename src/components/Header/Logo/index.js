import React from 'react';

import classes from './Logo.module.scss';
import logo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="themoviedb"/>
    </div>
  )
};

export default Logo;