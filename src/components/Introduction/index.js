import React from "react";
import Grid from "@material-ui/core/Grid";
import TextLooper from "../TextLooper";
import lookingAtTheSea from "../../assets/images/lookingAtTheSea.jpg"
import githubLogo from "../../assets/images/github.png";
import linkedInLogo from "../../assets/images/linkedin.png";
import "./style.css";

class Introduction extends React.Component {
	render() {
		return(
			<div>
				<Grid className="introduction" navigation="introduction">
				<Grid item xs={12} className="links">
					<a className="logo" href="https://github.com/seanbelverstone">
                        <img src={githubLogo} alt="GitHub logo" id="github" />
                    </a>
					<a className="logo" href="https://drive.google.com/file/d/1fXTNVPvD0wRBIUyHc-Y8QWaxbEOjTLP0/view?usp=sharing" id="resume">
                        Resume
                    </a>
                    <a className="logo" href="https://www.linkedin.com/in/sean-belverstone/">
                        <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                    </a>
				</Grid>
					<Grid item xs={12}>
						<p id="firstLine">Hi there, my name is</p>
						<p id="title">Sean Belverstone</p>
					</Grid>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={8}id="introText">
							<p>I'm a Full Stack Web Developer, and I design and build website applications. Feel free to peruse my projects or reach out to me via the contact form.</p>
							
							<div>I have a number of skills, including: <TextLooper id="textLoop"/></div>

						</Grid>
						<Grid item xs={12}>
							<img src={lookingAtTheSea} alt="me" id="me" />
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}

}

export default Introduction;