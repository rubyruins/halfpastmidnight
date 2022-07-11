import Isotope from "isotope-layout"
import React from "react"

const SortButton = () => {
	const isotope = React.useRef()
	const [sortKey, setSortKey] = React.useState('title')
	// console.log("Sort key: " + sortKey);
  
	React.useEffect(() => {
	  	isotope.current = new Isotope('.sort-container', {
			itemSelector: '.post-item',
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

		console.log(sortKey);
		isotope.current.arrange({sortBy: sortKey, sortAscending: false})

		if (document !== undefined) {
			var allButtons = document.querySelectorAll(".sort-button");
			[].forEach.call(allButtons, function(button) {
				button.classList.remove("sort-button-clicked");
			});

			var clickedButton = document.querySelector(".sort-" + sortKey);
			clickedButton.classList.add("sort-button-clicked");
		}
	}, [sortKey])
  
	const handleSortKeyChange = key => () => setSortKey(key)
  
	return (
		<ul className="sort-button-group p-0">
			<button onClick={handleSortKeyChange('title')} title="Sort by title" aria-label="Sort by title" className="sort-button sort-title">Title</button>
			<button onClick={handleSortKeyChange('date')} title="Sort by date" aria-label="Sort by date" className="sort-button sort-date">Date</button>
			<button onClick={handleSortKeyChange('rating')} title="Sort by rating" aria-label="Sort by rating" className="sort-button sort-rating">Rating</button>
		</ul>
	)
}

export default SortButton

// TODO: Add handler for ascending / descending options: either as 2 seperate buttons or click again on the same button to reverse order