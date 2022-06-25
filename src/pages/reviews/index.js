import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const AllReviewsPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div class="container">
			<div class="row">
				<Content>
				{
					data.allMarkdownRemark.nodes.map(node => (
					<article key={node.id}>
						<h2>
						<Link to={node.frontmatter.slug}>
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
				slug
				title
				date
			}
			id
		}
	}
}
`  

export default AllReviewsPage