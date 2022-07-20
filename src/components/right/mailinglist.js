import * as React from 'react'
import Card from './card'

const MailingList = () => {

	return (
		<Card title="Follow Half Past Midnight via Email!">
			<p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor eros, condimentum ut ipsum eget, finibus vehicula velit. Aenean non fermentum magna. </p>
			<form action='/'>
				<div className="form-group">
					<div class="input-group mailinglist-email-entry-container">
						<input type="text" placeholder="Enter your email address." className="form-control mailinglist-email-entry" aria-label="Enail address" aria-describedby="basic-addon2"/>
					</div>
				</div>
				<button type="submit" className="mt-3 custom-button custom-button-clicked">Subscribe!</button>
			</form>
		</Card>
	)
}

export default MailingList