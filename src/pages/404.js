import * as React from "react"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const NotFoundPage = () => {
	return (
		<Layout pageTitle="Not Found">
			<div className="container layout-container">
				<div className="row">
					<Header/>
					<Content>
					<div className="review-card">
						<h1>There isn't a page here.</h1>
						<hr className="my-4"/>
						<p className="review-content">Are you sure you've got the right address? Looks like you're lost in the void. Try heading back <a href="/">home! 🏰</a></p>
						</div>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default NotFoundPage
