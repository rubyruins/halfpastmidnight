import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from '../components/top/navbar'
import Footer from '../components/bottom/footer'
import Head from './top/head'

const Layout = ({pageTitle, children}) => {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					siteUrl
				}
			}
		}
	`)

	return (
		<>
			<Head data={data} pageTitle={pageTitle}/>
			<main>
				<Navbar/>
				{children}
				<Footer title={data.site.siteMetadata.title}/>
			</main>
		</>
	)
}


export default Layout