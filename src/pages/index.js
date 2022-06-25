import * as React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Featured from '../components/featured'

const IndexPage = ({data}) => {
	console.log(data)
	return (
		<Layout pageTitle="Home">
			<Header/>
			<div className="container">
				<div className="row">
					<Content>
						<h1>Hi people</h1>
						<p>Welcome to your new Gatsby blog with Markdown pages.</p>
						{
							data.allMarkdownRemark.nodes.map(node => (
							<Featured title={node.frontmatter.title} date={node.frontmatter.date} slug={node.frontmatter.slug} excerpt={node.excerpt} image={getImage(node.frontmatter.cover_image)}/>
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
	allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
		nodes {
			frontmatter {
				slug
				title
				date
				tags
				cover_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
			excerpt(format: PLAIN, pruneLength: 100, truncate: false)
		}
	}
}
`

export default IndexPage