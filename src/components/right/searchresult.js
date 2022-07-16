import * as React from 'react'
import { kebabCase } from "lodash"
import { Link } from "gatsby"

const SearchResult = ({page}) => {

	return (
		<p key={page.id} className="mx-0 px-0 my-0 py-2 search-result-container">
			<Link to={"/reviews/" + kebabCase(page.title)} className='search-result-title'>{page.articleTitle}</Link>
			<br/>
			<span className='search-result-author'>
				{page.author}
			</span>
		</p>
	)
}

export default SearchResult

// TODO: Convert to dropdown