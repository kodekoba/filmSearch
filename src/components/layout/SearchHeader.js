import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchButton:{
    float: 'right',
    textDecoration: 'none',
    backgroundColor: '#EB5757',
    color: '#F5F5F5',
    border: 'none',
    padding: '5px 70px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#E86D6D',
    },
  },
  searchByButtonOn:{
    margin: '0 10px',
    textDecoration: 'none',
    backgroundColor: '#EB5757',
    color: '#F5F5F5',
    border: 'none',
    padding: '3px 40px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#E86D6D',
    },
  },
  searchByButtonOff:{
    margin: '0 10px',
    textDecoration: 'none',
    backgroundColor: '#333333',
    color: '#828282',
    border: 'none',
    padding: '3px 40px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#333333',
      cursor: 'default',
    },
  },
  menu: {
    width: 200,
  },
  customTextunderline: {
    '&:before': {
      borderBottom: '2px solid white'
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: '2px solid white'
    },
    '&:after': {
      borderBottom: '3px solid red'
    }
  }
});

class SearchHeader extends Component {
  
  state = {
    searchValue: ''
  }
  
  constructor(props) {
    super(props);
  }
  
  onSearchUpdate = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  }
  
  render() {
    
    const { classes } = this.props;
    
    return (
      <header className="blackBackground">
        <div className='pictureStyle'>
          <title className="filmSearchTitle">
            filmSearch
          </title>

          <h2 className="findYourMovie">FIND YOUR MOVIE</h2>
          <TextField
            id='filled-search'
            label='Click here to search by movie or director! '
            placeholder='Search.. ┌(▀Ĺ̯ ▀-͠ )┐'
            type='search'
            fullWidth
            margin='normal'
            variant='filled'
            onChange={this.onSearchUpdate}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: 'black',
              },
              classes: {
                underline: classes.customTextunderline
              }
            }}
            InputLabelProps={{
              style: { color: '#828282' },
            }}
          />

          <div className="searchByDiv">
            SEARCH BY
            
            <Button variant='contained' className={classes.searchByButtonOn}>
               TITLE
            </Button>
            
            <Button variant='contained' className={classes.searchByButtonOff}>
              DIRECTOR
            </Button>
                    
            <Button variant='contained' className={classes.searchButton} onClick={()=>this.props.searchValue(this.state.searchValue)}>
              SEARCH
            </Button>
          </div>
            
        </div>
      </header>
    )
  }
}

SearchHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchHeader);
