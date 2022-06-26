import * as React from 'react'
import SearchBar from './searchbar'
import MailList from './maillist'


const Sidebar = ({children}) => {

	return (
		<div className="col-lg-4">
			<SearchBar/>
			<MailList/>
			{children}
		</div>
	)
}

export default Sidebar