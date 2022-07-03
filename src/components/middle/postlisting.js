import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const PostListing = ({node}) => {

	return (
		<div>
			<article key={node.id} className="element-item">
				<h2 className='title'>
				<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
					{node.fields.articleTitle}
				</Link>
				</h2>
				<p className='date'>Posted: {node.frontmatter.date}</p>
				<p className='author'>By: {node.frontmatter.author}</p>
				<p className='rating'>Rating: {node.frontmatter.rating}</p>
			</article>
		</div>
	)
}

export default PostListing