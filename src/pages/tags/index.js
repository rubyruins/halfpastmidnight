import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import Layout from '../../components/layout'
import Content from '../../components/middle/content'
import Sidebar from '../../components/right/sidebar'
import Header from '../../components/top/header'

const AllTagsPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Tags">
		<Header/>
		<div className="container layout-container">
			<div className="row">
				<Content>
					<div className="review-card">
					<h1>All Tags</h1>
					<hr className="my-4"/>
					{
						data.allMarkdownRemark.group.map(node => (
						<h4>
						<article key={node.id}>
							<Link to={`/tags/${kebabCase(node.tag)}`}>{node.tag} ({node.totalCount})</Link>
						</article>
						</h4>
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
	) {
		group(field: {frontmatter: {tags: SELECT}}) {
		tag: fieldValue
		totalCount
	  	}
	}
}
`

export default AllTagsPage