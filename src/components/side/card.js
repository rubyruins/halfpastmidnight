import * as React from 'react'


const Card = ({children, title}) => {

	return (
		<div className="card mb-4">
			<div className="card-header">{title}</div>
			<div className="card-body">
				<div className="row">
					<ul className="list-unstyled mb-0">
						{children}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Card