import * as React from 'react'
import {randomHeader} from '../styles/styles.css'
import Background from '../images/header/1.jpg'
const totalImages = 3;
var randomImageIndex = Math.floor(Math.random() * totalImages) + 1;
var randomImagePath = '../images/header/' + randomImageIndex + '.jpg';

const Header = () => {

	const totalImages = 3;
	const randomImageIndex = Math.floor(Math.random() * totalImages) + 1;
	
	// const style = {backgroundImage: 'url(../images/header' + randomImageIndex +  '.jpg)'}
	// const style = {backgroundImage: Background}
	// console.log(style)

	return (
		<header>
			{/* <img src={`./header/${randomImageIndex}.jpg`} className="randomHeader"/> */}
			{/* <img src={`../images/header/${randomImageIndex}.jpg`} className="randomHeader"/> */}
			<img src={Background} className="randomHeader"/>
		</header>
  )
}

export default Header