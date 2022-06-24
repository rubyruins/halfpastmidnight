import * as React from 'react'
import { Link } from 'gatsby'
import {
	navLinks,
	navLinkItem,
	navLinkText,
} from '../styles/layout.module.css'

const Navbar = () => {


	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="/">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className={`${navLinks} navbar-nav ms-auto mb-2 mb-lg-0`}>
								<li className={`${navLinkItem} nav-item`}>
									<Link to="/about" className={`${navLinkText} nav-link`}>About</Link>
									{/* <a className="nav-link" href="/about">About</a> */}
								</li>
								<li className={`${navLinkItem} nav-item`}>
									{/* <a className="nav-link" href="/blog">Blog</a> */}
									<Link to="/reviews" className={`${navLinkText} nav-link`}>Reviews</Link>
								</li>
						</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar