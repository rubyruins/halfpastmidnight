import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/side/sidebar'
import Header from '../components/top/header'
import FeaturedPost from '../components/middle/featuredpost'

const IndexPage = ({data}) => {
	return (
		<Layout pageTitle="Home">
			<Header/>
			<div className="container">
				<div className="row">
					<Content>
						<h1 className='heading'>Hi people</h1>
						<p>Welcome to your new Gatsby blog with Markdown pages.</p>
						{
							data.allMarkdownRemark.nodes.map(node => (
							<FeaturedPost node={node} />
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
	allMarkdownRemark(
		sort: {fields: frontmatter___date, order: DESC}, limit: 5
		filter: {fields: {collection: {eq: "reviews"}}}
		) {
		nodes {
			timeToRead
			frontmatter {
				title
				author
				series
				part
				date
				tags
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
`

export default IndexPage