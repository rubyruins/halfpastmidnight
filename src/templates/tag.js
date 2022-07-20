import React from "react"
import { graphql } from "gatsby"
import PostListing from "../components/middle/postlisting"
import Layout from '../components/layout'
import Header from '../components/top/header'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import SortButton from "../components/middle/sortbutton"

function makeHeader(totalCount, tag) {
	return (
		<>
			<h3 className="pb-3">
				{`${totalCount} post${totalCount === 1 ? "" : "s" } tagged `}
				<strong>{`${tag}`}</strong>
			</h3>
		</>
	)
}

const Tags = ({ pageContext, data }) => {

	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark

  return (
	<Layout pageTitle={`${tag}`}>
		<Header/>
		<div className="container layout-container">
			<div className="row">
				<Content>
					{makeHeader(totalCount, tag)}
					<SortButton/>
					<div className="sort-container row">
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
					rating
					cover_image {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				fields {
					articleTitle
				}
				excerpt(format: PLAIN, pruneLength: 100, truncate: false)
			}
		}
	}
}
`
