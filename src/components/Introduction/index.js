import React from "react";
import Grid from '@material-ui/core/Grid';
import Map from "../Map";
import TextLooper from "../TextLooper";
import lookingAtTheSea from "../../assets/images/lookingAtTheSea.jpg"
import "./style.css";

class Introduction extends React.Component {
	render() {
		return(
			<div>
				<Grid className="introduction" navigation="introduction">
					<Grid item xs={12}>
						<p id="firstLine">Hi there, my name is</p>
						<p id="title">Sean Belverstone</p>
					</Grid>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={8}id="introText">
							<p>I'm a Full Stack Web Developer, and I design and build website applications. Feel free to peruse my projects below, or reach out to me via the contact form.</p>
							
							<div>I have a number of skills, including: <TextLooper id="textLoop"/></div>

						</Grid>
						<Grid item xs={12}>
							<img src={lookingAtTheSea} alt="me" id="me" />
						</Grid>
					</Grid>
				</Grid>
				{/* Animated map below */}
				<Map />
			</div>
		)
	}

}

export default Introduction;