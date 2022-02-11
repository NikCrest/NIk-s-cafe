import React from "react";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.center}>
        <h1>Welcome to Nik's cafe.</h1>
        <p>Haven't ordered yet? order some !!</p>
        <div className={classes.lnk}>
          <center>
            <NavLink to="/Menu" className={classes.link}>
              Order now ➡
            </NavLink>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
