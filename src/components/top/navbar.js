import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from './themetoggler'

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-md">
			<div className='container-md'>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" name="Toggle navigation">
					<FontAwesomeIcon icon={faBars} size="1x" className="navbar-toggler-icon-custom"></FontAwesomeIcon>
				</button>
				<Link className="navbar-brand me-auto" to="/">
					<span role="img" aria-label="home">
						<strong>Half Past Midnight.</strong>
					</span>
				</Link>
				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ms-auto ms-1 me-1">
						<li className="nav-item">
							<Link to="/about" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/reviews" className="nav-link">Reviews</Link>
						</li>
						<li className="nav-item">
							<Link to="/tags" className="nav-link">Tags</Link>
						</li>
					</ul>
				</div>
				<ul className="navbar-nav ms-auto">
					<li className='nav-item'>
						<ThemeToggler/>
					</li>
				</ul>
			</div>
			<hr/>
		</nav>
	)
}

export default Navbar