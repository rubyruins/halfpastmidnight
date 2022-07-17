import * as React from 'react'
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagGroup = ({tags}) => {

	return (
		<ul className='flex flex-row tags-list'>
		{
			tags.slice(0, -1).map(tag => (
				<>
					<Link to={`/tags/${kebabCase(tag)}/`} className="tag">
						<p className="d-inline-block text-primary mb-0">{tag}</p>
					</Link>
					<p className="d-inline-block text-primary mb-0">,&nbsp;&nbsp;</p>
				</>
			))
		}
		{
			<Link to={`/tags/${kebabCase(tags.at(-1))}/`} className="tag">
				<p className="d-inline-block text-primary mb-0">{tags.at(-1)}</p>
			</Link>
		}
		</ul>
	)
}

export default TagGroup