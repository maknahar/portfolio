module.exports = {
  pathPrefix: "/portfolio",
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
        description: 'Qube Wire is a self-service, single-window system for global theatrical distribution. With a simple but comprehensive user interface, distributors can manage their digital cinema assets, assign territorial rights for their content and have their Digital Cinema Packages (DCPs) and keys (aka Key Delivery Messages or KDMs) delivered to movie theatres across the world. Theatres can manage their own digital cinema device details and access their Universal Inbox on the Qube Wire service as well.',
        link: 'https://www.qubewire.com',
      },
      {
        name: 'Justickets',
        description: 'Justickets is a smart, modern and intuitive online platform that helps fans buy tickets for movies in several cities across India. In addition to ticket sales aggregation, Justickets gives users the power of information. Thanks to integration with Moviebuff, India’s largest database of movies releasing in the country, Justickets gives moviegoers access to reviews, ratings, movie information as well as the latest trailers, posters and trivia, making the process of buying tickets online more fun and meaningful.' +
            '' +
            'Justickets is available across platforms: on web, mobile and tablet, allowing users to purchase tickets from wherever they are - the experience of buying tickets is no longer restricted to the box office or home computer.',
        link: 'https://www.justickets.in',
      },
      {
        name: "Vembu Virtual Drive",
        description: "Designed and implemented Vembu Virtual drive. Implemented reads/write using VHFS. Same backup can support all numerous hypervisor like KVM, HyperV, VMWare Player etc. Fully implemented in golang.",
        link: '',
      },
      {
        name: "Vembu Virtual Machine Backup",
        description: "Designed and implemented Vembu file backup from scratch. Implemented numerous features like De-duplication, Wan acceleration, inline compression and encryption etc. Resulting product's performance is two times existing file backup. Product is fully implemented in golang.",
        link: '',
      },
    ],
    experience: [
      {
        name: 'Senior Member of Technical Staff - Security R&D',
        description: 'Salesforce, March 2021 - Present',
        link: 'https://www.salesforce.com/',
      },
      {
        name: 'Engineering Lead - Development',
        description: 'Qube Cinema Technologies, September 2015 - February 2021',
        link: 'https://www.qubecinema.com/',
      },
      {
        name: 'Software Engineer',
        description: 'Vembu Technologies, December 2013 – September 2015',
        link: 'https://www.qubecinema.com/',
      },
    ],
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Golang, React, Python, JavaScript (ES6+), Node.js, Ruby on Rails',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL, Redis, DynamoDB',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Docker, CI / CD, Microservices, API design, Agile / Scrum',
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
        trackingId: `277290153`,
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
