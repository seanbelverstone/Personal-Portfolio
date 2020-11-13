import React from "react";
import me from "../../assets/images/me.jpg"
import "./style.css";

class AboutMe extends React.Component {
	render() {
		return(
			<div className="aboutMeSection">
				<h2>From Chef to Coder</h2>
				<img src={me} alt="me" id="me" />
			</div>
		)
	}

}

export default AboutMe;