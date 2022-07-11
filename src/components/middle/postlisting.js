import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PostListing = ({node}) => {

	const image = getImage(node.frontmatter.cover_image)

	return (
		<div>
			<article key={node.id} className="element-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
			<div className='element-item-content'>
				<div className='element-item-img'>
					<GatsbyImage image={image}/>
				</div>
				<div className='element-item-text'>
					<h2 className='title'>
					<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
						{node.fields.articleTitle}
					</Link>
					</h2>
					<p className='date'>Posted: {node.frontmatter.date}</p>
					<p className='author'>By: {node.frontmatter.author}</p>
					<p className='rating'>Rating: {node.frontmatter.rating}</p>
				</div>
			</div>
			</article>
		</div>
	)
}

export default PostListing