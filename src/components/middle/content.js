import * as React from 'react'

const Content = ({children}) => {
	return (
		<div className="col-lg-9 py-5 content">
			{children}
		</div>
	)
}

export default Content