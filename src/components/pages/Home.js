import React from 'react'
import { Link } from 'react-router-dom'
import SearchHeader from '../layout/SearchHeader'

import CssBaseline from '@material-ui/core/CssBaseline';

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <SearchHeader />
        <h2>
          No Films Found!!
        </h2>
        <Link to="/search">Click to search!</Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
