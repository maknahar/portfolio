module.exports = {
  siteMetadata: {
    siteUrl: 'https://maknahar.github.io/portfolio',
    blogEnabled: true,
    name: 'Mayank Patel',
    title: `Mayank Patel | Cyber security Engineers`,
    description: `Cyber security Engineers based in India.`,
    about: `I'm a motivated Cyber security Engineers who has experience building and scaling web applications and services in various domains. I'm also passionate about open-source contributions, working in high impact environments, and helping growing development teams build great products.`,
    author: `@maknahar`,
    github: `https://github.com/maknahar`,
    linkedin: `https://www.linkedin.com/in/maknahar/`,
    projects: [
      {
        name: 'Qube Wire',
        description: 'Project description',
        link: 'https://www.qubewire.com',
      },
    ],
    experience: [
      {
        name: 'SMTS',
        description: 'Salesforce, March 2021 - Present',
        link: 'https://www.salesforce.com/',
      },
    ],
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, React, Ruby on Rails',
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
        name: `mayank-patel`,
        short_name: `maknahar`,
        start_url: `/`,
        background_color: `#3486eb`,
        theme_color: `#3486eb`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
