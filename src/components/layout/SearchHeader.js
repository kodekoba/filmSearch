import React from 'react'
import { Link } from 'react-router-dom'

// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
// import { createMuiTheme } from '@material-ui/core/styles'
// import { ThemeProvider } from '@material-ui/styles'
// import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function SearchHeader(props) {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {},
        dense: {
            // marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
        customTextunderline: {
            "&:before": {
                borderBottom: "2px solid white"
            },
            "&:hover:not($disabled):not($focused):not($error):before": {
                borderBottom: "2px solid white"
            },
            "&:after": {
                borderBottom: "3px solid red"
            }
        },
        disabled: {},
        focused: {},
        error: {}
    }))

    const classes = useStyles()
    
    return (
        <header style={blackBackground}>
            <div style={pictureStyle}>
                <title style={filmSearchTitle}>
                    filmSearch
                </title>
                <h2 style={findYourMovie}>FIND YOUR MOVIE</h2>
                {/* <input style={inputStyle} placeholder="Search for a movie or director!" /> */}
                <TextField
                    id="filled-search"
                    label="Click here to search by movie or director! "
                    placeholder="Search.. ┌(▀Ĺ̯ ▀-͠ )┐"
                    type="search"
                    className={classes.textField}
                    fullWidth
                    onChange={props.searchValue}
                    margin="normal"
                    variant="filled"
                    InputProps={{
                        style: searchStyle,
                        classes: {
                            underline: classes.customTextunderline
                        }
                    }}
                    InputLabelProps={{
                        style: { color: '#828282' },
                    }}
                />
                <div style={searchByDiv}>
                    SEARCH BY
                    <Button variant="contained" style={searchByButtonOn}>
                        TITLE
                    </Button>
                    <Button variant="contained" style={searchByButtonOff}>
                        DIRECTOR
                    </Button>

                    
                    <Link to="/search">
                        <Button variant="contained" style={searchButton}>
                            SEARCH
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
const searchStyle = {
    color: 'white',
    backgroundColor: 'black',
}

const blackBackground = {
    backgroundColor: 'black',
    minHeight: '300px'
}

const pictureStyle = {
    margin: '0px auto',
    backgroundImage: "url('./public/headerBG.jpg')",
    backgroundRepeat: 'no-repeat',
    // backgroundSize: '80%',
    backgroundSize: 'auto',
    width: '80%',
    minHeight: '300px'
}

const filmSearchTitle = {
    display: 'inline-block',
    margin: '20px 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#EB5757'
}

const findYourMovie = {
    margin: '25px 0 0 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    // lineHeight: '37px',
    color: '#F5F5F5'
}
// const inputStyle = {
//     display: 'block',
//     backgroundColor: '#000000',
//     color: 'white',
//     fontSize: '28px',
//     width: '100%',
//     border: '1px solid black',
//     borderBottom: '2px solid #EB5757'
// }

// const whitey = {
//     color: 'white'
// }

const searchButton = {
    float: 'right',
    // textAlign: 'right',
    textDecoration: 'none',
    backgroundColor: '#EB5757',
    color: '#F5F5F5',
    border: 'none',
    padding: '5px 70px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px'
}

const searchByDiv = {
    verticalAlign: 'middle',
    color: '#F2F2F2',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
}

const searchByButtonOn = {
    margin: '0 10px',
    textDecoration: 'none',
    backgroundColor: '#EB5757',
    color: '#F5F5F5',
    border: 'none',
    padding: '3px 40px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px'
}

const searchByButtonOff = {
    margin: '0 10px',
    textDecoration: 'none',
    backgroundColor: '#333333',
    color: '#828282',
    border: 'none',
    padding: '3px 40px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px'
}