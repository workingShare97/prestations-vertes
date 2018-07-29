import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import styled from 'styled-components'
import fleurblanchev from '../images/fleurblanchev.jpg';


const StyledFooter = styled.footer`
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: White;
    height: 100px;
    display: flex;
    font-style: italic;   
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${fleurblanchev});
    background-size: cover;
    background-position: bottom;
        }
    }

    p{
     
  }
`;

const styles = {
    root: {
      width: 500,
    },
  };
  
  class LabelBottomNavigation extends React.Component {
    state = {
      value: 'recents',
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <StyledFooter/>
      );
    }
  }
  
  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LabelBottomNavigation);