import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function SearchHeader(props) {
    const useStyles = makeStyles(theme => ({
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
        textField: {},
        dense: {},
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
        },
        disabled: {},
        focused: {},
        error: {}
    }))
    
    const classes = useStyles()
    console.log(process.env.REACT_APP_API_KEY)
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
                    onChange={props.searchValue}
                    margin='normal'
                    variant='filled'
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

                    
                    <Link to='/search'>
                        <Button variant='contained' className={classes.searchButton}>
                            SEARCH
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
