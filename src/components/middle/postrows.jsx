import * as React from 'react'
import PostListing from './postlisting'

const PostRows = ({nodes}) => {
	return (
		<div className="sort-container row post-row">
		{
			nodes.map(node => (
			<PostListing node={node} />
			))
		}
		</div>
	)
}

export default PostRows