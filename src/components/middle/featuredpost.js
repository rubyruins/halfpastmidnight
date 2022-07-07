import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import TagGroup from './taggroup'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const FeaturedPost = ({node}) => {

	const image=getImage(node.frontmatter.cover_image)

	return (
		<div className="row featured-container py-2">
			<div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-4 featured-img-container">
				<GatsbyImage image={image} alt="" className="featured-img"/>
			</div>
			<div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-xs-8 featured-text-container">
				<div className='featured-text px-3'>
					<div className="mb-1 text-muted">{node.frontmatter.date} • {node.timeToRead} minute read</div>
					<Link to={`/reviews/${kebabCase(node.frontmatter.title)}/`}>
						<h3 className="mb-0">{node.fields.articleTitle}</h3>
					</Link>
					<p className='text-muted'>
						{node.frontmatter.author}
					</p>
					<TagGroup tags={node.frontmatter.tags}/>
					<p className="card-text mb-auto">{node.excerpt}.</p>
				</div>
			</div>
		</div>
)}

// TODO: Make the spacing consistent between each post (currently varies due to different book cover sizes)

export default FeaturedPost