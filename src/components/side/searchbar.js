import * as React from 'react'
import Card from './card'

const SearchBar = () => {

	return (
		<Card title="Search for anything">
			<div className="input-group">
				<input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
				<button className="btn btn-primary" id="button-search" type="button">Go!</button>
			</div>
		</Card>
	)
}

export default SearchBar