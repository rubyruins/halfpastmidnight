import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function roundHalf(num) {
    return Math.round(parseFloat(num) * 2) / 2;
}

const PostListing = ({node}) => {

	const image = getImage(node.frontmatter.cover_image)

	return (
		<div>
			<article key={node.id} className="postlisting col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
			<div className='postlisting-content'>
				<div className='postlisting-img'>
					<GatsbyImage image={image}/>
				</div>
				<div className='postlisting-text'>
					<h2 className='title mb-0'>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}`}>
							{node.fields.articleTitle}
						</Link>
					</h2>
					<p className='postlisting-author mb-0'>{node.frontmatter.author}</p>
					<span className='postlisting-excerpt'>{node.excerpt}</span>
					<div className='postlisting-bottom-container'>
						<span className='date'>
							<FontAwesomeIcon icon={faClock} size="1x" className="pe-2"/>{node.frontmatter.date}
						</span>
						<span className='rating hide-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2"/>{node.frontmatter.rating}
						</span>
						<span className='rating-show-element'>
							<FontAwesomeIcon icon={faStar} size="1x" className="pe-2"/>{roundHalf(node.frontmatter.rating)}
						</span>
					</div>
				</div>
			</div>
			</article>
		</div>
	)
}

export default PostListing