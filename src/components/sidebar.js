import * as React from 'react'
import SearchBar from './searchbar'


const Sidebar = () => {

	return (
		<div className="col-lg-4">
			<SearchBar/>
			<div className="card mb-4">
				<div className="card-header">Categories</div>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-6">
							<ul className="list-unstyled mb-0">
								<li><a href="#!">Web Design</a></li>
								<li><a href="#!">HTML</a></li>
								<li><a href="#!">Freebies</a></li>
							</ul>
						</div>
						<div className="col-sm-6">
							<ul className="list-unstyled mb-0">
								<li><a href="#!">JavaScript</a></li>
								<li><a href="#!">CSS</a></li>
								<li><a href="#!">Tutorials</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-4">
				<div className="card-header">Side Widget</div>
				<div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
			</div>
		</div>
	)
}

export default Sidebar