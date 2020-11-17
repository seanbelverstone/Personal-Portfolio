import React from "react";
import plane from "../../assets/images/bluePlane.png";
import map from "../../assets/images/map.png";
import "./style.css";

const Map = () => {
	

	return(
		<div className="container">
			<img id="map" src={map} alt="a world map"/>
		</div>
	)
}

export default Map;
