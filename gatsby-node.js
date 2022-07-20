const _ = require("lodash")

function makeTitle(node) {

	if (node.frontmatter.part) {
		return `${node.frontmatter.title} (${node.frontmatter.series}, #${node.frontmatter.part})`
	} else {
		return `${node.frontmatter.title}`
	}
}

function roundOffRating(node) {
    return Math.round(parseFloat(node.frontmatter.rating) * 2) / 2;
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
		createNodeField({
			name: `collection`,
			node,
			value: getNode(node.parent).sourceInstanceName
		});
		if (node.fields.collection === 'reviews') {
			createNodeField({
				name: `articleTitle`,
				node,
				value: makeTitle(node)
			});
			createNodeField({
				name: `roundRating`,
				node,
				value: roundOffRating(node)
			});
		}
	}
};

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const reviewTemplate = require.resolve(`./src/templates/review.js`)
	const tagTemplate = require.resolve("./src/templates/tag.js")

	return graphql(`
		{
			allPosts: allMarkdownRemark(
				filter: {fields: {collection: {eq: "reviews"}}}
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							tags
							title
							author
							series
						}
					}
				}
			}
			allTags: allMarkdownRemark(
				limit: 2000
				filter: {fields: {collection: {eq: "reviews"}}}
				) {
				group(field: frontmatter___tags) {
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
				author: node.frontmatter.author,
				series: node.frontmatter.series,
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
	})
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => { 
	if (stage === 'build-html') { 
		actions.setWebpackConfig({ 
			module: { 
				rules: [ 
					{ 
						test: /isotope-layout/, 
						use: loaders.null(), 
					}, 
				], 
			}, 
		}); 
	} 
}; 