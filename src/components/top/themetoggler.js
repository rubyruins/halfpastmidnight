import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false

const ThemeToggler = () => {
	let websiteTheme;
	if (typeof window !== `undefined`) {
		websiteTheme = window.__theme;
	}
	useEffect(() => {
		setTheme(window.__theme);
	}, []);

	const [theme, setTheme] = useState(websiteTheme);

	const ThemeToggle = () => {
		window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button className="btn nav-item ml-auto theme-toggler ps-1 pe-1" onClick={ThemeToggle} onKeyDown={ThemeToggle} aria-label="Toggle theme" name="Toggle theme">
			{theme === 'dark' ? (
				<FontAwesomeIcon icon={faSun} size="1x" className="nav-link align-middle theme-icon"/>
			) : (
				<FontAwesomeIcon icon={faMoon} size="1x" className="nav-link align-middle theme-icon"/>
			)}
		</button>
	);
};

export default ThemeToggler;

// TODO: Deployed toggle does not change icon properly on start