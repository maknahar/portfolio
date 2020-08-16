import { Link } from "gatsby";
import React from "react";

import classes from "./post-nav.module.css";

const PostNav = ({ next, previous }) => {
  return (
    <nav className={classes.postNav}>
      <ul className={classes.postNavList}>
        <li className={classes.postNavItem}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <div className={classes.arrow}>&larr; Previous Post</div>{" "}
              <div className={classes.postName}>
                {previous.frontmatter.title}
              </div>
            </Link>
          )}
        </li>
        <li className={classes.postNavItem}>
          {next && (
            <Link to={next.fields.slug} rel="next">
              <div className={classes.arrow}>Next Post &rarr;</div>
              <div className={classes.postName}>{next.frontmatter.title}</div>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PostNav;
