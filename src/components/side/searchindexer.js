import React, { Component } from "react"
import SearchResult from "./searchresult"
import { Index } from "elasticlunr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchIndexer extends Component {
	state = {
		query: ``,
		results: []
	}

	render() {
		return (
		<div>
			<div className="search-container">
				<FontAwesomeIcon icon={faSearch} size="1x" className="px-2"/>
				<input type="text" value={this.state.query} onChange={this.search} placeholder={`Search for something...`}className="search-bar"/>
			</div>
			{this.state.results.map(page => (
				<SearchResult page={page} />
			))}
		</div>
		)
	}

	getOrCreateIndex = () => {
		return this.index
		? this.index
		: // Create an elastic lunr index and hydrate with graphql query results
		Index.load(this.props.searchIndex)
	}

	search = evt => {
		const query = evt.target.value
		this.index = this.getOrCreateIndex()
		this.setState({
		query,
		// Query the index with search string to get an [] of IDs
		results: this.index
			.search(query, { expand: true })
			// Map over each ID and return the full document
			.map(({ ref }) => {
			return this.index.documentStore.getDoc(ref)
			}),
		})
	}
}

export default SearchIndexer