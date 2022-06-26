import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const AllSeriesPage = ({ data }) => {
	
  return (
	<Layout pageTitle="All Series">
		<Header/>
		<div className="container">
			<div className="row">
				<Content>
				{
					data.allMarkdownRemark.distinct.map(series => (
						<li>
							<Link to={`/series/${kebabCase(series)}`}>{series}</Link>
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
query MyQuery {
	allMarkdownRemark {
		distinct(field: frontmatter___series)
	}
}
`

export default AllSeriesPage

// # TODO: Add count as well. Example: Royalty (10)
// # TODO: Add seperate page for each tag and display titles there instead of everything in one place