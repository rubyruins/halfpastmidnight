import * as React from 'react'

const Footer = ({ title }) => {
	
	function getCurrentYear() {
		return new Date().getFullYear();
	}
	
	return (
		<footer className="py-5">
		<div className="container"><p className="m-0 text-center">Copyright &copy; {title} {getCurrentYear()}</p></div>
		</footer>
		)
	}
	
	export default Footer