import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggler = () => {
	let websiteTheme;
	if (typeof window !== `undefined`) {
		websiteTheme = window.__theme;
	}
	useEffect(() => {
		setTheme(window.__theme);
		console.log("Theme: " + window.__theme);
	}, []);

	const [theme, setTheme] = useState(websiteTheme);

	const ThemeToggle = () => {
		window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button className="btn nav-item ml-auto theme-toggler" onClick={ThemeToggle} onKeyDown={ThemeToggle}>
			{theme === 'dark' ? (
				<FontAwesomeIcon icon={faSun} size="2x" className="nav-link align-middle"/>
			) : (
				<FontAwesomeIcon icon={faMoon} size="2x" className="nav-link align-middle"/>
			)}
		</button>
	);
};

export default ThemeToggler;

// TODO: Deployed toggle does not change icon properly on start
// TODO: Center it vertically
// TODO: Decide if it is shown in mobile if navbar is aligned in the center