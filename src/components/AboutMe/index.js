import React from "react";
import Grid from '@material-ui/core/Grid';
import me from "../../assets/images/me.jpg"
import "./style.css";

class AboutMe extends React.Component {
	render() {
		return(
			<Grid className="aboutMeSection">
				<Grid item xs={12}>
					<p id="title">From Full English to Full Stack</p>
				</Grid>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={6}id="aboutText">
						<p>As an Englishman who's spent most of his career in the catering industry, I've made a smooth transition over to web development. After completing a Full Stack Web Developer bootcamp at UT Austin, I am now proficient in React, Javascript, Node.js, Express, HTML & CSS, among other programs, libraries and frameworks.</p>
						<p>With a keen eye for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team.</p>
						<p>Continue below to see my story...</p>
					</Grid>
					<Grid item xs={4}>
						<img src={me} alt="me" id="me" />
					</Grid>
				</Grid>
			</Grid>
		)
	}

}

export default AboutMe;