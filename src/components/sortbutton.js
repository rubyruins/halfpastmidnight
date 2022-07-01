import Isotope from "isotope-layout"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faA, faClock } from '@fortawesome/free-solid-svg-icons';

const SortButton = () => {
	const isotope = React.useRef()
	const [sortKey, setSortKey] = React.useState('*')
	console.log(sortKey)
  
	React.useEffect(() => {
	  	isotope.current = new Isotope('.sort-container', {
			itemSelector: '.element-item',
			layoutMode: 'vertical',
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
	  <>
		<ul>
			<button onClick={handleSortKeyChange('rating')} title="Sort by rating" aria-label="Sort by rating"><FontAwesomeIcon icon={faStar} size="1x"/></button>
			<button onClick={handleSortKeyChange('title')} title="Sort by title" aria-label="Sort by title"><FontAwesomeIcon icon={faA} size="1x"/></button>
			<button onClick={handleSortKeyChange('date')} title="Sort by date" aria-label="Sort by date"><FontAwesomeIcon icon={faClock} size="1x"/></button>
		</ul>
		<hr />
	</>
	)
}

export default SortButton