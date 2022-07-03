import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import Card from './card';

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
			<Card title="Suggested Reading">
			{
				suggestions.map(suggestion => (
				<li key={suggestion}>
					<Link to={`/reviews/${kebabCase(suggestion.node.frontmatter.title)}`}>{makeTitle(suggestion.node)}</Link>
				</li>
				))
			}
			</Card>
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

const SuggestedReads = ({booksInSeries, booksByAuthor, bookTitle}) => {
	return (
		<>
			{renderSuggestions(booksInSeries, booksByAuthor, bookTitle)}
		</>
	)
}

export default SuggestedReads