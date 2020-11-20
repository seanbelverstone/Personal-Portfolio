import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Recaptcha from "react-google-invisible-recaptcha";
import emailjs from "emailjs-com"
import EmailPopup from "../EmailPopup";
import "./style.css";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formControls: {
				name: {
					value: ""
				},				
				email: {
					value: ""
				},
				phone: {
					value: ""
				},
				message: {
					value: ""
				},
			},
			emailSent: false
		}
		this.changeHandler = this.changeHandler.bind(this);
	}	

	changeHandler(event) {
		const currentName = event.target.name;
		const value = event.target.value;

		// sets the state to what each one equals on change
		this.setState({
			formControls: {
				...this.state.formControls,
				[currentName]: {
					...this.state.formControls[currentName],
					value
				}
			}
			});
		}

	// Begins validation of user for recaptcha
	checkRecaptcha = () => {
		this.recaptcha.execute();
	}

	// if recaptcha is successful, fire this function
	sendEmail = () => {
		// Store the state into an object
		const data = {
			name: this.state.formControls.name.value,
			email: this.state.formControls.email.value,
      		phone: this.state.formControls.phone.value,
      		message: this.state.formControls.message.value
		};
		// Use emailjs to send an email
		emailjs.send("gmail", "portfolio_template", data, process.env.REACT_APP_EMAILJS_USER_ID)
			.then(response => {
				console.log(`Success! Response status: ${response.status} & text: ${response.text}`);
				// built in function that clears the form after it succeeds
				this.form.reset();
				this.setState({
					emailSent: true
				})
			}, (err => {
				console.log("Whoops, that failed.")
			}));
	}

	render() {
		return (
			<form className="formWrapper" noValidate autoComplete="off" ref={c => this.form = c}>
				<div className="formContainer">
					<Grid item xs={12} id="topLine">
						<TextField className="outlined-basic" id="name" value={this.state.name} onChange={this.changeHandler} label="Name" name="name" variant="outlined" />
						<TextField className="outlined-basic" id="email" value={this.state.email} onChange={this.changeHandler} label="Email" name="email" variant="outlined" />
						<TextField className="outlined-basic" id="phone" value={this.state.phone} onChange={this.changeHandler} label="Phone" name="phone" variant="outlined" />
					</Grid>
					<Grid>
						<p id="messageLabel">Enter your message below</p>
						<TextareaAutosize className="outlined-basic" id="message" value={this.state.message} onChange={this.changeHandler} label="Message" name="message" variant="outlined" rowsMin={6} />
					</Grid>
					<Button
						variant="contained"
						color="primary"
						className="button"
						endIcon={<FontAwesomeIcon icon={faPaperPlane}/>}
						onClick={this.checkRecaptcha}
						>
						Send
					</Button>
				</div>
				<Recaptcha 
					ref={ref => this.recaptcha = ref}
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_ID}
					onResolved={this.sendEmail}
					/>
				<EmailPopup emailSent={this.state.emailSent}/>
			</form>
		);
	}
}

export default ContactForm;