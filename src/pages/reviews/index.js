import * as React from 'react'
import { Link, graphql } from 'gatsby'
import PostListing from '../../components/postlisting'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const AllReviewsPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div className="container">
			<div className="row">
				<Content>
				{
					data.allMarkdownRemark.nodes.map(node => (
					<PostListing node={node} />
					))
				}
				</Content>
				<Sidebar/>
			</div>
		</div>
	</Layout>
  )
}

export const query = graphql`
query {
	allMarkdownRemark {
		nodes {
			frontmatter {
				title
				date
				series
				part
				author
			}
			id
		}
	}
}
`  

export default AllReviewsPage