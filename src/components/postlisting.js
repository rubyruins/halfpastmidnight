import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

function renderSeries(node) {

	if (node.frontmatter.part) {
		return (
			<p>{node.frontmatter.series} part {node.frontmatter.part}</p>
		)
	}
}

const PostListing = ({node}) => {

	return (
		<div>
			<article key={node.id}>
				<h2>
				<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
					{node.frontmatter.title}
				</Link>
				</h2>
				{renderSeries(node)}
				<p>Posted: {node.frontmatter.date}</p>
				<p>By: {node.frontmatter.author}</p>
			</article>
		</div>
	)
}

export default PostListing