import * as React from 'react'
import { graphql } from 'gatsby'
import PostListing from '../../components/middle/postlisting'
import Layout from '../../components/layout'
import ContentWide from '../../components/middle/contentwide'
import RightSidebar from '../../components/right/rightsidebar'
import Header from '../../components/top/header'
import SortButton from '../../components/middle/sortbutton'

const AllReviewsPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div className="container layout-container">
			<div className="row">
				<ContentWide>
					<SortButton/>
					<div className="sort-container">
					{
						data.allMarkdownRemark.nodes.map(node => (
						<PostListing node={node} />
						))
					}
					</div>
				</ContentWide>
				<RightSidebar/>
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
				author
				series
				part
				date
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
			excerpt(format: PLAIN, pruneLength: 100, truncate: false)
		}
	}
}
`  

export default AllReviewsPage