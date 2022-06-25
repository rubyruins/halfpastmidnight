module.exports = {
  siteMetadata: {
    title: `Half Past Midnight`,
    description: `Science Fiction and Fantasy reviews`,
    author: `@rubyruins`,
    siteUrl: `https://halfpastmidnight.me/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `reviews`,
        path: `${__dirname}/reviews`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark"
  ],
}
