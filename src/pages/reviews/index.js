import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

const BlogPage = ({ data }) => {
  return (
	<Layout pageTitle="All Reviews">
		<Header/>
		<div class="container">
			<div class="row">
				<Content>
				{
					data.allMdx.nodes.map(node => (
					<article key={node.id}>
						<h2>
						<Link to={`/reviews/${node.slug}`}>
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
	allMdx(sort: {fields: frontmatter___date, order: DESC}) {
	  nodes {
		frontmatter {
		  date(formatString: "MMMM D, YYYY")
		  title
		}
		id
		slug
	  }
	}
  }
`

export default BlogPage