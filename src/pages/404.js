import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const NotFoundPage = () => {
	return (
		<Layout pageTitle="Not Found">
			<Header/>
			<div className="container layout-container">
				<div className="row">
					<Content>
						<h1 className="my-4">There isn't a page here.</h1>
						<h2 className="my-4">Are you sure you've got the right address?</h2>
						<h3 className="my-4">Looks like you're lost in the void. Try heading back <Link to="/">home! 🏰</Link></h3>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default NotFoundPage
