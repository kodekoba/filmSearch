import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchHeader from '../layout/SearchHeader'
import Footer from '../layout/Footer'

import CssBaseline from '@material-ui/core/CssBaseline'

class Home extends Component {
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
    sortByRating: true,
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({sortByRating: !this.state.sortByRating})
  }
  
  searchHandler = (e) =>{
    e.target.value.length === 0 ? this.setState({searchIsEmpty: true}) : this.setState({searchIsEmpty: false})
    this.setState({shownList:this.state.movieList.filter(el=>el.title.toLowerCase().includes(e.target.value.toLowerCase()))})
  } 

  render() {
    let movies
    let selector = this.state.movieList
    if(this.state.shownList.length === 0){
      selector = this.state.movieList
    } else {
      selector = this.state.shownList
    }
    movies = selector.map(function(movie, i){
      return (
        <div className="resultItemStyle" key={i}>
          <Link to="/details">
            <img src={movie.image} alt="" />
          </Link>
          <div className="movieTextStyle">
            <div className="movieFlexStyle">
              <div className="movieTitleStyle">{movie.title}</div>
              <div className="movieYearStyle">{movie.year}</div>
            </div>
            <span className="movieGenreStyle">{movie.genre}</span>
          </div>
        </div>
      )
    })
    
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <SearchHeader searchValue={this.searchHandler}/>
          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
              <span className="moviesFoundStyle">
                {!this.state.searchIsEmpty ? this.state.shownList.length : this.state.movieList.length} movies found
              </span>
              <div className="sortByStyle">
                <div className="sortByLabelStyle">Sort by</div>
                {this.state.sortByRating === true ? 
                  <div className="inlineStyle">
                    <span className="disabledStyle" onClick={this.onClick} >release date </span> | <span className="enabledStyle"> rating</span>
                  </div> : 
                  <div className="inlineStyle">
                    <span className="enabledStyle">release date </span> | <span className="disabledStyle" onClick={this.onClick}> rating</span>
                  </div>
                }
              </div>
            </div>
            
          </div>
          {this.state.shownList.length === 0 && !this.state.searchIsEmpty ? 
          <div className="noMoviesStyle">
            <h1>No Films Found!! ʸ(➜◡ु⚈᷉)♡⃛</h1>
            <h2>Try another search</h2>
          </div>
          : 
            <div className="resultsStyle">
              {movies}
            </div>
          }
        </div>
        <div className="paginationStyle">Page 1 of 1</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
