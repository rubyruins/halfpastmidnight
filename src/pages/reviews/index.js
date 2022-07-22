import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Content from '../../components/middle/content'
import Sidebar from '../../components/right/sidebar'
import Header from '../../components/top/header'
import IsotopeGrid from '../../components/middle/isotopegrid'

const AllReviewsPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div className="container layout-container">
			<div className="row">
				<Content>
					<IsotopeGrid nodes={data.allMarkdownRemark.nodes} prefSortOrder={true}/>
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
				roundRating
			}
			id
			excerpt(format: PLAIN, pruneLength: 100, truncate: false)
		}
	}
}
`  

export default AllReviewsPage