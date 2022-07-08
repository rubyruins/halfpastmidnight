import Isotope from "isotope-layout"
import React from "react"

const SortButton = () => {
	const isotope = React.useRef()
	const [sortKey, setSortKey] = React.useState('*')
	console.log("Sort key: " + sortKey);
  
	React.useEffect(() => {
	  	isotope.current = new Isotope('.sort-container', {
			itemSelector: '.element-item',
			masonry: {
				// columnWidth: 100,
				horizontalOrder: true
			},
			// layoutMode: 'vertical',
			getSortData: {
				rating: '.rating',
				title: '.title',
				date: '.date',
			}
		})
		return () => isotope.current.destroy();
	}, [])
  
	React.useEffect(() => {
		if ((sortKey === "*") || (sortKey === "title")) {
			isotope.current.arrange({sortBy: 'title', sortAscending: true})
		} else {
			isotope.current.arrange({sortBy: sortKey, sortAscending: false})
	}}, [sortKey])
  
	const handleSortKeyChange = key => () => setSortKey(key)
  
	return (
		<ul className="sort-button-group p-0">
			<button onClick={handleSortKeyChange('title')} title="Sort by title" aria-label="Sort by title" className="sort-button">Title</button>
			<button onClick={handleSortKeyChange('date')} title="Sort by date" aria-label="Sort by date" className="sort-button">Date</button>
			<button onClick={handleSortKeyChange('rating')} title="Sort by rating" aria-label="Sort by rating" className="sort-button">Rating</button>
		</ul>
	)
}

export default SortButton

// TODO: Add handler for ascending / descending options: either as 2 seperate buttons or click again on the same button to reverse order