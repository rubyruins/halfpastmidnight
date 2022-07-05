import * as React from 'react'


const Card = ({children, title}) => {

	return (
		<div className="card mb-4">
			<div className="card-body">
				<div className="row">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Card