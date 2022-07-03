import React from "react"
import { graphql } from "gatsby"
import PostListing from "../components/middle/postlisting"
import Layout from '../components/layout'
import Header from '../components/top/header'
import Content from '../components/middle/content'
import Sidebar from '../components/side/sidebar'
import SortButton from "../components/middle/sortbutton"

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
					<SortButton/>
					<h1>{tagHeader}</h1>
					<div className="sort-container">
					{
						edges.map(node => (
						<PostListing node={node.node} />
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

export default Tags

export const pageQuery = graphql`
	query($tag: String) {
	allMarkdownRemark(
		limit: 2000
		filter: { frontmatter: { tags: { in: [$tag] } } }
		sort: {fields: frontmatter___title, order: ASC}
	) {
		totalCount
		edges {
			node {
				frontmatter {
					title
					date
					series
					part
					author
					date
				}
			}
		}
	}
}
`
