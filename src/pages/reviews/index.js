import * as React from 'react'
import { graphql } from 'gatsby'
import PostListing from '../../components/middle/postlisting'
import Layout from '../../components/layout'
import Content from '../../components/middle/content'
import Sidebar from '../../components/side/sidebar'
import Header from '../../components/top/header'
import SortButton from '../../components/middle/sortbutton'

const AllReviewsPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div className="layout">
			<div className="row">
				<Content>
					<SortButton/>
					<div className="sort-container">
					{
						data.allMarkdownRemark.nodes.map(node => (
						<PostListing node={node} />
						))
					}
					</div>
				</Content>
				<Sidebar/>
			</div>
		</div>
	</Layout>
  )
}

export const query = graphql`
query {
	allMarkdownRemark (
		filter: {fields: {collection: {eq: "reviews"}}}
		sort: {fields: frontmatter___title, order: ASC}
	) {
		nodes {
			frontmatter {
				title
				date
				series
				part
				author
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
			id
		}
	}
}
`  

export default AllReviewsPage