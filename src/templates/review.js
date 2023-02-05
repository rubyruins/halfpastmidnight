import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import TagGroup from "../components/middle/taggroup"
import SuggestedReadsList from "../components/right/suggestedreadslist"
import CoverImage from "../components/right/coverimage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function formatDate(date) {
	date = new Date(date).toDateString().split(' ').slice(1).join(' ');
	date = date.split(' ');
	date[1] = date[1] + ',';
	date = date.join(' ');
	return date;
}

function renderSeriesInfo(frontmatter) {

	if (frontmatter.part) {
		return (
			<h3>{frontmatter.author} — {frontmatter.series}, #{frontmatter.part}</h3>
		)
	}
	return (
		<h3>{frontmatter.author}</h3>
	)
}

export default function Template({data}) {

	const { frontmatter, fields, html } = data.bookData 


	return (
	<Layout pageTitle={frontmatter.title}>
		<div className="container layout-container">
			<div className="row">
				<Content>
					<CoverImage frontmatter={frontmatter} className="review-img-visible-small"/>
					<div className="review-card">
						{/* <p className="review-author pb-0">{frontmatter.author}</p> */}
						<h1>{frontmatter.title}</h1>
						{renderSeriesInfo(frontmatter)}
						{/* {timeToRead} minute read */}
						<span className="review-publish-info mt-0">
							<FontAwesomeIcon icon={faBookmark} size="1x" className="pe-2 review-icon"/>
							<TagGroup tags={frontmatter.tags}/>
							<br/>
							<p className="mb-2"></p>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2 review-icon"/>
							{formatDate(frontmatter.date)}
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2 ps-2 review-icon"/>
							{fields.roundRating}
						</span>
						{/* <a href={frontmatter.goodreads}>Goodreads</a> */}
						<hr className="my-4"/>
						{/* <div className="my-4 divider"></div> */}
						<div className="review-content" dangerouslySetInnerHTML={{ __html: html }} />
					</div>
				</Content>
				<Sidebar>
					<CoverImage frontmatter={frontmatter} className="review-img-visible-large"/>
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
			roundRating
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
