import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./style.css";

const Main = () => {
	const controls = useAnimation();

	const animateName = (event) => {
		controls.start({
			y: "-100%",
			transition: {duration: 1}
		})
	};

	return(
		<div className="container">
			<motion.div id="mainBlock" animate={controls}>
				<h1 className="name">Sean</h1>
				<h1 className="name">Belverstone.</h1>
				<button id="enter" onClick={animateName}>Enter</button>
				<h4 id="role">Full Stack Developer.</h4>
			</motion.div>
		</div>


		)
}

export default Main;