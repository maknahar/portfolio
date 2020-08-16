import { Link } from "gatsby";
import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <Link to="/">
          <img
            className={classes.profilePicture}
            src={imgSrc}
            alt="Ryan Fitzgerald"
          />
        </Link>
      </div>
      <div className={classes.profileContent}>
        <Link to="/">
          <h1>Ryan Fitzgerald</h1>
        </Link>
        <h2>Full-Stack Developer based in Toronto, Canada.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
