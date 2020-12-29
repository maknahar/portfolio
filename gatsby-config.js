module.exports = {
  siteMetadata: {
    siteUrl: 'https://rfitz.io',
    blogEnabled: true,
    name: 'Ryan Fitzgerald',
    title: `Ryan Fitzgerald | Full-Stack Developer`,
    description: `Full-Stack Developer based in Toronto, Canada.`,
    about: `I'm a motivated full-stack engineer who has experience building and scaling web applications and services in various domains. I'm also passionate about open-source contributions, working in high impact environments, and helping growing development teams build great products.`,
    author: `@rfitzio`,
    github: `https://github.com/ryanfitzgerald`,
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    projects: [
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=portfolio',
      },
      {
        name: 'Pivalink (Sold)',
        description:
          'Tool to create microlanding pages that can be easily updated and customized to fit any brand',
        link: 'https://pivalink.com/',
      },
      {
        name: 'Coursefacts',
        description:
          'A platform where students can read and write university / college course reviews anonymously',
        link: 'https://coursefacts.com/',
      },
      {
        name: 'Dev Blog',
        description:
          'An open-source and minimal personal blog template for developers built with Gatsby and React',
        link: 'hhttps://github.com/RyanFitzgerald/devblog',
      },
      {
        name: 'Dev Portfolio',
        description:
          'An open source and customizable single-page personal portfolio template for developers',
        link: 'https://github.com/RyanFitzgerald/devportfolio',
      },
    ],
    experience: [
      {
        name: 'Resolver',
        description: 'Full-Stack Developer, March 2020 - Present',
        link: 'https://www.resolver.com/',
      },
      {
        name: 'Ambyint',
        description: 'Full-Stack Developer, September 2018 - March 2020',
        link: 'https://ambyint.com/',
      },
      {
        name: 'Bank of Canada',
        description: 'Full-Stack Developer, May 2015 - September 2018',
        link: 'https://bankofcanada.ca/',
      },
    ],
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-54210715-4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ryan-fitzgerald`,
        short_name: `rfitz`,
        start_url: `/`,
        background_color: `#3486eb`,
        theme_color: `#3486eb`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
