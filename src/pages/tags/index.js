import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import Layout from '../../components/layout'
import Content from '../../components/middle/content'
import Sidebar from '../../components/side/sidebar'
import Header from '../../components/top/header'

const AllTagsPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Tags">
		<Header/>
		<div className="layout">
			<div className="row">
				<Content>
				{
					data.allMarkdownRemark.group.map(node => (
					<article key={node.id}>
						<Link to={`/tags/${kebabCase(node.tag)}`}>{node.tag} ({node.totalCount})</Link>
					</article>
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