import * as React from 'react'
import { kebabCase } from "lodash"
import { Link } from "gatsby"

const SearchResult = ({page}) => {

	return (
		<p key={page.id} className="mx-3 px-3 my-3">
			<Link to={"/reviews/" + kebabCase(page.title)}>{page.articleTitle}</Link>
			<br/>
			{page.author}
		</p>
	)
}

export default SearchResult

// TODO: Convert to dropdown