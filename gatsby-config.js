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
		"gatsby-transformer-sharp",
		"gatsby-transformer-remark",
		"gatsby-plugin-sitemap"
	],
}
