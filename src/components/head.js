import * as React from 'react'

const Head = ({pageTitle}) => {

	return (
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="description" content="" />
			<meta name="author" content="" />
			<title>{pageTitle}</title>
			<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
			<link href="css/styles.css" rel="stylesheet" />
		</head>
	)
}

export default Head