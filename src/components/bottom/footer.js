import * as React from 'react'

const Footer = ({title}) => {

  return (
	<footer className="py-5">
        <div className="container"><p className="m-0 text-center">Copyright &copy; {title} 2022</p></div>
    </footer>
  )
}

export default Footer