import * as React from 'react'
import SearchBar from './searchbar'
import MailingList from './mailinglist'

const Sidebar = ({children}) => {

	return (
		<div className="col-lg-4">
			<SearchBar/>
			<MailingList/>
			{children}
		</div>
	)
}

export default Sidebar