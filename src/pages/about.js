import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import Header from '../components/header'

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<Header/>
				<div class="container">
					<div class="row">
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