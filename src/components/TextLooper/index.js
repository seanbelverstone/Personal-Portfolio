import React from "react";
import TextLoop from "react-text-loop";
import "./style.css";
 
const skills = [
	"HTML",
	"CSS",
	"Javascript",
	"React",
	"Redux",
	"Node",
	"Express"
]

class TextLooper extends React.Component {
    render() {
        return (
            <TextLoop children={skills}/>
        );
    }
}

export default TextLooper;