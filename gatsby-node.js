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
							slug
							tags
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
			path: node.frontmatter.slug,
			component: reviewTemplate,
			context: {
				slug: node.frontmatter.slug,
			}})
  		})

		const tags = result.data.tagsGroup.group
		tags.forEach(tag => {
		createPage({
			path: `/tags/${tag.fieldValue}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue,
			},
			})
		})
	})
}