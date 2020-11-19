import React from "react";
import Grid from '@material-ui/core/Grid';
import Map from "../Map";
import TextLooper from "../TextLooper";
import me from "../../assets/images/me.jpg"
import "./style.css";

class AboutMe extends React.Component {
	render() {
		return(
			<div>
				<Grid className="aboutMeSection">
					<Grid item xs={12}>
						<p id="title">From Full English to Full Stack</p>
					</Grid>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={6}id="aboutText">
							<p>Full Stack Web Developer with a keen eye for design.</p>
							
							<p>My skills include: <TextLooper id="textLoop"/></p>
						</Grid>
						<Grid item xs={4}>
							<img src={me} alt="me" id="me" />
						</Grid>
					</Grid>
				</Grid>
				{/* Animated map below */}
				<Map />
			</div>
		)
	}

}

export default AboutMe;