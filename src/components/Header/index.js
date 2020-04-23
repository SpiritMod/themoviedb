import React from "react";
import {Link} from "react-router-dom";

import classes from "./header.module.scss";
import Logo from "./Logo";
import {book} from "../../navigation/book";

export default (props) => {
  const cls = [
    classes.header,
    props.classMoficator === 'no-fill' ? classes.header__no_fill : ''
  ];

  return (
    <header className={cls.join(' ')}>
      <div className={`container ${classes.container}`}>
        <Link to={book.root}>
          <Logo/>
        </Link>
        <span>Navigation</span>
      </div>
    </header>
  )
};