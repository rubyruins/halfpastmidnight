import * as React from 'react'

const ContentWide = ({children}) => {
	return (
		<div className="col-xl-9 col-lg-8 col-md-8 py-5 content content-wide">
			{children}
		</div>
	)
}

export default ContentWide