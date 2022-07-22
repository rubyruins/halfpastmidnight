import * as React from 'react'
import Isotope from "isotope-layout"
import PostColumns from './postcolumns';
import PostRows from './postrows';
import SortButton from './sortbutton';

const IsotopeGrid = ({nodes, prefSortKey, prefSortOrder, prefLayout, prefHideButtons}) => {

	const isotope = React.useRef();
	const [sortKey, setSortKey] = React.useState(prefSortKey || 'title');
	const [prevSortKey, setPrevSortKey] = React.useState(prefSortKey || 'title');
	const [sortOrder, setSortOrder] = React.useState(prefSortOrder && true);
	const [layout, setLayout] = React.useState(prefLayout || 'row');
	console.log(sortKey, sortOrder, prevSortKey, layout);

	React.useEffect(() => {

		if (document !== undefined) {
			var allButtons = document.querySelectorAll(".view-button");
			[].forEach.call(allButtons, function(button) {
				button.classList.remove("custom-button-clicked");
			});
			var clickedButton = document.querySelector(".layout-" + layout);
			clickedButton.classList.add("custom-button-clicked");
		}

		isotope.current = new Isotope('.sort-container', {
			itemSelector: '.postlisting',
			masonry: {
				horizontalOrder: true
			},
			getSortData: {
				rating: '.rating',
				title: '.title',
				date: '.date',
			}
		})

		isotope.current.arrange({sortBy: sortKey, sortAscending: sortOrder})

		return () => isotope.current.destroy();
	}, [layout])

	React.useEffect(() => {
		isotope.current.arrange({sortBy: sortKey, sortAscending: sortOrder})
		
		if (document !== undefined) {
			var allButtons = document.querySelectorAll(".sort-button");
			[].forEach.call(allButtons, function(button) {
				button.classList.remove("custom-button-clicked");
				var allIcons = button.querySelectorAll(".sort-button-icon");
				[].forEach.call(allIcons, function(icon) {
					icon.classList.add("sort-button-icon-hide");
				});
			});
			var clickedButton = document.querySelector(".sort-" + sortKey);
			clickedButton.classList.add("custom-button-clicked");
			clickedButton.querySelector('.sort-order-' + sortOrder.toString()).classList.remove('sort-button-icon-hide');
		}
	}, [sortKey, sortOrder, prevSortKey]);

	function handleSortKeyChange(key) {
		if (prevSortKey === key) {
			setSortOrder(!sortOrder);
		} else {
			setSortOrder(true);
			setSortKey(key);
		}
		setPrevSortKey(key);
		console.log(sortKey, prevSortKey, sortOrder, layout, "here");
	}

	function handleLayoutKeyChange(key) {
		setLayout(key);
	}

	function displayButtons() {
		if (prefHideButtons) {
			return <SortButton handleSortKeyChange={handleSortKeyChange} handleLayoutKeyChange={handleLayoutKeyChange} className='hide-all-buttons-group'/>
		} else {
			return <SortButton handleSortKeyChange={handleSortKeyChange} handleLayoutKeyChange={handleLayoutKeyChange}/>
		}
	}

	function displayLayout() {
		if (layout === 'column') {
			return <PostColumns nodes={nodes}/>
		} else if (layout === 'row') {
			return <PostRows nodes={nodes}/>
		}
	}

	return (
		<>
			{displayButtons()}
			{displayLayout()}
		</>
	)
}

export default IsotopeGrid