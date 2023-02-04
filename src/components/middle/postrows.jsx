import * as React from 'react';
import { Link } from 'gatsby';
import kebabCase from "lodash/kebabCase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function renderPostRow(node) {
	return (
		<div className='row' key={node.id}>
			<article className="postitem postrow">
				<div className='postitem-content'>
					<h3 className='title mb-0'>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
							{node.fields.articleTitle}
						</Link>
					</h3>
					<p className='postitem-author mb-0'>{node.frontmatter.author}</p>
					<span className='postitem-excerpt'>{node.excerpt}</span>
					<div className='postitem-bottom-container'>
						<span className='date'>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2 postitem-icon"/>{node.frontmatter.date}
						</span>
						<span className='rating hide-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2 postitem-icon"/>{node.frontmatter.rating}
						</span>
						<span className='rating-show-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="ps-2 postitem-icon pe-2"/>{node.fields.roundRating}
						</span>
					</div>
				</div>
			</article>
		</div>
	)
}

const PostRows = ({nodes}) => {
	return (
		<div className="sort-container row">
		{
			nodes.map(node => (renderPostRow(node)))
		}
		</div>
	)
}

export default PostRows