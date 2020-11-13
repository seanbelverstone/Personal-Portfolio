import React from "react";
import { motion } from "framer-motion";
import "./style.css";

class Main extends React.Component {
	render() {
		return(
			<div className="container">
				<motion.div animate={{}} className="nameBlock">
					<h1 className="name">Sean</h1>
					<h1 className="name">Belverstone.</h1>
				</motion.div>
				<motion.div animate={{}} className="roleBlock">
					<h4 id="role">Full Stack Developer.</h4>
				</motion.div>
			</div>


		)
	}
}

export default Main;