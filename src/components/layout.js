import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Head from './head'

const Layout = ({pageTitle, children}) => {

	return (
		<html lang='en'>
			<Head pageTitle={pageTitle}/>
			<body>
				<Navbar/>
				{children}
				<Footer/>
			</body>
		</html>
	)
}


export default Layout