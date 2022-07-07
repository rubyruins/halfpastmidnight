import * as React from 'react'
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagGroup = ({tags}) => {

	return (
		<ul className='flex flex-row tags-list'>
		{
			tags.map(tag => (
			<Link to={`/tags/${kebabCase(tag)}/`} className="tag">
				<span className="d-inline-block text-primary">{tag}</span>
			</Link>
			))
		}
		</ul>
	)
}

export default TagGroup