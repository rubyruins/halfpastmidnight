import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

  return (
	<footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; {data.site.siteMetadata.title} 2022</p></div>
    </footer>
  )
}

export default Footer