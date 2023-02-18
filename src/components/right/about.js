import * as React from 'react'
import Card from './card'

const About = ({className}) => {

	return (
		<Card title="Hi there!" className={className}>
			<p className='mb-0'>Welcome to Half Past Midnight, a blog dedicated to the surreal world of fantasy and science fiction.</p>
		</Card>
	)
}

export default About