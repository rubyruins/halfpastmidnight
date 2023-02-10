import * as React from 'react'
import SearchBar from './searchbar'
import MailingList from './mailinglist'

const Sidebar = ({className, children}) => {

	return (
		<div className={`col-xl-3 col-lg-4 col-md-4 sidebar ${className}`}>
			{children}
			<SearchBar/>
			<MailingList/>
		</div>
	)
}

export default Sidebar