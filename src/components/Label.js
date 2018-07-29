
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { compose } from 'redux'
import { connect } from 'react-redux';

import Product from './Product'
import fleurblanche from '../images/fleurblanche.jpg';
import fleurblancheverte from '../images/fleurblancheverte.jpg';
import EtiquetteRonde from '../images/EtiquetteRonde.jpg';
import EtiquetteArdoise from '../images/EtiquetteArdoise.jpg';
import PetiteEtiquette from '../images/PetiteEtiquette.jpg';
import planteEtiquette from'../images/planteEtiquette.jpg'
import EtiquetteGraveeVerte from'../images/EtiquetteGraveeVerte.jpg'
import *  as labelActions from '../redux/modules/label';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '40px 0',
    height: '60vh'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

});

class Home extends React.Component {
  componentDidMount() {
    const { fetchLabels } = this.props

    fetchLabels()
  }

  render () {
    const { classes, items, isLoading } = this.props

    if (isLoading) {
      return (
        <div style={{padding: 60, textAlign: 'center'}}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      )
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {items.map(tile => (
              <Grid item xs={3} key={tile.id}>
                <Paper className={classes.paper}>
                <Product id={tile.id} src={tile.img} alt={tile.title} title={tile.title} />
                </Paper>
              </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ labelReducer }) => ({
  isLoading: labelReducer.isLoading,
  items: labelReducer.items
})

export default compose(
  connect(mapStateToProps, labelActions),
  withStyles(styles)
)(Home);

