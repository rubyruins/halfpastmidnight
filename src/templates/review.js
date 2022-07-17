import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import TagGroup from "../components/middle/taggroup"
import SuggestedReadsList from "../components/right/suggestedreadslist"
import CoverImage from "../components/right/coverimage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faTag } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function renderSeriesInfo(frontmatter) {

	if (frontmatter.part) {
		return (
			<h3>{frontmatter.series}, #{frontmatter.part}</h3>
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
						<p className="review-author pb-0">{frontmatter.author}</p>
						<h1>{frontmatter.title}</h1>
						{renderSeriesInfo(frontmatter)}
						{/* {timeToRead} minute read */}
						<p>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2 review-icon"/>
							Published {frontmatter.date}
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2 ps-2 review-icon"/>
							{frontmatter.rating}
							<br/>
							<FontAwesomeIcon icon={faTag} size="1x" className="pe-2 review-icon"/>
							<TagGroup tags={frontmatter.tags}/>
						</p>
						{/* <a href={frontmatter.goodreads}>Goodreads</a> */}
						<hr className="my-4"/>
						<div className="review-content" dangerouslySetInnerHTML={{ __html: html }} />
					</div>
				</Content>
				<Sidebar>
					<CoverImage frontmatter={frontmatter}/>
					<SuggestedReadsList otherBooksInSeriesByAuthor={data.otherBooksInSeriesByAuthor.edges} bookCover={frontmatter.cover_image}></SuggestedReadsList>
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
			rating
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
