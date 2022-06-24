import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'

const BlogPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div class="container">
				<div class="row">
					<Content>
						<p>Posted: {data.mdx.frontmatter.date}</p>
						<GatsbyImage
							image={image}
							alt={data.mdx.frontmatter.hero_image_alt}
						/>
						<MDXRenderer>
							{data.mdx.body}
						</MDXRenderer>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($id: String) {
		mdx(id: {eq: $id}) {
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				hero_image_alt
				hero_image_credit_link
				hero_image_credit_text
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`

export default BlogPost