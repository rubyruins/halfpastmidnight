import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CoverImage = ({className, frontmatter}) => {

	const image = getImage(frontmatter.cover_image)

	return (
		<div className={`card mb-4 mx-0 p-0 review-img-container ${className}`}>
			<div className="card-body p-0 mx-0">
			<GatsbyImage image={image} className="review-img"/>
			</div>
		</div>
	)
}

export default CoverImage