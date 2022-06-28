import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {randomHeader} from '../styles/styles.css'

function getRandomImage(data) {
	var allImages = data.allMarkdownRemark.nodes
	var totalImages = allImages.length;
	var randomImageIndex = Math.floor(Math.random() * totalImages);
	var randomImage = allImages[randomImageIndex];
	return randomImage;
}

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

	var selectedImage = getRandomImage(data);
	var renderedImage = getImage(selectedImage.frontmatter.cover_image);
	var imageInfo = selectedImage.frontmatter.name + "\n" + selectedImage.frontmatter.contributor + " on Unsplash";

	return (
		<div>
			<GatsbyImage image={renderedImage} className="randomHeader" alt={imageInfo} title={imageInfo}/>
		</div>
	)
}

export default Header