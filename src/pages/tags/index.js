import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

function renderLink(node, tag) {
	if (node.node.frontmatter.tags.includes(tag)) {
		return (
			// <p>{node.node.slug}</p>
			// <p>{node.node.frontmatter.title}</p>
			<Link to={`/reviews/${node.node.slug}`}>{node.node.frontmatter.title}</Link>
		)
	}
}

const AllTagsPage = ({ data }) => {
	
	// console.log(data.allMdx.distinct.map(tag => tag))
	// // console.log(data.allMdx.edges.map(node => node.node.frontmatter.tags))
	// data.allMdx.edges.forEach(function (item, index) {
	// 	if (item.node.frontmatter.tags.includes("value4"))
	// 		console.log(item.node.slug);
	// });

  return (
	<Layout pageTitle="All Tags">
		<Header/>
		<div class="container">
			<div class="row">
				<Content>
					{
						data.allMdx.distinct.map(tag => (
							<div>
								<p>{tag}</p>
								{
									data.allMdx.edges.map(node => (
										<p>{renderLink(node, tag)}</p>
									))
								}
							</div>
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
		allMdx(sort: {order: ASC, fields: frontmatter___tags}) {
			distinct(field: frontmatter___tags)
			edges {
				node {
					slug
					frontmatter {
						tags
						title
					}	
				}
			}
		}
	} 
`

export default AllTagsPage