module.exports = {
  siteMetadata: {
    title: `Elizabeth Lovero`,
    description: `Elizabeth Lovero is a developer currently living in New York City, where she designs data visualizations at the Flatiron Institute and periodically writes about development, design, and the detritus of digital life.`,
    author: `github.com/lizlove`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lizlove-gats`,
        short_name: `lizlove`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#7e81e8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
