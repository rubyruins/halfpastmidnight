const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const reviewTemplate = require.resolve(`./src/templates/review.js`)
	const tagTemplate = require.resolve("./src/templates/tag.js")

	return graphql(`
		{
			postsRemark: allMarkdownRemark(
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
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		const posts = result.data.postsRemark.edges
		posts.forEach(({ node }) => {
			createPage({
			path: `/reviews/${_.kebabCase(node.frontmatter.title)}/`,
			component: reviewTemplate,
			context: {
				title: node.frontmatter.title,
			}})
  		})

		const tags = result.data.tagsGroup.group
		tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue,
			},
			})
		})
	})
}

