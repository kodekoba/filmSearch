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
          <header style={blackBackground}>
            <div style={pictureStyle}>
              <div>                
                <title style={filmSearchTitle}>
                    filmSearch
                </title>
                <Link to="/search">
                    <Button variant="contained" style={searchButton}>
                        BACK TO SEARCH
                    </Button>
                </Link>
              </div>
              <div className='movieContent' style={movieContent}>
                <img style={movieContentImg} src={this.state.selectedMovieInfo.image} alt="" />
                <div className='movieContentInfo' style={movieContentInfo}>
                  <div style={titleAndRating}>
                    <h1 style={movieTitleHeader}>{this.state.selectedMovieInfo.title}</h1>
                    <div style={ratingStyle}>{this.state.selectedMovieInfo.rating}</div>
                  </div>
                  <h2 style={yearAndLength}>{this.state.selectedMovieInfo.year} | {this.state.selectedMovieInfo.length} minutes</h2>
                  <p style={descStyle}>{this.state.selectedMovieInfo.description}</p>
                  <p style={directorAndCast}>Director: {this.state.selectedMovieInfo.director}</p>
                  <p style={directorAndCast}>Cast: {this.state.selectedMovieInfo.cast}</p>
                </div>
              </div>
            </div>
          </header>
          <div style={resultsInfoStyle}>
            <div style={resultsInfoWidth}>
              Films by {this.state.selectedMovieInfo.director}
            </div>
          </div>
          <div style={resultsStyle}>
            {movies}
          </div>
          <div style={paginationStyle}>Page 1 of 1</div>
          <Footer />
        </div>
      </React.Fragment>
    );
  } 
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

const directorAndCast = {
  fontSize: '20px',
  color: '#828282'
}

const yearAndLength = {
  margin: '0px',
  fontWeight: 'bold',
  fontSize: '28px',
}

const descStyle = {
  margin: '10px 0',
  fontWeight: 'normal',
  fontSize: '28px',
}

const titleAndRating = {
  display: 'flex',
  alignItems: 'center'
}
const movieTitleHeader = {
  fontSize: '42px',
  fontWeight: 'bold',
  color: '#EB5757',
  // display: 'inline-block'
}

const movieContentInfo = {
  width: '600px',
  marginLeft: '60px',
  verticalAlign: 'top',
  display: 'inline-block',
}

const movieContent = {
  width: '100%',
  color: 'white',
  display: 'inline-block',
  verticalAlign: 'top'
}

const movieContentImg = {
  display: 'inline-block'
}


const resultsInfoWidth = {
  margin: '0px auto',
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between',
}

const resultsInfoStyle = {
  minHeight: '60px',
  lineHeight: '60px',
  backgroundColor: '#E0E0E0',
  fontWeight: 'bold',
  fontSize: '20px'
}

const searchButton = {
  margin: '20px 0',
  float: 'right',
  // textAlign: 'right',
  textDecoration: 'none',
  color: '#EB5757',
  backgroundColor: '#F5F5F5',
  border: 'none',
  padding: '3px 30px',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  fontSize: '20px'
}

const blackBackground = {
  backgroundColor: 'black',
  height: '540px'
}

const pictureStyle = {
  margin: '0px auto',
  backgroundImage: "url('./public/detailsBG.jpg')",
  backgroundRepeat: 'no-repeat',
  // backgroundSize: '80%',
  backgroundSize: 'auto',
  width: '80%',
  minHeight: '300px'
}

const filmSearchTitle = {
  display: 'inline-block',
  margin: '20px 0',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '32px',
  color: '#EB5757'
}

const findYourMovie = {
  margin: '25px 0 0 0',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '32px',
  // lineHeight: '37px',
  color: '#F5F5F5'
}

const ratingStyle = {
  marginLeft: '20px',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: '24px',
  fontWeight: 'bold',
  height: '60px',
  width: '60px',
  lineHeight: '55px',
  border: "4px solid rgba(111, 207, 151, 0.55)",
  borderRadius: "50%",
  color: "#6FCF97",
  // display: 'inline-block',
}

export default Details;
