import React, {useEffect, useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const EmailPopup = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  // Use effect now only runs when the items in the list [] change
  useEffect(() => {
    setOpen(props.emailSent)
    }, [props.emailSent]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your email was sent successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EmailPopup