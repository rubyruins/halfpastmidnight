import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import TagGroup from "../components/taggroup"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function renderSeries(frontmatter) {

	if (frontmatter.part) {
		return (
			<p>{frontmatter.series} part {frontmatter.part}</p>
		)
	}
}

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
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
					{renderSeries(frontmatter)}
				</Content>
				<Sidebar>
					<TagGroup tags={frontmatter.tags}/>
				</Sidebar>
			</div>
		</div>
	</Layout>
  )
}

export const pageQuery = graphql`
query($title: String!) {
	markdownRemark(frontmatter: { title: { eq: $title } }) {
		html
		timeToRead
		frontmatter {
			date(formatString: "MMMM DD, YYYY")
			tags
			series
			part
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
