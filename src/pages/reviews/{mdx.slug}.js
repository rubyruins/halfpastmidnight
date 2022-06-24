import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Content from '../../components/content'
import Sidebar from '../../components/sidebar'

const ReviewPage = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.cover_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div class="container">
				<div class="row">
					<Content>
						<p>Posted: {data.mdx.frontmatter.date}</p>
						<p>Author: {data.mdx.frontmatter.author}</p>
						<p>Series: {data.mdx.frontmatter.series}</p>
						<p>Rating: {data.mdx.frontmatter.rating}</p>
						<GatsbyImage
							image={image}
							// alt={data.mdx.frontmatter.hero_image_alt}
						/>
						<MDXRenderer>
							{data.mdx.body}
						</MDXRenderer>
						<div class="row g-5">
							<div class="col-md-12">
								<article class="blog-post">
									<h2 class="blog-post-title">Sample blog post</h2>
									<p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

									<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
									<hr></hr>
									<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
									<h2>Blockquotes</h2>
									<p>This is an example blockquote in action:</p>
									<blockquote class="blockquote">
									<p>Quoted text goes here.</p>
									</blockquote>
									<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
									<p>Most of these elements are styled by browsers with few modifications on our part.</p>
									<h2>Heading</h2>
									<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
									<h3>Sub-heading</h3>
									<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
									<pre><code>Example code block</code></pre>
									<p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
								</article>
							</div>
						</div>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($id: String) {
		mdx(id: {eq: $id}) {
			body
			frontmatter {
				title
				author
				series
				rating
				date(formatString: "MMMM DD, YYYY")
				cover_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`

export default ReviewPage