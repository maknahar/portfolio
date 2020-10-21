import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import socialSrc from '../../images/social.jpg';

const SEO = ({ description, lang, meta, title, skipCanonical = false }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={finalTitle}
          link={[
            ...(!skipCanonical
              ? [
                  {
                    rel: `canonical`,
                    href: site.siteMetadata.siteUrl + location.pathname,
                  },
                ]
              : []),
          ].concat()}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: finalTitle,
            },
            {
              property: `og:image`,
              content: `https://rfitz.io${socialSrc}`,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `twitter:card`,
              content: `summary`,
            },
            {
              property: `twitter:creator`,
              content: site.siteMetadata?.author || ``,
            },
            {
              property: `twitter:title`,
              content: finalTitle,
            },
            {
              property: `twitter:description`,
              content: metaDescription,
            },
          ].concat(meta)}
        />
      )}
    </Location>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
