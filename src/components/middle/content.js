import * as React from 'react'

const Content = ({children}) => {
	return (
		<div className="col-xl-9 col-lg-8 col-md-8 content">
			{children}
		</div>
	)
}

export default Content