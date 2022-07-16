import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SearchIndexer from './searchindexer'

const SearchBar = () => {

	const data = useStaticQuery(graphql`
		query SearchIndexQuery {
			siteSearchIndex {
				index
			}
		}
	`)

	return (
		<div className="card mb-4 mx-0 p-0">
			<div className="card-body p-0 mx-0 searchbar-card-body">
				<SearchIndexer searchIndex={data.siteSearchIndex.index}/>
			</div>
		</div>
	)
}

export default SearchBar