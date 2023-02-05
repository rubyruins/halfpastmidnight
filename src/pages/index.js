import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'
import About from '../components/right/about'
import IsotopeGrid from '../components/middle/isotopegrid'

const IndexPage = ({data}) => {

	return (
		<Layout pageTitle="Home">
			<div className="container layout-container">
				<div className="row">
					<Header/>
					<Content className='index-content'>
						<About className="about-card-visible-small"/>
						<IsotopeGrid nodes={data.allMarkdownRemark.nodes} prefSortKey='date' prefSortOrder={false} prefLayout='column' prefHideButtons={true}/>
					</Content>
					<Sidebar>
					<About className="about-card-visible-large"/>
					</Sidebar>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
query {
	allMarkdownRemark(
		sort: {frontmatter: {date: DESC}},
		limit: 20
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
				rating
				cover_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
			id
			fields {
				articleTitle
				roundRating
			}
			excerpt(format: PLAIN, pruneLength: 100, truncate: false)
		}
	}
}
`

export default IndexPage