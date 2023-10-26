module.exports = {
  siteMetadata: {
    title: `Elizabeth Lovero`,
    description: `Elizabeth Lovero is a developer and technical product manager based in Chicago & Brooklyn, where she designs data visualizations and periodically writes about development, design, and the detritus of digital life.`,
    author: `github.com/lizlove`,
  },
  plugins: [
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
        icon: `src/images/love-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
