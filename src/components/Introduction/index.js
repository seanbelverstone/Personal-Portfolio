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
				<Grid className="introduction">
					<Grid item xs={12}>
						<p id="title">Sean Belverstone</p>
					</Grid>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={6}id="introText">
							<p>Full Stack Web Developer with a keen eye for design.</p>
							
							<div>My skills include: <TextLooper id="textLoop"/></div>

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