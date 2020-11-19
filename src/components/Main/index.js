import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../Navbar";
import Introduction from "../Introduction";
import "./style.css";

const Main = () => {
	// Using hooks, creating a state of style to be "0"
	const [aboutMeOpacity, setAboutMeOpacity] = useState("0");

	const [aboutMeDisplay, setAboutMeDisplay] = useState("none");
	// also making it so the main section disappears after the animation
	const [main, setMain] = useState("block");

	// controls allow us to control the animation at will
	const controls = useAnimation();

	const animateName = () => {
		controls.start({
			y: "-100%",
			transition: {duration: 1}
		});
		setAboutMeDisplay("block");
		// Fire the displayBlock function after 1.2 seconds
		setTimeout(() => displayBlock(), 1200);
	};

	// hides the main block and brings the AboutMe component into view by setting the opacity to 1
	const displayBlock = () => {
		setMain("none");
		setAboutMeOpacity("1");
	}

	const variants = {
		visible: {
			opacity: [0, 0, 1, 0, 0],
			scale: [17, 17, 17, 17, 17],
			rotate: 720,
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
					id="spinner" 
					initial="hidden"
					animate={"visible"}
					variants={variants} 	
					transition={{
						duration: 4, 
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
				display: aboutMeDisplay,
				opacity: aboutMeOpacity,
				transition: "opacity 1s ease-in-out"
				}}>
				<Navigation />
				<Introduction />
			</div>
		</div>


		)
}

export default Main;