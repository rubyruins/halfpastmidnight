import * as React from 'react'
import SearchBar from './searchbar'
import MailingList from './mailinglist'

const Sidebar = ({children}) => {

	return (
		<div className="col-lg-3 py-5 sidebar">
			{children}
			<SearchBar/>
			<MailingList/>
		</div>
	)
}

export default Sidebar