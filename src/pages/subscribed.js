import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const SubscribedPage = () => {
	return (
		<Layout pageTitle="Subscription Successful">
			<Header/>
			<div className="container layout-container">
				<div className="row">
					<Content>
						<div className="review-card">
							<h1>Subscription Successful!</h1>
							<hr className="my-4"/>
							<p>Thanks for subscribing to our newsletter. We're thrilled to have you on board. Get ready to discover new worlds and captivating stories. You'll be updated whenever a new review is published on Half Past Midnight!</p>
						</div>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default SubscribedPage