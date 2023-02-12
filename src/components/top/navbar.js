import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import ThemeToggler from "./themetoggler";

config.autoAddCss = false

const Navbar = () => {

	let websiteTheme;
	const [theme, setTheme] = useState(websiteTheme);

	if (typeof window !== `undefined`) {
		websiteTheme = window.__theme;
	}
	useEffect(() => {
		setTheme(window.__theme);
	}, []);

	const themeToggle = () => {
		window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
	};

	const renderLogo = () => {
		if (theme === 'light' ) {
			return <StaticImage src='../../images/light.png' width="50" height="50" className="d-inline-block align-top navbar-brand-img" alt="" />
		} else {
			return <StaticImage src='../../images/dark.png' width="50" height="50" className="d-inline-block align-top navbar-brand-img" alt="" />
		}
	}
	
	return (
		<nav className="navbar navbar-expand-md">
			<div className='container-md'>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" name="Toggle navigation">
					<FontAwesomeIcon icon={faBars} size="1x" className="navbar-toggler-icon-custom"></FontAwesomeIcon>
				</button>
				<a className="navbar-brand me-auto" href="/">
					{renderLogo()}
					<div height="50" className='d-inline-block navbar-brand-text py-2'>
						<strong className="ps-3 my-auto" >Half Past Midnight</strong>
					</div>
				</a>
				{/* <a className="d-inline-block navbar-brand me-auto" href="/">
					<strong className="my-auto" >Half Past Midnight</strong>
				</a> */}
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
						<ThemeToggler theme={theme} themeToggle={themeToggle}/>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar