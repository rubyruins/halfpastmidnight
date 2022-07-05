import * as React from 'react'
import Card from './card'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CoverImage = ({frontmatter}) => {

	const image = getImage(frontmatter.cover_image)

	return (
		<Card>
			<GatsbyImage image={image}/>
		</Card>
	)
}

export default CoverImage