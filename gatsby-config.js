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
		"gatsby-transformer-sharp",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `reviews`,
				path: `${__dirname}/data/reviews`,
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `headers`,
				path: `${__dirname}/data/headers`,
			}
		},
		{
			resolve: "gatsby-plugin-sitemap",

		},
		{
			resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
			options: {
				fields: ['title', 'author', 'series', 'articleTitle'],
				resolvers: {
					MarkdownRemark: {
						title: node => node.frontmatter.title,
						series: node => node.frontmatter.series,
						author: node => node.frontmatter.author,
						articleTitle: node => node.fields.articleTitle,
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"G-Z1300R3Z4F"
				],
			},
		},
	],
}
