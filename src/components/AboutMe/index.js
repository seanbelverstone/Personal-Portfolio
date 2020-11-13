import React from "react";
import me from "../../assets/images/me.jpg"
import "./style.css";

class AboutMe extends React.Component {
	render() {
		return(
			<div className="aboutMeSection">
				<p id="title">From Chef to Coder</p>
				<img src={me} alt="me" id="me" />
			</div>
		)
	}

}

export default AboutMe;