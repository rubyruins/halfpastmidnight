import * as React from 'react'

const Footer = ({ title }) => {
	
	function getCurrentYear() {
		return new Date().getFullYear();
	}
	
	return (
		<footer className="py-5">
			<div className="container social-links">
				<p className="m-0 mb-2 text-center">
					<a href="https://www.instagram.com/halfpastmidnight.blog/"><strong className='px-2'>Instagram</strong></a>
					<a href="mailto:halfpastmidnight.blog@gmail.com
"><strong className='px-2'>Email</strong></a>
					<a href="https://www.goodreads.com/user/show/157578393-rubyruins"><strong className='px-2'>Goodreads</strong></a>
				</p>	
			</div>
			<div className="container copyright-text">
				<p className="m-0 text-center">
					&copy; {title} {getCurrentYear()}
				</p>	
			</div>
		</footer>
		)
	}
	
	export default Footer