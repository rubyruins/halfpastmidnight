import * as React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from '../components/top/navbar'
import Footer from '../components/bottom/footer'

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
		<Helmet>
			<title>{data.site.siteMetadata.title} | {pageTitle}</title>
			<link rel="canonical" href={data.site.siteMetadata.siteUrl} />
			<meta charSet="utf-8" />
			<meta name="description" content={data.site.siteMetadata.siteUrl} />
			<meta name="author" content={data.site.siteMetadata.author} />
			{/* <link rel="icon" type="image/x-icon" href="assets/favicon.ico" /> */}
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
        </Helmet>
		<main>
			<Navbar/>
			{children}
			<Footer title={data.site.siteMetadata.title}/>
		</main>
	</>
	)
}


export default Layout