import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'

function generateRecommendationsList(seriesBooks, authorBooks, bookTitle) {
	var commonRecs = seriesBooks.filter(function(n) {
		for(var i = 0; i < authorBooks.length; i++){
			if ((n.node == authorBooks[i].node) || (n.node.frontmatter.title === bookTitle)) {
				return false;
			}
		}
		return true;
	});
	return commonRecs;
}

function renderList(seriesBooks, authorBooks, bookTitle) {
	var commonRecs = generateRecommendationsList(seriesBooks, authorBooks, bookTitle);
	if (!commonRecs.length) {
		return <></>;
	} else {
		return (
			<div className="card mb-4">
				<div className="card-header">Suggested</div>
				<div className="card-body">
					<div className="row">
						<ul className="list-unstyled mb-0">
						{
							commonRecs.map(commonRec => (
							<li key={commonRec}>
								<Link to={`/reviews/${kebabCase(commonRec.node.frontmatter.title)}`}>{makeTitle(commonRec.node)}</Link>
							</li>
							))
						}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

function makeTitle(node) {
	if (node.frontmatter.part) {
		return `${node.frontmatter.title} (${node.frontmatter.series}, #${node.frontmatter.part})`
	} else {
		return `${node.frontmatter.title}`
	}
}

const Recommendations = ({seriesBooks, authorBooks, bookTitle}) => {
	return (
		<>
			{renderList(seriesBooks, authorBooks, bookTitle)}
		</>
	)
}

export default Recommendations