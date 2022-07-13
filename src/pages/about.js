import * as React from 'react'
import Layout from '../components/layout'
import ContentWide from '../components/middle/contentwide'
import RightSidebar from '../components/right/rightsidebar'
import Header from '../components/top/header'

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<Header/>
				<div className="container layout-container">
					<div className="row">
						<ContentWide>
							<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
						</ContentWide>
						<RightSidebar/>
					</div>
				</div>
		</Layout>
	)
}

export default AboutPage