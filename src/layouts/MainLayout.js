import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import classes from "./styles/MainLayout.module.scss";

const MainLayout = props => {
  return (
    <>
      <Header />
      <main className={classes.MainLayout}>
        <div className="container">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  )
};

export default MainLayout;

