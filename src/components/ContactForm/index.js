import React, {useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const ContactForm = () => {
	const classes = useStyles();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	

	const sendEmail = () => {
		return console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
	}



  return (
    <form className={classes.root} noValidate autoComplete="off" id="formWrapper">
		<div className="formContainer">
			<Grid item xs={12}>
				<TextField id="outlined-basic" value={name} onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
				<TextField id="outlined-basic" value={email} onChange={(event) => setEmail(event.target.value)} label="Email" variant="outlined" />
				<TextField id="outlined-basic" value={phone} onChange={(event) => setPhone(event.target.value)} label="Phone" variant="outlined" />
			</Grid>
			<Grid>
				<p id="messageLabel">Enter your message below</p>
				<TextareaAutosize id="outlined-basic" value={message} onChange={(event) => setMessage(event.target.value)} className="message" label="Message" variant="outlined" rowsMin={6} />
			</Grid>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				endIcon={<FontAwesomeIcon icon={faPaperPlane}/>}
				onClick={sendEmail}
				>
				Send
      		</Button>
      	</div>
    </form>
  );
}

export default ContactForm;