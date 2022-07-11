import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import Card from './card';
import SuggestedRead from './suggestedread';

// Find intersection of all books by the author and in the series
// If the original book is in a series, this returns books in other series
// If the original book is a standalones, this returns other standalones
// Remove the original book from list of suggestions

function findSuggestions(booksInSeries, booksByAuthor, bookTitle) {
	var suggestions = booksInSeries.filter(function(n) {
		for (var i = 0; i < booksByAuthor.length; i++) {
			if ((n.node === booksByAuthor[i].node) || (n.node.frontmatter.title === bookTitle)) {
				return false;
			}
		}
		return true;
	});
	return suggestions;
}

function renderSuggestions(booksInSeries, booksByAuthor, bookTitle) {
	var suggestions = findSuggestions(booksInSeries, booksByAuthor, bookTitle);
	if (!suggestions.length) {
		return <></>;
	} else {
		return (
			<Card>
			<h3>Suggested Reads</h3>
			{
				suggestions.map(suggestion => (
					<SuggestedRead suggestion={suggestion}/>
				))
			}
			</Card>
		)
	}
}

const SuggestedReadsList = ({booksInSeries, booksByAuthor, bookTitle}) => {
	return (
		<>
			{renderSuggestions(booksInSeries, booksByAuthor, bookTitle)}
		</>
	)
}

export default SuggestedReadsList