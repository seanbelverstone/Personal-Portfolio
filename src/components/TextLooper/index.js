import React from "react";
import TextLoop from "react-text-loop";
import "./style.css";
 
const skills = [
	"HTML",
	"CSS",
	"Javascript",
	"React",
	"Redux",
	"Node.js",
	"Express.js",
	"jQuery",
	"MySQL",
	"Sequelize",
	"Mongo",
	"Mongoose",
	"PHP"
]

class TextLooper extends React.Component {
    render() {
        return (
            <TextLoop children={skills}/>
        );
    }
}

export default TextLooper;