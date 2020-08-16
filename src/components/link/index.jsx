import { Link as GatsbyLink } from "gatsby";
import React from "react";

import classes from "./link.module.css";

const Link = ({ desc, internal = false, link = false, title }) => {
  return (
    <div className={classes.wrapper}>
      {link ? (
        internal ? (
          <GatsbyLink className={classes.linkTitle} to={link}>
            {title}
          </GatsbyLink>
        ) : (
          <a className={classes.linkTitle} href={link}>
            {title}
          </a>
        )
      ) : (
        <span className={classes.title}>{title}</span>
      )}

      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default Link;
