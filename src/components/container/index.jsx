import React from "react";

import classes from "./container.module.css";

const Container = ({ children, small }) => {
  console.log(small);
  return (
    <div
      className={classes.wrapper}
      style={{ ...(small ? { maxWidth: 1000 } : {}) }}
    >
      {children}
    </div>
  );
};

export default Container;
