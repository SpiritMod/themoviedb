import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import classes from "./styles/MovieLayout.module.scss";

const MovieLayout = props => {
  return (
    <>
      <Header classMoficator="no-fill" />
      <main className={classes.MovieLayout}>
        {props.children}
      </main>
      <Footer />
    </>
  )
};

export default MovieLayout;

