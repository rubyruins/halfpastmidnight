import React, { Component } from "react"
import SearchResult from "./searchresult"
import { Index } from "elasticlunr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

function showSuggestions(results) {
	if (!results.length) {
		return <></>;
	} else {
		return (
			// <select size="13">
			<>
			{
				results.slice(0, 5).map(page => (
					<SearchResult page={page} key={page}/>
				))
			}
			</>
			// </select>
		)
	}
}

class SearchIndexer extends Component {
	state = {
		query: ``,
		results: []
	}

	render() {
		return (
		<div>
			<div class="input-group search-container">
				<span class="input-group-text search-icon" id="basic-addon1"><FontAwesomeIcon icon={faSearch} size="1x" className="px-2"/></span>
				<input type="text" value={this.state.query} onChange={this.search} className="form-control search-bar" placeholder="Find something!" aria-label="Search for titles" aria-describedby="basic-addon1"/>
			</div>
			{showSuggestions(this.state.results)}
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