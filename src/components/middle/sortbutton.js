import Isotope from "isotope-layout"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faList, faColumns } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const SortButton = ({className}) => {
	const isotope = React.useRef();
	const [sortKey, setSortKey] = React.useState('date');
	const [prevSortKey, setPrevSortKey] = React.useState('date');
	const [sortOrder, setSortOrder] = React.useState(false);
	const [layout, setLayout] = React.useState('column');
  
	React.useEffect(() => {
	  	isotope.current = new Isotope('.sort-container', {
			itemSelector: '.postitem',
			masonry: {
				horizontalOrder: true
			},
			getSortData: {
				rating: '.rating',
				title: '.title',
				date: '.date',
			}
		})
		return () => isotope.current.destroy();
	}, [])
  
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
	}, [sortKey, sortOrder]);

	React.useEffect(() => {
		console.log(layout);
		if (document !== undefined) {
			var allButtons = document.querySelectorAll(".view-button");
			[].forEach.call(allButtons, function(button) {
				button.classList.remove("custom-button-clicked");
			});
			var clickedButton = document.querySelector(".layout-" + layout);
			clickedButton.classList.add("custom-button-clicked");

			var allPosts = document.querySelectorAll(".postitem");
			[].forEach.call(allPosts, function(post) {
				post.classList.add("hide-postitem");
			});
			var postsToShow = document.querySelectorAll(".post" + layout);
			[].forEach.call(postsToShow, function(post) {
				post.classList.remove("hide-postitem");
				post.classList.remove("show-postitem");
			});

		}
	}, [layout]);
  
	function handleSortKeyChange(key) {
		if (prevSortKey === key) {
			setSortOrder(!sortOrder);
		} else {
			setSortOrder(true);
			setSortKey(key);
		}
		setPrevSortKey(key);
	}

	function handleLayoutKeyChange(key) {
		setLayout(key);
	}
  
	return (
		<div className={`row mx-0 all-buttons-group ${className}`}>
			<ul className="custom-button-group view-button-group p-0">
				<button onClick={() => handleLayoutKeyChange('column')} title="View as columns" aria-label="View as columns" className="custom-button view-button custom-button-clicked layout-column">
					<FontAwesomeIcon icon={faColumns} size="1x" className="view-button-icon"/>
				</button>
				<button onClick={() => handleLayoutKeyChange('row')} title="View as rows" aria-label="View as rows" className="custom-button view-button layout-row">
					<FontAwesomeIcon icon={faList} size="1x" className="view-button-icon"/>
				</button>	
			</ul>
			<ul className="custom-button-group sort-button-group p-0">
				<button onClick={() => handleSortKeyChange('title')} title="Sort by title" aria-label="Sort by title" className="custom-button sort-button sort-title">
					Title
					<FontAwesomeIcon icon={faArrowUp} size="1x" className="ps-2 sort-order-true sort-button-icon"/>
					<FontAwesomeIcon icon={faArrowDown} size="1x" className="ps-2 sort-order-false sort-button-icon sort-button-icon-hide"/>
				</button>
				<button onClick={() => handleSortKeyChange('date')} title="Sort by date" aria-label="Sort by date" className="custom-button sort-button sort-date">
					Date
					<FontAwesomeIcon icon={faArrowUp} size="1x" className="ps-2 sort-order-true sort-button-icon sort-button-icon-hide"/>
					<FontAwesomeIcon icon={faArrowDown} size="1x" className="ps-2 sort-order-false sort-button-icon sort-button-icon-hide"/>
				</button>
				<button onClick={() => handleSortKeyChange('rating')} title="Sort by rating" aria-label="Sort by rating" className="custom-button sort-button sort-rating">
					Rating
					<FontAwesomeIcon icon={faArrowUp} size="1x" className="ps-2 sort-order-true sort-button-icon sort-button-icon-hide"/>
					<FontAwesomeIcon icon={faArrowDown} size="1x" className="ps-2 sort-order-false sort-button-icon sort-button-icon-hide"/>
				</button>
			</ul>
		</div>
	)
}

export default SortButton