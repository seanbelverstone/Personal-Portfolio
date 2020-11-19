import React from 'react';
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

const setScroll = (event) => {
  console.log(event.view.location.hash)
  let hash = event.view.location.hash;
  let area;

  switch (hash) {
    case "#projects":
      area = 1000;
      break;
    case "#aboutMe":
      area = 1500;
      break;
    case "#contact":
      area = 2000;
      break;
    default:
      area = 0
      break;
  }
  executeScroll(area)
}

const executeScroll = (area) => {
  window.scrollTo({
    top: area,
    behavior: "smooth"
  })

}


const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction onClick={setScroll} href="#introduction" label="Introduction" icon={<FontAwesomeIcon icon={faFileCode} className="icons" />} />
    <BottomNavigationAction onClick={setScroll} href="#projects" label="Projects" icon={<FontAwesomeIcon icon={faFileCode} className="icons" />} />
    <BottomNavigationAction onClick={setScroll} href="#aboutMe" label="About Me" icon={<FontAwesomeIcon icon={faUser} className="icons" />} />
    <BottomNavigationAction onClick={setScroll} href="#contacts" label="Contact" icon={<FontAwesomeIcon icon={faEnvelopeOpenText} className="icons" />} />
    </BottomNavigation>
  );
}

export default Navigation