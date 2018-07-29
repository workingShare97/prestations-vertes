
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
//import tileData from 'tileData';

import Product from './Product'

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
    maxWidth: 1200,
    margin: '0 auto',
    padding: '40px 0'
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
    id: 1,
    img: fleurblancheverte,
    title: 'fleur blanche et verte',
    featured: true,
   },
   {
    id:2,
    img: fleurblanche,
    author: 'author',
    featured: true,
    title: 'fleur Blanche',
    author: 'author',
    
   },

   {
    id:3,
    img: EtiquetteRonde,
    title: 'Etiquette Ronde',
    author: 'author',
   },

   {
    id:4,
    img: EtiquetteArdoise,
    title: 'Etiquette Ardoise',
    author: 'author',
   },
   {
     id:5,
    img: EtiquetteGraveeVerte,
    title: 'Etiquette Gravée Verte',
    author: 'author',
    featured: true,

   },
   {
     id:6,
    img: planteEtiquette,
    title: 'Plante étiquettée',
    author: 'author',
    featured: true
   },
 ];

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ?  2: 1} rows={tile.featured ? 3 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="bottom"
            />
          </GridListTile>
        ))}
      </GridList> */}
      <Grid container spacing={24}>
        {tileData.map(tile => console.log(tile) || (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
              <Product id={tile.id} src={tile.img} alt={tile.title} title={tile.title} />
              </Paper>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

