import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const SuggestedRead = ({suggestion}) => {
	const image=getImage(suggestion.node.frontmatter.cover_image)

	return (
		<div className='row mx-0'>
				<div className='suggested-text p-0'>
				<Link to={`/reviews/${kebabCase(suggestion.node.frontmatter.title)}`}>{suggestion.node.fields.articleTitle}</Link>
				<p className='m-0'>{suggestion.node.frontmatter.author}</p>
			</div>
		</div>
	)
}

export default SuggestedRead