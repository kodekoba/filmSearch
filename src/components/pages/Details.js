import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import { detailspageHelper } from '../../lib/detailspageHelper';

class Details extends Component {

  state = {
    genreMap:{},
    similarMoviesList: [],
    selectedMovieInfo: {},
    selectedMovieCast: [],
    movie_id: null,
    director: null,
  }

  options = { }

  constructor(props) {
    super(props);
    this.state.movie_id = this.props.match.params.id;

    this.options = {
      env: 'b0be95ae49326c255b2b818fcb1beb1d', //process.env.REACT_APP_API_KEY,
      movie_id: this.state.movie_id
    }
  }

  componentDidMount(){
    this.getAllGenres();
    this.allRequests();
  }

  getAllGenres = () => {

    detailspageHelper.getAllGenres(this.options, (res) => {
      let tempMap = {}
      let genreObjs = res.data.genres;
      for (let i in genreObjs) {
        let key = genreObjs[i].id.toString();
        let value = genreObjs[i].name;
        tempMap[key] = value;
      }
      this.setState({
        genreMap: tempMap
      });
    });
  }

  allRequests = () => {

    detailspageHelper.getMovieInfo(this.options, (res) => {
      this.setState({
        selectedMovieInfo: res.data
      });
    });

    detailspageHelper.getMovieCredits(this.options, (res) => {
      this.setState({
        director: res.data.crew[0].name,
        selectedMovieCast: res.data.cast.slice(1,10)
      });
    });

    detailspageHelper.getSimilarMovies(this.options, (res) => {
      this.setState({
        similarMoviesList: res.data.results
      });
    });

  }

  setMovieId = (movie) => {
    this.setState({
      movie_id: movie.movie_id
    })
  } 

  getSelectedMovieYear = () => {
    let year_string = '' + this.state.selectedMovieInfo.release_date;
    return year_string.substring(0, 4);
  }

  getCast = () => {
    let cast_string = '';
    for (let cast_member in this.state.selectedMovieCast) {
      cast_string += this.state.selectedMovieCast[cast_member].character + ", ";
    }
    return cast_string.substring(0, cast_string.length - 2);
  }

  render() {

    let getYear = ({movie}) => {
      let year_string = '' + movie.release_date;
      return year_string.substring(0, 4);
    };

    let getGenres = ({movie}) => {
      let genre_string = '';
      for (let genre_id in movie.genre_ids) {
        genre_string += this.state.genreMap[movie.genre_ids[genre_id]] + ", ";
      }
      return genre_string.substring(0, genre_string.length - 2);
    };

    let movies = this.state.similarMoviesList.map((movie, i) => {
      return (
        <div className="resultItemStyle" key={i}>

          <Link to={`/details/${movie.id}`} onClick={() => this.setState({
              movie_id:movie.id
            },() => this.allRequests())}>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
          </Link>

          <div className="movieTextStyle">
            <div className="movieFlexStyle">
              <div className="movieTitleStyle">{movie.title}</div>
              <div className="movieYearStyle">{getYear({movie})}</div>
            </div>
            <span className="movieGenreStyle">{getGenres({movie})}</span>
          </div>

        </div>
      )
    });

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">

          <header className="detailsBlackBackground" id="topElement">
            <div className="detailsPictureStyle">

              <div>                
                <title className="filmSearchTitle">
                    filmSearch
                </title>
                <Link to="/">
                    <Button variant="contained" className="backToSearchButton">
                        BACK TO SEARCH
                    </Button>
                </Link>
              </div>

              <div className='movieContent'>
                <img className="movieContentImg" 
                      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.selectedMovieInfo.poster_path}`} alt="" />
                <div className="movieContentInfo">
                  <div className="titleAndRating">
                    <h1 className="movieTitleHeader">{this.state.selectedMovieInfo.title}</h1>
                    <div className="ratingStyle">{this.state.selectedMovieInfo.vote_average}</div>
                  </div>
                  <h2 className="yearAndLength">{this.getSelectedMovieYear()} | {this.state.selectedMovieInfo.runtime} minutes</h2>
                  <p className="descStyle">{this.state.selectedMovieInfo.overview}</p>
                  <p className="directorAndCast">
                    Director: {this.state.director}
                  </p>
                  <p className="directorAndCast">
                    Cast: {this.getCast()}
                  </p>
                </div>
              </div>

            </div>
          </header>

          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
              Similar Movies
            </div>
          </div>

          <div className="resultsStyle">
            {movies}
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  } 
}

export default Details;
