
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import tileData from 'tileData';

import fleurblanche from '../images/fleurblanche.jpg';
import fleurblancheverte from '../images/fleurblancheverte.jpg';
import EtiquetteRonde from '../images/EtiquetteRonde.jpg';
import EtiquetteArdoise from '../images/EtiquetteArdoise.jpg';
import PetiteEtiquette from '../images/PetiteEtiquette.jpg';
import planteEtiquette from'../images/planteEtiquette.jpg'
import EtiquetteGraveeVerte from'../images/EtiquetteGraveeVerte.jpg'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '50%',
    height: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

});

const tileData = [
  {
    img: fleurblancheverte,
    title: 'fleur blanche et verte',
    featured: true,
   },
   {
   
    img: fleurblanche,
    author: 'author',
    featured: true,
    title: 'fleur Blanche',
    author: 'author',
    
   },

   {
    img: EtiquetteRonde,
    title: 'Etiquette Ronde',
    author: 'author',
   },

   {
    img: EtiquetteArdoise,
    title: 'Etiquette Ardoise',
    author: 'author',
   },
   {
    img: EtiquetteGraveeVerte,
    title: 'Etiquette Gravée Verte',
    author: 'author',
    featured: true,

   },
   {
    img: planteEtiquette,
    title: 'Plante étiquettée',
    author: 'author',
    featured: true,

   },
 ];

function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ?  2: 1} rows={tile.featured ? 3 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="bottom"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);

