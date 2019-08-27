import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Search!
        </h1>
        <h3>          
          <Link to="/">To home</Link>
        </h3>
        <p>--------------------</p>
        <h3>List of Movies~</h3>
        <h4>The React Movie (click picture)</h4>
        <Link to="/details">
          <img src = {"public/favicon.ico"} />
        </Link>
      </header>
    </div>
  );
}

export default Search;
