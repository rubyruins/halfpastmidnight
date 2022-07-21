import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'
import PostColumn from '../components/middle/postcolumn'
import SortButton from '../components/middle/sortbutton'
import About from '../components/right/about'

const IndexPage = ({data}) => {

	return (
		<Layout pageTitle="Home">
			<Header/>
			<div className="container layout-container">
				<div className="row">
					<Content>
						<About className="about-card-visible-small"/>
						<SortButton className="home-page-all-buttons-group"/>
						<div className="sort-container row">
						{
							data.allMarkdownRemark.nodes.map(node => (
							<PostColumn node={node} />
							))
						}
						</div>
					</Content>
					<Sidebar>
					<About className="about-card-visible-large"/>
					</Sidebar>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
query {
	allMarkdownRemark(
		sort: {fields: frontmatter___date, order: DESC}, limit:20
		filter: {fields: {collection: {eq: "reviews"}}}
		) {
		nodes {
			timeToRead
			frontmatter {
				title
				author
				series
				part
				date
				tags
				rating
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
			excerpt(format: PLAIN, pruneLength: 100, truncate: false)
		}
	}
}
`

export default IndexPage