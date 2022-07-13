import * as React from 'react'
import SearchBar from './searchbar'
import MailingList from './mailinglist'

const RightSidebar = ({children}) => {

	return (
		<div className="col-xl-3 col-lg-4 col-md-4 py-5 right-sidebar">
			{children}
			<SearchBar/>
			<MailingList/>
		</div>
	)
}

export default RightSidebar