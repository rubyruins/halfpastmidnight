import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faList, faColumns } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const SortButton = ({className, handleSortKeyChange, handleLayoutKeyChange}) => {
  
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