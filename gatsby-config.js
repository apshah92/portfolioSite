module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content` // the path to your markdown files
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}