import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {randomHeader} from '../styles/styles.css'

const Header = () => {

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

	var allImages = data.allMarkdownRemark.nodes
	var totalImages = allImages.length;
	var randomImageIndex = Math.floor(Math.random() * totalImages);
	var randomImage = allImages[randomImageIndex].frontmatter.cover_image;
	console.log(randomImage);
	const renderedImage = getImage(randomImage);

	return (
		<div>
			<GatsbyImage image={renderedImage} className="randomHeader"/>
		</div>
	)
}

export default Header