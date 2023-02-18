import * as React from 'react'
import Card from './card'

const MailingList = () => {

	return (
		<Card title="Follow Half Past Midnight via Email!">
			<div className='sib-form'>
				<div id='sib-form-container' className='sib-form-container'>
					<div id='error-message' className='sib-form-message-panel'></div>
					<div></div>
					<div id='success-message' className='sib-form-message-panel'>
						<div className='sib-form-message-panel__text sib-form-message-panel__text--center'>
							<svg viewBox='0 0 512 512' className='sib-icon sib-notification__icon'>
								<path d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z' />
							</svg>
							<span className='sib-form-message-panel__inner-text'>
								Your subscription has been successful.
							</span>
						</div>
					</div>
					<div></div>
					<div id='sib-container' className='sib-container--large sib-container--vertical'>
						<form id='sib-form' method='POST' action={process.env.GATSBY_MAILING_LIST_SUBSCRIBE_FORM} data-type='subScription' target='_blank'>
							<div>
								<div className='sib-form-block'>
									<div className='sib-text-form-block'>
										<p className='mb-0'>Subscribe to our newsletter to get the latest updates whenever a new review is published.</p>
									</div>
								</div>
							</div>
							<div>
								<div className='sib-input sib-form-block'>
									<div className='form__entry entry_block'>
										<div className='form__label-row form-group'>
											<div className='entry__field input-group'>
												<input className='input' type='text' id='EMAIL' name='EMAIL' placeholder='Enter your email address.' data-required='true' required />
											</div>
										</div>
										<label className='entry__error entry__error--primary mt-3 mb-3' control='true' htmlFor='EMAIL'>
										</label>
									</div>
								</div>
							</div>
							<div>
								<div className='sib-form-block'>
									<button className='sib-form-block__button sib-form-block__button-with-loader custom-button custom-button-clicked mt-0' form='sib-form' type='submit'>
										<svg className='icon clickable__icon progress-indicator__icon sib-hide-loader-icon' viewBox='0 0 512 512'>
										{/* <svg className='icon clickable__icon progress-indicator__icon' viewBox='0 0 512 512'> */}
											<path d='M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z' />
										</svg>
										Subscribe!
									</button>
								</div>
							</div>

							<input type='text' name='email_address_check' value='' className='input--hidden' readOnly/>
							<input type='hidden' name='locale' value='en' />
						</form>
					</div>
				</div>
			</div>
		</Card>
	)
}


export default MailingList