import * as React from 'react'
import Card from './card'
import { useStaticQuery, graphql } from 'gatsby'
import SearchIndexer from '../side/searchindexer'

const SearchBar = () => {

	const data = useStaticQuery(graphql`
		query SearchIndexQuery {
			siteSearchIndex {
				index
			}
		}
	`)

	return (
		<Card>
			<SearchIndexer searchIndex={data.siteSearchIndex.index}/>
		</Card>
	)
}

export default SearchBar