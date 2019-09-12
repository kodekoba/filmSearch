import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../layout/Footer'

import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'

class Details extends Component {
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
      }
    ],
    selectedMovieInfo: {
      "title": "Spirited Away",
      "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
      "year": "2001",
      "length": "125",
      "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      "director": "Hayao Miyazaki",
      "cast": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naito, Yasuko Sawaguchi, Tatsuya Gashuin, Ryunosuke Kamiki, Yumi Tamai",
      "rating": "4.3"
    }
  }

  render(){
     let movies = this.state.movieList.map(function(movie, i){
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
          <header className="detailsBlackBackground">
            <div className="pictureStyle">
              <div>                
                <title className="filmSearchTitle">
                    filmSearch
                </title>
                <Link to="/">
                    <Button variant="contained" className="backToSearchButton" style={backToSearchButton}>
                        BACK TO SEARCH
                    </Button>
                </Link>
              </div>
              <div className='movieContent'>
                <img className="movieContentImg" src={this.state.selectedMovieInfo.image} alt="" />
                <div className="movieContentInfo">
                  <div className="titleAndRating">
                    <h1 className="movieTitleHeader">{this.state.selectedMovieInfo.title}</h1>
                    <div className="ratingStyle">{this.state.selectedMovieInfo.rating}</div>
                  </div>
                  <h2 className="yearAndLength">{this.state.selectedMovieInfo.year} | {this.state.selectedMovieInfo.length} minutes</h2>
                  <p className="descStyle">{this.state.selectedMovieInfo.description}</p>
                  <p className="directorAndCast">Director: {this.state.selectedMovieInfo.director}</p>
                  <p className="directorAndCast">Cast: {this.state.selectedMovieInfo.cast}</p>
                </div>
              </div>
            </div>
          </header>
          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
              Films by {this.state.selectedMovieInfo.director}
            </div>
          </div>
          <div className="resultsStyle">
            {movies}
          </div>
          <div className="paginationStyle">Page 1 of 1</div>
          <Footer />
        </div>
      </React.Fragment>
    );
  } 
}

const backToSearchButton = {
  margin: '20px 0',
  float: 'right',
  textDecoration: 'none',
  color: '#EB5757',
  backgroundColor: '#F5F5F5',
  border: 'none',
  padding: '3px 30px',
  fontWeight: 'bold',
  fontSize: '20px'
}

export default Details;
