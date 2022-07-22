import * as React from 'react'
import PostListing from './postlisting'

const PostColumns = ({nodes}) => {
	return (
		<div className="sort-container row post-column">
		{
			nodes.map(node => (
			<PostListing node={node} />
			))
		}
		</div>
	)
}

export default PostColumns