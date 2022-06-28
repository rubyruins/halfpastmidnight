import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
// import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function renderSeries(node) {

	if (node.frontmatter.part) {
		return (
			<p>{node.frontmatter.series} part {node.frontmatter.part}</p>
		)
	}
}

const Featured = ({node}) => {

	// const image=getImage(node.frontmatter.cover_image)

	return (
		<div className="row mb-2">
			<div className="col-md-12 col-lg-12">
				<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col-auto d-none d-lg-block">
						{/* <GatsbyImage image={image} /> */}
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#55595c"/>
							<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
						</svg>
					</div>
					<div className="col p-4 d-flex flex-column position-static">
						{
							node.frontmatter.tags.map(tag => (
								<Link to={`/tags/${kebabCase(tag)}/`}>
									<span className="d-inline-block mb-2 text-primary">{tag}</span>
								</Link>
							))
						}
						{renderSeries(node)}
						<Link to={`/reviews/${kebabCase(node.frontmatter.title)}/`}><h3 className="mb-0">{node.frontmatter.title}</h3></Link>
						<div className="mb-1 text-muted">{node.frontmatter.date}</div>
						<p className="card-text mb-auto">{node.excerpt}.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured