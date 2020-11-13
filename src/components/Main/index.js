import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AboutMe from "../AboutMe";
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

	// shows the div below
	const displayBlock = () => {
		setMain("none")
		setStyle("1")
		console.log("done")
	}

	return(
		<div className="container">
			<motion.div id="mainBlock" animate={controls} style={{display: main}}>
				<h1 className="name">Sean</h1>
				<h1 className="name">Belverstone.</h1>
				<button id="enter" onClick={animateName}>Enter</button>
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