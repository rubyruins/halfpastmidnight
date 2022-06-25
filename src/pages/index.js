import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Featured from '../components/featured'

const IndexPage = () => {
	return (
		<Layout pageTitle="Home">
			<Header/>
			<div class="container">
				<div class="row">
					<Content>
						<h1>Hi people</h1>
						<p>Welcome to your new Gatsby blog with Markdown pages.</p>
						<Featured/>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage