import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const Featured = ({title, tags, date, slug, excerpt, image}) => {
	return (
		<div className="row mb-2">
			<div className="col-md-12 col-lg-12">
				<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col-auto d-none d-lg-block">
						{/* <GatsbyImage image={image} className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio= "xMidYMid slice" focusable="false"/> */}
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
							<title>Placeholder</title>
							<GatsbyImage image={image}/>
							<rect width="100%" height="100%" fill="#55595c"/>
							<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
						</svg>
					</div>
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-primary">World</strong>
						<Link to={slug}><h3 className="mb-0">{title}</h3></Link>
						<div className="mb-1 text-muted">{date}</div>
						<p className="card-text mb-auto">{excerpt}.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured