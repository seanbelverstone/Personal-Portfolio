import React from "react";
import me from "../../assets/images/me.jpg"

class AboutMe extends React.Component {
	render() {
		return(
			<div>
				<img src={me} alt="me" />
			</div>
		)
	}

}

export default AboutMe;