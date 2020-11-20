import React from "react";
import Grid from "@material-ui/core/Grid"
import Navigation from "../../components/Navbar";
import ProjectCarousel from "../../components/ProjectCarousel";

const Projects = () => {
	return(
		
	<Grid>
		<Navigation />
		<ProjectCarousel />
	</Grid>
	)
}

export default Projects;