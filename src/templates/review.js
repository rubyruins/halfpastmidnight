import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import TagGroup from "../components/taggroup"
import Recommendations from "../components/recommendations"
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
					<Recommendations seriesBooks={data.seriesBooks.edges} authorBooks={data.authorBooks.edges} bookTitle={frontmatter.title}></Recommendations>
				</Sidebar>
			</div>
		</div>
	</Layout>
  )
}

// Find intersection of all books by the author and in the series
// For series, this returns books in other series
// For standalones, this returns other standalones
// Filter out the book in the post from this list

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
	seriesBooks: allMarkdownRemark(
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
	authorBooks: allMarkdownRemark(
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
