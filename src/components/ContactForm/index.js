import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import Recaptcha from "react-google-invisible-recaptcha";
// set up recaptcha
import emailjs from "emailjs-com"
import "./style.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

// const classes = useStyles();

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
			}
			
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

	sendEmail = () => {
		// Store the state into an object
		const data = {
			name: this.state.formControls.name.value,
			email: this.state.formControls.email.value,
      		phone: this.state.formControls.phone.value,
      		message: this.state.formControls.message.value
		};
		// Use emailjs to send an email
		emailjs.send("gmail", "portfolio_template", data, "user_hCtShpO14VJ1zNpxU2xRi")
			.then(response => {
				console.log(`Success! Response status: ${response.status} & text: ${response.text}`);
				// built in function that clears the form after it succeeds
				this.form.reset();
			}, (err => {
				console.log("Whoops, that failed.")
			}));
	}

	render() {
		return (
			<form className="formWrapper" noValidate autoComplete="off" ref={c => this.form = c}>
				<div className="formContainer">
					<Grid item xs={12}>
						<TextField id="outlined-basic" value={this.state.name} onChange={this.changeHandler} label="Name" name="name" variant="outlined" />
						<TextField id="outlined-basic" value={this.state.email} onChange={this.changeHandler} label="Email" name="email" variant="outlined" />
						<TextField id="outlined-basic" value={this.state.phone} onChange={this.changeHandler} label="Phone" name="phone" variant="outlined" />
					</Grid>
					<Grid>
						<p id="messageLabel">Enter your message below</p>
						<TextareaAutosize id="outlined-basic" value={this.state.message} onChange={this.changeHandler} className="message" label="Message" name="message" variant="outlined" rowsMin={6} />
					</Grid>
					<Button
						variant="contained"
						color="primary"
						className="button"
						endIcon={<FontAwesomeIcon icon={faPaperPlane}/>}
						onClick={this.sendEmail}
						>
						Send
					</Button>
				</div>
			</form>
		);
	}
}

export default ContactForm;