import React from 'react';

import classes from './person.module.scss';
import {imagesSource} from "../../api/config";

export const PersonCart = (props) => {

  const posterImg = `${imagesSource}/${props.profile_path}`;

  return (
    <div className={classes.person_cart}>
      <div className={classes.person_cart__img}>
        <img src={posterImg} alt={props.title} />
      </div>
      <div className={classes.person_cart__name}>{props.name}</div>
      <div className={classes.person_cart__name}>{props.text}</div>
    </div>
  )
};