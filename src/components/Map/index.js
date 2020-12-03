import React, {useState} from "react";
import { motion, useAnimation } from "framer-motion";
import ImageGallery from "../ImageGallery";
import map from "../../assets/images/map.png";
import pin from "../../assets/images/pin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const Map = () => {

	// setting the opacity hook to 0
	const [opacity, setOpacity] = useState("0");

	// The controls below enable the pins and line to appear simultaneously
	const controls = useAnimation();

	const pinsEnter = () => {
		controls.start({
			y: "15%",
			opacity: 1,
			transition: {duration: 0.5}
		})	
		showHideText("1");	
	}

	const pinsLeave = () => {
		controls.start({
			y: "-25%",
			opacity: 0,
			transition: {
				duration: 0.5
			}
		})
		showHideText("0");	

	}	

	// passing in the desired number to set opacity, based on whether the mouse has entered or left the map container
	const showHideText = (number) => {
		setOpacity(number);
	}
	

	return(
		<div>
			<div className="mapContainer" onMouseEnter={pinsEnter} onMouseLeave={pinsLeave}>
				<img id="map" src={map} alt="a world map" />
				<motion.img id="pin1" src={pin} alt="a pin" animate={controls} initial={{opacity: 0}}/>
				<motion.img id="pin2" src={pin} alt="a pin" animate={controls} initial={{opacity: 0}}/>
				<FontAwesomeIcon icon={faPlane} id="plane" style={{opacity: opacity}}></FontAwesomeIcon>
				<div id="journeyText" style={{opacity: opacity}}>
					I moved to Austin in 2018 to be with my wife,
					so we could start building our lives together.
				</div>
			</div>
			{/* Interactive images go below */}
			<div id="imageTextArea">
				<ImageGallery />
				<div id="myText">
					<p>As an English native and having experience that was almost exclusively based in the food
						and beverage industry, moving careers was a big decision, but one that I took to quickly.
					</p>
					<p>
						After getting married in 2016, my wife and I moved to Austin in 2018, and I began working
						at a small biscuit sandwich shop called <b>Bird Bird Biscuit</b>. Since then I've recieved a
						promotion to the role of manager and I'm lucky enough to be one of the chief biscuit makers!
					</p>
					<p>
						I then went on to complete a Full Stack Web Development Bootcamp at UT Austin, and graduated
						with flying colors. <b>JavaScript</b> makes sense to me on a logical level, and although we all had
						some difficulties along the way (looking at you, <b>Redux</b>), overall I greatly enjoyed
						learning my first programming language. Since then I've been focusing most of my attention on refining
						my fundamental skills, ironing out any <b>React</b> creases, and learning <b>PHP</b> with a focus on 
						<b> Laravel</b>.
					</p>
					<p>Using the skills I gained through the bootcamp, I was hired by the owner of Bird Bird Biscuit to create
						a Thanksgiving themed ordering form, where guests can place orders in 6 packs. It went off without a
						hitch, and we ended up selling just under a thousand biscuits! For my first freelance project, I'm very
						proud of the work I put in. If you want to check out my other projects, head over to my 
						<a href="https://github.com/seanbelverstone"> GitHub</a> or look at my 3 best on the 
						<a href="/projects"> Projects page</a>.
					</p>
					<h3>Thank you for taking the time to view my portfolio and please use the <a href="/contact">Contact page</a> if you'd
					 like to reach out!</h3>
				</div>
			</div>

		</div>
	)
}

export default Map;
