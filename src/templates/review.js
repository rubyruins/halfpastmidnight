import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Template({data}) {

  const { markdownRemark } = data 
  const { frontmatter, html, timeToRead } = markdownRemark
  const image = getImage(frontmatter.cover_image)

  return (
	<Layout pageTitle={frontmatter.title}>
		<div className="container">
			<div className="row">
				<Content>
					<GatsbyImage image={image}/>
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<h3>{timeToRead} minute read</h3>
					{
					frontmatter.tags.map(tag => (
						<li>
							<Link to={`/tags/${tag}`}>{tag}</Link>
						</li>
						))
					}
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Content>
				<Sidebar/>
			</div>
		</div>
	</Layout>
  )
}

export const pageQuery = graphql`
query($slug: String!) {
	markdownRemark(frontmatter: { slug: { eq: $slug } }) {
		html
		timeToRead
		frontmatter {
			date(formatString: "MMMM DD, YYYY")
			slug
			tags
			title
			cover_image {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	}
}
`
