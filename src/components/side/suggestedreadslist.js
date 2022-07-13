import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import Card from './card';
import SuggestedRead from './suggestedread';

// Fetch intersection of all books by the author and in the series
// If the original book is in a series, this returns books in other series
// If the original book is a standalones, this returns other standalones
// Remove the original book from list of suggestions

function renderSuggestions(otherBooksInSeriesByAuthor) {
	if (!otherBooksInSeriesByAuthor.length) {
		return <></>;
	} else {
		return (
			<Card>
			<h3>Suggested Reads</h3>
			{
				otherBooksInSeriesByAuthor.map(suggestion => (
					<SuggestedRead suggestion={suggestion}/>
				))
			}
			</Card>
		)
	}
}

const SuggestedReadsList = ({otherBooksInSeriesByAuthor}) => {
	return (
		<>
			{renderSuggestions(otherBooksInSeriesByAuthor)}
		</>
	)
}

export default SuggestedReadsList