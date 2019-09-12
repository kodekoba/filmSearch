import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';


function Footer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <footer style={footerStyle}>
                <span>filmSearch ⓒ 2019 built with</span>
                <img style={tmdbStyle} src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="" />
            </footer>
        </React.Fragment>
    )
}

const footerStyle = {
    marginTop:'auto',
    minHeight: '80px',
    lineHeight: '80px',
    color: '#EB5757',
    backgroundColor: '#121212',
    textAlign: 'center',
}

const tmdbStyle = {
    marginLeft: '10px',
    height: '25px',    
    verticalAlign: 'middle'
}

export default Footer;