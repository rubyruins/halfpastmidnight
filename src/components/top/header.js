import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function getRandomImage(data) {
	let allImages = data.allMarkdownRemark.nodes
	let totalImages = allImages.length;
	let randomImageIndex = Math.floor(Math.random() * totalImages);
	let randomImage = allImages[randomImageIndex];
	return randomImage;
}

const Header = React.memo(() => {
		
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark (
				filter: {fields: {collection: {eq: "headers"}}}
				) {
				nodes {
					frontmatter {
						name
						contributor
						cover_image {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
		`)
		
		let selectedImage = getRandomImage(data);
		let renderedImage = getImage(selectedImage.frontmatter.cover_image);
		let imageInfo = selectedImage.frontmatter.name + "\n" + selectedImage.frontmatter.contributor;

	return (
		<div className='header-container col-xl-12 col-lg-12 col-md-12 col-sm-12'>
			<GatsbyImage image={renderedImage} className="header-image" alt={imageInfo} title={imageInfo}/>
		</div>
	)
})

export default Header