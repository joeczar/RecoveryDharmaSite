module.exports = {
  siteMetadata: {
    title: `Recovery Dharma Germany`,
    description: `Recovery Dharma is a peer-led, grass-roots, democratically-structured organization. Our mission is to support individuals on their path of recovery from addiction using Buddhist practices and principles.>`,
    author: `@JoeCzar`,
    menuLinks:[ 
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/about'
      },
      {
        name:'meetings',
        link:'/meetings'
      },
      {
        name:'contact',
        link:'/contact'
      },
    ]
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0f1016`, 
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/DharmaWheel.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
