import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Sidebar from '../components/sidebar'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
	totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
	<Layout pageTitle={`${tag}`}>
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

export default Tags

export const pageQuery = graphql`
	query($tag: String) {
	allMarkdownRemark(
		limit: 2000
		filter: { frontmatter: { tags: { in: [$tag] } } }
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
