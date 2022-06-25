import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const AllTagsPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Tags">
		<Header/>
		<div class="container">
			<div class="row">
				<Content>
				{
					data.allMarkdownRemark.group.map(node => (
					<article key={node.id}>
						<Link to={`/tags/${node.tag}`}>Posted: {node.tag} ({node.totalCount})</Link>
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
	allMarkdownRemark {
	  group(field: frontmatter___tags) {
		tag: fieldValue
		totalCount
	  	}
	}
}
`

export default AllTagsPage

// # TODO: Add count as well. Example: Royalty (10)
// # TODO: Add seperate page for each tag and display titles there instead of everything in one place