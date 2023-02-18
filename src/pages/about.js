import * as React from 'react'
import Layout from '../components/layout'
import Content from '../components/middle/content'
import Sidebar from '../components/right/sidebar'
import Header from '../components/top/header'

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<div className="container layout-container">
				<div className="row">
					<Header/>
					<Content>
						<div className="review-card review-content">
							<h1>Hi there!</h1>
							<hr className="my-4"/>
							<p>Welcome to my little corner on the web. I'm Soumya, also known as @rubyruins on the internet.</p>
							<p>I've had a deep connection with books ever since I was a kid. My fondest memories of childhood include staying up past bedtime to race through the well worn pages of a borrowed book, or making trips to the school library even during lunchtime. Stories have always been my preferred form of escapism in a world that is constantly shifting and changing. Over the years, this has only solidified my ❤️ for fantasy and science fiction.</p>
							<p>I'm up for a good book in any genre, but I do prefer my reads to be in the vein of speculative fiction. I'm always in for something medieval, historical, mythological or pure science fiction. Horror and thrillers are good too. Throw in a haunted house, complex interpersonal relationships, fantasy retellings or grey villains... and you have me hooked :) I'm not a big fan of romance, so you probably won't find a lot of that here. Personally, I tend to focus on plot, characterization, world building and writing style when reading a book, which is what my reviews shall talk about. I try to keep my reviews spoiler free and hopefully, will publish new posts weekly.</p>
							<p>Although I'm not a professional writer, I do dabble occasionally on Wattpad, where I put out some <a href="https://www.wattpad.com/story/96957534-crown-of-glass-%E2%9C%94">original fantasy</a> and a <a href="https://www.wattpad.com/story/112734148-queen-of-death-%E2%9C%94">retelling</a> of Hades and Persephone's story. Outside of my job as a software engineer, I built this blog over the course of many nights and cups of coffee, which probably inspired its name! Fun fact: every time you refresh this page, it loads a different picture in the header :) </p>
							<p>I'm always looking for recommendations for new stuff to read... so that I can add it to my ever growing TBR pile. Feel free to reach out to me with any comments, suggestions or simply for a chat!</p>
						</div>
					</Content>
					<Sidebar/>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage