import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Sidebar from '../components/sidebar'

const Author = ({ pageContext, data }) => {
  const { author } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
	totalCount === 1 ? "" : "s"
  } tagged with "${author}"`

  return (
	<Layout pageTitle={`${author}`}>
		<Header/>
		<div className="container">
			<div className="row">
				<Content>
					<h1>{tagHeader}</h1>
					<ul>
						{
							edges.map(node  => 
							<li>
							<Link to={`/reviews/${kebabCase(node.node.frontmatter.title)}`}>{node.node.frontmatter.title}</Link>
							</li>
							)
						}
					</ul>
				</Content>
				<Sidebar/>
			</div>
		</div>
	</Layout>
  )
}

export default Author

export const pageQuery = graphql`
	query($author: String) {
	allMarkdownRemark(
		limit: 2000
		filter: { frontmatter: { author: { eq: $author } } }
	) {
		totalCount
		edges {
			node {
				frontmatter {
					title
				}
			}
		}
	}
}
`
