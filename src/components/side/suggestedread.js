import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import CoverImage from './coverimage'

const SuggestedRead = ({suggestion}) => {
	const image=getImage(suggestion.node.frontmatter.cover_image)

	return (
		<div className='row'>
			<div className='col-lg-2 col-md-2 col-sm-2'>
				<GatsbyImage image={image} alt="" className="suggested-img"/>
			</div>
			<div className='col-lg-10 col-md-10 col-sm-10 suggested-text-container'>
				<div className='suggested-text'>

					<Link to={`/reviews/${kebabCase(suggestion.node.frontmatter.title)}`}>{suggestion.node.fields.articleTitle}</Link>
					<p className='m-0'>{suggestion.node.frontmatter.author}</p>
				</div>
			</div>
		</div>
	)
}

export default SuggestedRead