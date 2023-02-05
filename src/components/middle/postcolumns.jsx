import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function formatDate(date) {
	date = new Date(date).toDateString().split(' ').slice(1).join(' ');
	date = date.split(' ');
	date[1] = date[1] + ',';
	date = date.join(' ');
	return date;
}

function renderPostColumn(node) {
	const image = getImage(node.frontmatter.cover_image)
	return (
		<div key={node.id}>
			<article className="postitem postcolumn col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div className='postitem-content'>
				<div className='postitem-img'>
					<GatsbyImage image={image} alt={node.frontmatter.title}/>
				</div>
				<div className='postitem-text'>
					<h3 className='title mb-0'>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
							{node.fields.articleTitle}
						</Link>
					</h3>
					{/* <p className='postitem-author mb-0'>{node.frontmatter.author}</p> */}
					<Link to={`/tags/${kebabCase(node.frontmatter.author)}/`} className="tag" key={node.frontmatter.title}>
						<p className="postitem-author mb-0">{node.frontmatter.author}</p>
					</Link>
					<span className='postitem-excerpt'>{node.excerpt}</span>
					<div className='postitem-bottom-container'>
						<span className='date'>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2 postitem-icon"/>{formatDate(node.frontmatter.date)}
						</span>
						<span className='rating hide-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2 postitem-icon"/>{node.frontmatter.rating}
						</span>
						<span className='rating-show-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2 postitem-icon"/>{node.fields.roundRating}
						</span>
					</div>
				</div>
			</div>
			</article>
		</div>
	)
}

const PostColumns = ({nodes}) => {
	return (
		<div className="sort-container row">
		{
			nodes.map(node => (renderPostColumn(node)))
		}
		</div>
	)
}

export default PostColumns