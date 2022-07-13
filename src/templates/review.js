import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import ContentWide from '../components/middle/contentwide'
import RightSidebar from '../components/right/rightsidebar'
import TagGroup from "../components/middle/taggroup"
import SuggestedReads from "../components/right/suggestedreadslist"
import CoverImage from "../components/right/coverimage"

function renderSeries(frontmatter) {

	if (frontmatter.part) {
		return (
			<p>{frontmatter.series} part {frontmatter.part}</p>
		)
	}
}

export default function Template({data}) {

	const { frontmatter, html, timeToRead } = data.bookData 

	return (
	<Layout pageTitle={frontmatter.title}>
		<div className="container layout-container">
			<div className="row">
				<ContentWide>
					<div className="content-card">
						<h1>{frontmatter.title}</h1>
						<h2>{frontmatter.date}</h2>
						<p className="blurb">{frontmatter.blurb}</p>
						<a href={frontmatter.goodreads}>Goodreads</a>
						<h3>{timeToRead} minute read</h3>
						<TagGroup tags={frontmatter.tags}/>
						<div
							className="blog-post-content"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
						{renderSeries(frontmatter)}
					</div>
				</ContentWide>
				<RightSidebar>
					<CoverImage frontmatter={frontmatter}/>
					<SuggestedReads otherBooksInSeriesByAuthor={data.otherBooksInSeriesByAuthor.edges} bookTitle={frontmatter.title} bookCover={frontmatter.cover_image}></SuggestedReads>
				</RightSidebar>
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
			blurb
			goodreads
			cover_image {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
		fields {
			articleTitle
		}
	}
	otherBooksInSeriesByAuthor: allMarkdownRemark(
		filter: {
			frontmatter: {
				series: {
					eq: $series
				}
				author: {
					eq: $author
				}
				title: { 
					ne: $title 
				}
			}
		}
	) {
		edges {
			node {
				frontmatter {
					title
					author
					series
					part
					cover_image {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				fields {
					articleTitle
				}
			}
		}
	}
}
`
