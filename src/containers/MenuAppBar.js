import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Label from '@material-ui/icons/Label';
import LocalPhone from '@material-ui/icons/LocalPhone';
import FilterVintage from '@material-ui/icons/FilterVintage';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Search from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import fleurblanchev from '../images/fleurblanchev.jpg';


const StyledHeader = styled.header`
background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${fleurblanchev});
background-size: cover;
background-position: bottom;
    }

p{
    margin: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    color: green;
    font-style: italic;
    font-size: 60px;
}

`;
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
   
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (

        <StyledHeader>
      <div className={classes.root}>

    
        <p>Les prestations vertes</p>  
        
       
        <AppBar position="static" style={{ backgroundColor: '#009688' }}>
          <Toolbar>
          <IconButton href="/Home" className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon /> 
            </IconButton>                   
            <Typography variant="title" color="inherit" className={classes.flex}>
             Accueil
            </Typography>

            <IconButton href="/Plant" className={classes.menuButton} color="inherit" aria-label="Menu">
            <FilterVintage /> 
            </IconButton>                     
            <Typography variant="title" color="inherit" className={classes.flex}>
              Plantes
            </Typography>

            <IconButton href='/Label' className={classes.menuButton} color="inherit" aria-label="Menu">     
              <Label />
              </IconButton>  
              <Typography variant="title" color="inherit" className={classes.flex}>
              Etiquettes
            </Typography>

             <IconButton href='/Contact' className={classes.menuButton} color="inherit" aria-label="Menu">     
              <LocalPhone/>
              </IconButton>  
              <Typography variant="title" color="inherit" className={classes.flex}>
              Contact
            </Typography>
            
              <input type ="text" onChange={this.handleChange.bind(this)} placeholder= "Rechercher" />
              <IconButton href='/Search' className={classes.menuButton} color="inherit" aria-label="Menu">
              <Search/>
                </IconButton>
            
            <IconButton href='/Cart' className={classes.menuButton} color="inherit" aria-label="Menu">
            <AddShoppingCart/>
              </IconButton>
            
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose} href='/Login'>Compte</MenuItem>
                  <MenuItem onClick={this.handleClose} href='/Register'>Inscription</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      </StyledHeader>
    );
  }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuAppBar);


  
