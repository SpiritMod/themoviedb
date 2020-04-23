import React from "react";

import classes from "./footer.module.scss";

export default () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
};