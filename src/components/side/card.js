import * as React from 'react'


const Card = ({children, title}) => {

	return (
		<div className="card mb-4 px-0 mx-0">
			<div className="card-body p-0 mx-0">
				{children}
			</div>
		</div>
	)
}

export default Card