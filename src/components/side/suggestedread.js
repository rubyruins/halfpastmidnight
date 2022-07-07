import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const SuggestedRead = ({suggestion}) => {
	const image=getImage(suggestion.node.frontmatter.cover_image)

	return (
		<div className='row mx-0'>
			<div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 px-0 suggested-img-container'>
				<GatsbyImage image={image} alt="" className="suggested-img"/>
			</div>
			<div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 px-0 suggested-text-container'>
				<div className='suggested-text'>
					<Link to={`/reviews/${kebabCase(suggestion.node.frontmatter.title)}`}>{suggestion.node.fields.articleTitle}</Link>
					<p className='m-0'>{suggestion.node.frontmatter.author}</p>
				</div>
			</div>
		</div>
	)
}

export default SuggestedRead