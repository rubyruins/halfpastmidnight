import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/side/sidebar'
import Header from '../components/top/header'
import PostListing from '../components/middle/postlisting'
import SortButton from '../components/middle/sortbutton'
import About from '../components/side/about'

const IndexPage = ({data}) => {

	return (
		<Layout pageTitle="Home">
			<Header/>
			<div className="container layout-container">
				<div className="row">
					<Content>
						<SortButton/>
						<div className="sort-container row">
						{
							data.allMarkdownRemark.nodes.map(node => (
							<PostListing node={node} />
							))
						}
						</div>
					</Content>
					<Sidebar>
						<About/>
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
			}
			excerpt(format: PLAIN, pruneLength: 150, truncate: false)
		}
	}
}
`

export default IndexPage