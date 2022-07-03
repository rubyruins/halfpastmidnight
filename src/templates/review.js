import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/side/sidebar'
import TagGroup from "../components/side/taggroup"
import SuggestedReads from "../components/side/suggestedreads"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function renderSeries(frontmatter) {

	if (frontmatter.part) {
		return (
			<p>{frontmatter.series} part {frontmatter.part}</p>
		)
	}
}

export default function Template({data}) {

	const { frontmatter, html, timeToRead } = data.bookData 
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
					<SuggestedReads booksInSeries={data.booksInSeries.edges} booksByAuthor={data.booksByAuthor.edges} bookTitle={frontmatter.title}></SuggestedReads>
				</Sidebar>
			</div>
		</div>
	</Layout>
  )
}

export const pageQuery = graphql`
query($title: String!, $author: String!, $series: String!) {
	bookData: markdownRemark(
		frontmatter: { title: { eq: $title } }
	) {
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
	booksInSeries: allMarkdownRemark(
		filter: {
			frontmatter: {
				series: {
					eq: $series
				}
			}
		}
	) {
		edges {
			node {
				frontmatter {
					title
					series
					part
				}
			}
		}
	}
	booksByAuthor: allMarkdownRemark(
		filter: {
			frontmatter: {
				author: {
					eq: $author
				}
			}
		}
	) {
		edges {
			node {
				frontmatter {
					title
					series
					part
				}
			}
		}
	}
}
`
