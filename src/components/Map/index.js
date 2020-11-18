import React, {useState} from "react";
import { motion, useAnimation } from "framer-motion";
import ImageGallery from "../ImageGallery";
import map from "../../assets/images/map.png";
import pin from "../../assets/images/pin.png";
import "./style.css";

const Map = () => {

	const [opacity, setOpacity] = useState("0");

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

	const showHideText = (number) => {
		setOpacity(number);
	}
	

	return(
		<div>
			<div className="mapContainer" onMouseEnter={pinsEnter} onMouseLeave={pinsLeave}>
				<img id="map" src={map} alt="a world map" />
				<motion.img id="pin1" src={pin} alt="a pin" animate={controls} initial={{opacity: 0}}/>
				<motion.img id="pin2" src={pin} alt="a pin" animate={controls} initial={{opacity: 0}}/>
				<div id="lines" style={{opacity: opacity}}>------</div>
				<div id="journeyText" style={{opacity: opacity}}>
					I moved to Austin in 2018 to be with my wife,
					<br />
					so we could start building our lives together.
				</div>
			</div>
			<ImageGallery />
		</div>
	)
}

export default Map;
