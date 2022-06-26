import * as React from 'react'
import { Link } from "gatsby"


const TagGroup = ({tags}) => {

	return (
		<div className="card mb-4">
			<div className="card-header">Categories</div>
			<div className="card-body">
				<div className="row">
					<ul className="list-unstyled mb-0">
						{
						tags.map(tag => (
							<li>
								<Link to={`/tags/${tag}`}>{tag}</Link>
							</li>
							))
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TagGroup