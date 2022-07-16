import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import Card from './card';

// Fetch intersection of all books by the author and in the series
// If the original book is in a series, this returns books in other series
// If the original book is a standalones, this returns other standalones
// Remove the original book from list of suggestions

function renderSuggestions(bookAuthor, otherBooksInSeriesByAuthor) {
	if (!otherBooksInSeriesByAuthor.length) {
		return <></>;
	} else {
		return (
			<Card title="Suggested Reads">
			{
				otherBooksInSeriesByAuthor.map(suggestion => (
					<div className='row mx-0'>
						<div className='p-0 suggested-read-container'>
							<Link to={`/reviews/${kebabCase(suggestion.node.frontmatter.title)}`} className='suggested-read-title'> 
								{suggestion.node.fields.articleTitle}
							</Link>
							<p className='m-0 suggested-read-author'>{suggestion.node.frontmatter.author}</p>
						</div>
					</div>
				))
			}
			</Card>
		)
	}
}

const SuggestedReadsList = ({bookAuthor, otherBooksInSeriesByAuthor}) => {
	return (
		<>
			{renderSuggestions(bookAuthor, otherBooksInSeriesByAuthor)}
		</>
	)
}

export default SuggestedReadsList