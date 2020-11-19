import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import tileData from "./tileData";
import "./style.css";


const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
	},
	gridList: {
		width: 500,
		height: 450,
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	titleBar: {
		background:
			'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
			'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
		},
		icon: {
		color: 'white',
		},
	}	
));


// data-src={tile.img}


const ImageGallery = () => {
	const classes = useStyles();

	const largeImage = (event) => {
		// store the data-src attribute in imageTarget
		let imageTarget = event.target.getAttribute("data-src");

		// if imageTarget returns null, use the farthestViewportElement instead, which is the parent essentially.
		if (!imageTarget) {
			imageTarget = event.target.farthestViewportElement.getAttribute("data-src");
			console.log(imageTarget);
		}
	}


  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
			  titlePosition="top"
			  subtitle={tile.date}
              actionIcon={
				//   maybe use this icon to pop a modal out and see the picture full screen?
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon} onClick={largeImage} data-src={tile.img}>
                  <FontAwesomeIcon icon={faEye} data-src={tile.img}/>
                </IconButton>
              }
              actionPosition="left"
			  className={classes.titleBar}
			  data-src={tile.img}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ImageGallery;