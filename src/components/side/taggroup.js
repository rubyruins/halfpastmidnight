import * as React from 'react'
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Card from './card'

const TagGroup = ({tags}) => {

	return (
		<Card title="Tags">
		{
			tags.map(tag => (
				<li key={tag}>
					<Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
				</li>
			))
		}
		</Card>
	)
}

export default TagGroup