import {Link} from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({name, description, link = false,
                       internal = false, logo = false, timeline=false}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>
        {logo ? <img src={logo} width='75px' style={{display: "inline", paddingRight: '10px'}} alt='logo'/> : null}
        {description}
      </p>
      <p className={classes.description}>
        {timeline ? timeline : null}
      </p>
    </div>
  );
};

export default SummaryItem;
