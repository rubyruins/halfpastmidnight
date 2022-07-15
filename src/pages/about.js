import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<Header/>
				<div className="container layout-container">
					<div className="row">
						<Content>
							<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
						</Content>
						<Sidebar/>
					</div>
				</div>
		</Layout>
	)
}

export default AboutPage