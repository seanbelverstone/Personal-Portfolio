import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AboutMe from "../AboutMe";
import "./style.css";

const Main = () => {
	// Using hooks, creating a state of style to be "none"
	const [style, setStyle] = useState("0");


	// controls allow us to control the animation at will
	const controls = useAnimation();

	const animateName = () => {
		controls.start({
			y: "-100%",
			transition: {duration: 1}
		});
		// Fire the displayBlock function after 2 seconds
		setTimeout(() => displayBlock(), 2000);
	};

	// shows the div below
	const displayBlock = () => {
		setStyle("1")
		console.log("done")
	}

	return(
		<div className="container">
			<motion.div id="mainBlock" animate={controls}>
				<h1 className="name">Sean</h1>
				<h1 className="name">Belverstone.</h1>
				<button id="enter" onClick={animateName}>Enter</button>
				<h4 id="role">Full Stack Developer.</h4>
			</motion.div>
			<div style={{
				opacity: style,
				transition: "0.6s ease-in"
				}}>
				<AboutMe />
			</div>
		</div>


		)
}

export default Main;