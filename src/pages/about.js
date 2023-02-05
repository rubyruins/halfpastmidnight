import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<div className="container layout-container">
				<div className="row">
					<Header/>
					<Content>
						<div className="review-card">
							<h1>Hi there!</h1>
							<hr className="my-4"/>
							<p>I'm the proud creator of this site, which I built with Gatsby.</p>
						</div>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage