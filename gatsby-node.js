const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const reviewTemplate = require.resolve(`./src/templates/review.js`)
	const tagTemplate = require.resolve("./src/templates/tag.js")
	const seriesTemplate = require.resolve("./src/templates/series.js")
	const authorTemplate = require.resolve("./src/templates/author.js")

	return graphql(`
		{
			allPosts: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							tags
							title
						}
					}
				}
			}
			allTags: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
			allSeries: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___series) {
					fieldValue
				}
			}
			allAuthors: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___author) {
					fieldValue
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const posts = result.data.allPosts.edges
		posts.forEach(({ node }) => {
			createPage({
			path: `/reviews/${_.kebabCase(node.frontmatter.title)}/`,
			component: reviewTemplate,
			context: {
				title: node.frontmatter.title,
			}})
  		})

		const tags = result.data.allTags.group
		tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue,
			},
			})
		})

		const allSeries = result.data.allSeries.group
		allSeries.forEach(series => {
		createPage({
			path: `/series/${_.kebabCase(series.fieldValue)}/`,
			component: seriesTemplate,
			context: {
				series: series.fieldValue,
			},
			})
		})

		const allAuthors = result.data.allAuthors.group
		allAuthors.forEach(author => {
		createPage({
			path: `/author/${_.kebabCase(author.fieldValue)}/`,
			component: authorTemplate,
			context: {
				series: author.fieldValue,
			},
			})
		})

	})
}

