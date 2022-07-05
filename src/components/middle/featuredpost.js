import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import TagGroup from './taggroup'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const FeaturedPost = ({node}) => {

	const image=getImage(node.frontmatter.cover_image)

	return (
		<div className="row mb-2">
			<hr/>
			<div className="col-md-12 col-lg-12">
				<div className="row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative">
					<div className="col-auto d-none d-lg-block">
						<div class="featured-img-container">
							<GatsbyImage image={image} alt="" className="featured-img"/>
						</div>
					</div>
					<div className="col p-4 d-flex flex-column position-static">
						<div className="mb-1 text-muted">{node.frontmatter.date} • {node.timeToRead} minute read</div>
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}/`}>
							<h3 className="mb-0 section-heading">{node.fields.articleTitle}</h3>
						</Link>
						<ul className='flex flex-row tags-list'>
						{
							<TagGroup tags={node.frontmatter.tags}/>
						}
						</ul>
						<p className="card-text mb-auto">{node.excerpt}.</p>
					</div>
				</div>
			</div>
		</div>	
)}

export default FeaturedPost