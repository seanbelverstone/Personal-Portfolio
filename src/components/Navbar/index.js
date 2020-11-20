import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUser, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const useStyles = makeStyles({
  root: {
	width: "100%",
	flexGrow: 1,
	position: "fixed",
	zIndex: "2",
	boxShadow: "2px 2px 2px black",
	padding: "10px",
	opacity: 0.9
},
});

const Navigation = () => {

  // set the hash at the end of the URL to be blank on page load
  // useEffect(() => window.location.hash = "")

  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href="/" label="Introduction" icon={<FontAwesomeIcon icon={faFileCode} className="icons" />} />
      <BottomNavigationAction href="/projects" label="Projects" icon={<FontAwesomeIcon icon={faFileCode} className="icons" />} />
      <BottomNavigationAction href="/about" label="About Me" icon={<FontAwesomeIcon icon={faUser} className="icons" />} />
      <BottomNavigationAction href="/contact" label="Contact" icon={<FontAwesomeIcon icon={faEnvelopeOpenText} className="icons" />} />

    </BottomNavigation>
  );
}

export default Navigation