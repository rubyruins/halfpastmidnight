import * as React from 'react'
import { Script } from 'gatsby'
// import '../../styles/sib-styles.css'

const Head = ({ data, pageTitle }) => {
	return (
		<>
		<title>{pageTitle} | {data.site.siteMetadata.title}</title>
		<link rel="canonical" href={data.site.siteMetadata.siteUrl} />
		<link rel='stylesheet' href='https://sibforms.com/forms/end-form/build/sib-styles.css' />
		{/* <link rel="stylesheet" href="../../styles/sib-styles.css" crossOrigin="true"/> */}
		<meta charSet="utf-8" />
		<meta name="description" content={data.site.siteMetadata.description} />
		<meta name="author" content={data.site.siteMetadata.author} />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;500&display=swap" rel="stylesheet"></link>
		<Script>
		{
			`window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
			window.LOCALE = 'en';
			window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
			window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';
			window.GENERIC_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
			window.translation = {
			common: {
				selectedList: '{quantity} list selected',
				selectedLists: '{quantity} lists selected'
			}
			};
			var AUTOHIDE = Boolean(0);`
		}
		</Script>
		<Script defer src='https://sibforms.com/forms/end-form/build/main.js'></Script>
		</>
		)
	}
	
	
	export default Head