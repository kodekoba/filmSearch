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
        "year": "1997",
        "rating": 6
      },
      {
        "title": "MY NEIGHBOR TOTORO",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1998",
        "rating": 5
      },
      {
        "title": "SPIRITED AWAY",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "2001",
        "rating": 4
      },
      {
        "title": "AKIKO'S ADVENTURE",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/mNqZOtJIQfFQPjo3hmYLIn8Qqhf.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1992",
        "rating": 3
      },
      {
        "title": "MY NEIGHBOR KEJA",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "1988",
        "rating": 2
      },
      {
        "title": "GHOSTED TOWARDS",
        "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "genre": "Animation, Adventure, Family",
        "year": "2004",
        "rating": 1
      }
    ],
    shownList:[],
    searchIsEmpty: true,
    sortByRating: true,
  }

  constructor(props) {
    super(props);
    this.sortMovies = this.sortMovies.bind(this);
  }
  
  sortCallback(flag) {
    return function(objA, objB) {
      if(flag == 'date') {
        return objA.year - objB.year;
      }
      if(flag == 'rate') {
        return objA.rating - objB.rating;
      }
    }
  }

  sortMovies(flag) {
    if(this.state.searchIsEmpty) {
      this.setState({
        sortByRating: !this.state.sortByRating,
        movieList: this.state.movieList.sort(this.sortCallback(flag))
      });
    } else {
      this.setState({
        sortByRating: !this.state.sortByRating,
        shownList: this.state.shownList.sort(this.sortCallback(flag))
      });
    }
    
  }
  
  searchHandler = (value) => {
    this.setState({
      searchIsEmpty: value.length ? false : true,
      shownList: value.length ? this.state.movieList.filter(el => el.title.toLowerCase().includes(value.toLowerCase())) : []
    });
  } 

  render() {
    
    let movies;
    let selector = this.state.shownList.length ? this.state.shownList : this.state.movieList;

    movies = selector.map(function(movie, i) {
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
                {
                  this.state.sortByRating === true ? 
                  
                  <div className="inlineStyle">
                    <span className="disabledStyle" onClick={ () => this.sortMovies('date') } >release date </span> | 
                    <span className="enabledStyle"> rating</span>
                  </div>
                  : 
                  <div className="inlineStyle">
                    <span className="enabledStyle">release date </span> | 
                    <span className="disabledStyle" onClick={ () => this.sortMovies('rate') } > rating</span>
                  </div>
                }
              </div>
            </div>
            
          </div>
          {
          this.state.shownList.length === 0 && !this.state.searchIsEmpty ? 
          
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
