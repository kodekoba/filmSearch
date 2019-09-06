import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchHeader from '../layout/SearchHeader'
import Footer from '../layout/Footer'

import CssBaseline from '@material-ui/core/CssBaseline'

class Search extends Component {
  state = {
    movieList: [
      {
        "title": "PRINCESS MONONOKE",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/mNqZOtJIQfFQPjo3hmYLIn8Qqhf.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1997"
      },
      {
        "title": "MY NEIGHBOR TOTORO",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1988"
      },
      {
        "title": "SPIRITED AWAY",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "2001"
      },
      {
        "title": "AKIKO'S ADVENTURE",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/mNqZOtJIQfFQPjo3hmYLIn8Qqhf.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1997"
      },
      {
        "title": "MY NEIGHBOR KEJA",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1988"
      },
      {
        "title": "GHOSTED TOWARDS",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "2001"
      }
    ],
    shownList:[],
    searchIsEmpty: true,
  }
  
  searchHandler = (e) =>{
    console.log(e.target.value)
    e.target.value.length === 0 ? this.setState({searchIsEmpty: true}) : this.setState({searchIsEmpty: false})
    console.log(this.state.searchIsEmpty)
    this.setState({shownList:this.state.movieList.filter(el=>el.title.toLowerCase().includes(e.target.value.toLowerCase()))})
  } 

  render() {
    let movies
    let selector = this.state.movieList // movieList will be later set to be the "featured movies"
    if(this.state.shownList.length === 0){
      selector = this.state.movieList
    } else {
      selector = this.state.shownList
    }
    movies = selector.map(function(movie, i){
      return (
        <div style={resultItemStyle} key={i}>
          <Link to="/details">
            <img src={movie.image} alt="" />
          </Link>
          <div style={movieTextStyle}>
            <div style={movieFlexStyle}>
              <div style={movieTitleStyle}>{movie.title}</div>
              <div style={movieYearStyle}>{movie.year}</div>
            </div>
            <span style={movieGenreStyle}>{movie.genre}</span>
          </div>
        </div>
      )
    })
    
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <SearchHeader searchValue={this.searchHandler}/>
          <div style={resultsInfoStyle}>
            <div style={resultsInfoWidth}>
              <span style={moviesFoundStyle}>
                {!this.state.searchIsEmpty ? this.state.shownList.length : this.state.movieList.length} movies found
              </span>
              <div style={sortByStyle}>
                <div style={sortByLabelStyle}>Sort by</div>
                {/* {this.state.sortBy === 'release date' ? 
                  <div>
                    <span style={disabledStyle}>release date</span> |
                    <span style={enabledStyle}>rating</span>
                  </div> : 
                  <div>
                    <span style={enabledStyle}>release date</span> |
                    <span style={disabledStyle}>rating</span>
                  </div>
                } */}
                <div style={inlineStyle}>
                    <span style={disabledStyle}>release date</span> | 
                    <span style={enabledStyle}> rating</span>
                </div>
              </div>
            </div>
            
          </div>
          {this.state.shownList.length === 0 && !this.state.searchIsEmpty ? 
          <div style={noMoviesStyle}>
            <h1>No Films Found!! ʸ(➜◡ु⚈᷉)♡⃛</h1>
            <h2>Try another search</h2>
          </div>
          : 
            <div style={resultsStyle}>
              {movies}
            </div>
          }
        </div>
        <div style={paginationStyle}>Page 1 of 1</div>
        <Footer />
      </React.Fragment>
    );
  }
}

const resultsInfoWidth = {
  margin: '0px auto',
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between',
}

const moviesFoundStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
}

const inlineStyle = {
  display: 'inline-block',
  fontWeight: 'bold',
  fontSize: '20px',
}

const sortByLabelStyle = {
  marginRight: '30px',
  display: 'inline-block',
  fontWeight: 'bold',
  fontSize: '20px',
}

const resultsInfoStyle = {
  minHeight: '60px',
  lineHeight: '60px',
  backgroundColor: '#E0E0E0',
}

const sortByStyle = {
  display: 'inline-block'
}

const noMoviesStyle = {
  textAlign: 'center'
}

const disabledStyle = {
  color: 'gray'
}

const enabledStyle = {
  color: 'red'
}

const resultsStyle = {
  margin: '20px auto',
  width: '90%',
  // display: 'inline-block',
}

const resultItemStyle = {
  padding: '10px 75px',
  textAlign: 'center',
  width: '420px',
  display: 'inline-block',
  verticalAlign: 'top',
}

const movieTextStyle = {
  textAlign: 'left',
}

const movieFlexStyle = {
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'space-between'
}

const movieTitleStyle = {
  display: 'inline-block',
  fontSize: '18px',
  fontWeight: 'bold',
}

const movieYearStyle = {
  display: 'inline-block',
  marginLeft: '50px',
  marginRight: '0px',
  border: '1px solid black',
  fontWeight: 'bold',
}

const movieGenreStyle = {}

const paginationStyle = {
  padding: '10px 0',
  fontWeight: 'bold',
  textAlign: 'center'
}

export default Search;
