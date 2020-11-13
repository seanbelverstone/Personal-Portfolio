import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AboutMe from "../AboutMe";
import plane from "../../assets/images/bluePlane.png";
import "./style.css";

const Main = () => {
	// Using hooks, creating a state of style to be "0"
	const [style, setStyle] = useState("0");
	// also making it so the main section disappears after the animation
	const [main, setMain] = useState("block");

	// controls allow us to control the animation at will
	const controls = useAnimation();

	const animateName = () => {
		controls.start({
			y: "-100%",
			transition: {duration: 1}
		});
		// Fire the displayBlock function after 1.2 seconds
		setTimeout(() => displayBlock(), 1200);
	};

	// hides the main block and brings the AboutMe component into view by setting the opacity to 1
	const displayBlock = () => {
		setMain("none")
		setStyle("1")
	}

	const variants = {
		visible: {
			opacity: [0, 0, 1, 0, 0],
			scale: [15, 15, 15, 15, 0],
			rotate: 360,
		},
		hidden: {opacity: 0}
	}

	return(
		<div className="container">
			<motion.div id="mainBlock" animate={controls} style={{display: main}}>
				<h1 className="name">Sean</h1>
				<h1 className="name">Belverstone</h1>

				<motion.button whileHover={{ scale: 1.1}} infinite whileTap={{ scale: 0.9}} id="enterDiv">
					<FontAwesomeIcon icon={faGlobeAmericas} id="enter" onClick={animateName}></FontAwesomeIcon>
				</motion.button>

				<motion.div 
					id="planeDiv" 
					initial="hidden"
					animate={"visible"}
					variants={variants} 	
					transition={{
						duration: 1.5, 
						loop: Infinity,
						delay: 1,
						repeatType: "reverse",
						repeatDelay: 1
						}}
						>
					<FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
				</motion.div>

				<h4 id="role">Full Stack Developer.</h4>
			</motion.div>
			<div style={{
				opacity: style,
				transition: "1s ease-in-out"
				}}>
				<AboutMe />
			</div>
		</div>


		)
}

export default Main;