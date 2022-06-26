import * as React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
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
					<article key={node.id}>
						<h2>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
							{node.frontmatter.title}
						</Link>
						</h2>
						<p>Posted: {node.frontmatter.date}</p>
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
		nodes {
			frontmatter {
				title
				date
			}
			id
		}
	}
}
`  

export default AllReviewsPage