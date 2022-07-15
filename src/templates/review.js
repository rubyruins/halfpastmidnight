import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import TagGroup from "../components/middle/taggroup"
import SuggestedReads from "../components/right/suggestedreadslist"
import CoverImage from "../components/right/coverimage"

function renderSeriesInfo(frontmatter) {

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
				<Content>
					<div className="review-card">
						<p>{frontmatter.date} • {timeToRead} minute read</p>
						<h1>{frontmatter.title}</h1>
						<p className="review-author pb-0">{frontmatter.author}</p>
						<a href={frontmatter.goodreads}>Goodreads</a>
						{renderSeriesInfo(frontmatter)}
						<TagGroup tags={frontmatter.tags}/>
						<hr className="my-3"/>
						<div dangerouslySetInnerHTML={{ __html: html }} />
					</div>
				</Content>
				<Sidebar>
					<CoverImage frontmatter={frontmatter}/>
					<SuggestedReads otherBooksInSeriesByAuthor={data.otherBooksInSeriesByAuthor.edges} bookTitle={frontmatter.title} bookCover={frontmatter.cover_image}></SuggestedReads>
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
			author
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
