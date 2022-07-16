import * as React from 'react'


const Card = ({children, title}) => {

	return (
		<div className="card mb-4 mx-0 p-0">
			<div className="card-body p-0 mx-0">
				<div className='card-container'>
					<h3>{title}</h3>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Card