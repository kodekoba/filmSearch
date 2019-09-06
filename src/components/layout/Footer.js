import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';


function Footer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <footer style={footerStyle}>
                <span>filmSearch ⓒ 2019</span> 
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
    // justifyContent: 'flex-end'
}

export default Footer;