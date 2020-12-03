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
				<p id="myText">As an English native and having experience that was almost exclusively based in the food
					and beverage industry, moving careers was a big decision, but one that I took to quickly.

				</p>
			</div>

		</div>
	)
}

export default Map;
