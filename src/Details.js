import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Details
        </h1>
        <img src = {"./public/favicon.ico"} />
        <h4>Details and description of movie ~</h4>
        <Link to="/search">Back to search</Link>
      </header>
    </div>
  );
}

export default Details;
