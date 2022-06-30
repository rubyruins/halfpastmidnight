import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {
	navLinks,
	navLinkItem,
	navLinkText,
} from '../styles/layout.module.css'

const Toggler = () => {
	let websiteTheme;
	if (typeof window !== `undefined`) {
		websiteTheme = window.__theme;
	}
	useEffect(() => {
		setTheme(window.__theme);
		console.log(window.__theme)
	}, []);

	const [theme, setTheme] = useState(websiteTheme);

	const ThemeToggle = () => {
		window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<li className={`button ${navLinkItem} nav-item`} onClick={ThemeToggle}>
			{theme === 'dark' ? (
				<FontAwesomeIcon icon={faSun} size="1x" className={`${navLinkText} nav-link`}/>
			) : (
				<FontAwesomeIcon icon={faMoon} size="1x" className={`${navLinkText} nav-link`}/>
			)}
		</li>
	);
};

export default Toggler;

// TODO: Deployed toggle does not change icon properly on start
// TODO: Add keyboard listener
// TODO: Center it vertically
// TODO: Decide if it is shown in mobile if navbar is aligned in the center