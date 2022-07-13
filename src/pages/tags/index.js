import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import Layout from '../../components/layout'
import ContentWide from '../../components/middle/contentwide'
import RightSidebar from '../../components/right/rightsidebar'
import Header from '../../components/top/header'

const AllTagsPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Tags">
		<Header/>
		<div className="container layout-container">
			<div className="row">
				<ContentWide>
				{
					data.allMarkdownRemark.group.map(node => (
					<article key={node.id}>
						<Link to={`/tags/${kebabCase(node.tag)}`}>{node.tag} ({node.totalCount})</Link>
					</article>
					))
				}
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
	) {
	  group(field: frontmatter___tags) {
		tag: fieldValue
		totalCount
	  	}
	}
}
`

export default AllTagsPage