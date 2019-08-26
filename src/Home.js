import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Home
        </h1>
        <h2>
          No Films Found!!
        </h2>
        <Link to="/search">Click to search!</Link>
      </header>
    </div>
  );
}

export default Home;
