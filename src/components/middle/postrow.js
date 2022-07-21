import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const PostRow = ({node}) => {

	const image = getImage(node.frontmatter.cover_image)

	return (
		<div>
			<article key={node.id} className="postitem postrow col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div className='postrow-content'>
				<div className='postrow-img'>
					<GatsbyImage image={image}/>
				</div>
				<div className='postrow-text'>
					<h3 className='title mb-0'>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
							{node.fields.articleTitle}
						</Link>
					</h3>
					<p className='postrow-author mb-0'>{node.frontmatter.author}</p>
					<span className='postrow-excerpt'>{node.excerpt}</span>
					<div className='postrow-bottom-container'>
						<span className='date'>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2"/>{node.frontmatter.date}
						</span>
						<span className='rating hide-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2"/>{node.frontmatter.rating}
						</span>
						<span className='rating-show-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2"/>{node.fields.roundRating}
						</span>
					</div>
				</div>
			</div>
			</article>
		</div>
	)
}

export default PostRow