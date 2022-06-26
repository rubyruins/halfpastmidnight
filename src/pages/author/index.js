import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const AllAuthorsPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Authors">
		<Header/>
		<div className="container">
			<div className="row">
				<Content>
				{
					data.allMarkdownRemark.distinct.map(author => (
						<li>
							<Link to={`/author/${kebabCase(author)}`}>{author}</Link>
						</li>
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
		distinct(field: frontmatter___author)
	}
}
`

export default AllAuthorsPage

// # TODO: Add count as well. Example: Royalty (10)
// # TODO: Add seperate page for each tag and display titles there instead of everything in one place