import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from './themetoggler'

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				<span role="img" aria-label="home">
					<strong>Half Past Midnight</strong>
				</span>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
				<FontAwesomeIcon icon={faBars} size="1x" className="navbar-toggler-icon-custom"></FontAwesomeIcon>
			</button>
			<div className="collapse navbar-collapse" id="navbarContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/about" className="nav-link">About</Link>
					</li>
					<li className="nav-item">
						<Link to="/reviews" className="nav-link">Reviews</Link>
					</li>
					<li className="nav-item">
						<Link to="/tags" className="nav-link">Tags</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link">Contact</Link>
					</li>
				</ul>
			</div>
			<ThemeToggler/>
		</nav>
	)
}

export default Navbar