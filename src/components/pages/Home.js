import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchHeader from '../layout/SearchHeader';
import Footer from '../layout/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Home extends Component {
  state = {
    genreMap:{},
    featuredList: [],
    shownList:[],
    searchIsEmpty: true,
    searchVal: '',
    sortByRating: true,
    resultPage: 1,
    totalPages: 1,
    totalResults: 0,
  }

  // constructor(props) {
  //   super(props);
  // }
  
  componentDidMount(){
    let env = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&api_key=${env}`)
      .then(res => {
        this.setState({featuredList: res.data.results})
        this.state.sortByRating ? this.sortMovies('rate') : this.sortMovies('date')
      })
      .catch(error => {
        console.log(error)
      });
    this.getAllGenres();
  }

  getAllGenres = () => {
    let env = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${env}&language=en-US`)
      .then(res => {
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

  searchRequest(value) {
    let env = process.env.REACT_APP_API_KEY;
    let page = this.state.resultPage;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${env}&language=en-US&query=${value}&page=${page}&include_adult=false`)
      .then(res => {
        this.setState({
          shownList: res.data.results,
          totalPages: res.data.total_pages,
          totalResults: res.data.total_results
        }, () => {
          this.state.sortByRating ? this.sortMovies('rate') : this.sortMovies('date')
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  sortCallback(flag) {
    return function(objA, objB) {
      if(flag === 'date') {
        return (objB.release_date).localeCompare(objA.release_date);
      }
      if(flag === 'rate') {
        return objB.vote_average - objA.vote_average;
      }
    }
  }

  sortMovies = (flag) => {
    if(this.state.searchIsEmpty) {
      this.setState({
        featuredList: this.state.featuredList.sort(this.sortCallback(flag))
      });
    } else {
      this.setState({
        shownList: this.state.shownList.sort(this.sortCallback(flag))
      });
    }
  }

  flipSort(flag) {
    this.setState({
      sortByRating: !this.state.sortByRating
    });
    this.sortMovies(flag);
  }
  
  searchHandler = (value) => {
    this.setState({
      resultPage: 1,
      searchIsEmpty: value.length ? false : true,
      searchVal: value.length ? value : '',
    },() => {
      value.length ? this.searchRequest(value) : this.setState({shownList: []})
    });
  }

  navigatePages = (flag) => {
    document.getElementById("resultsElement").scrollIntoView({block:'start',behavior:'smooth'});
    if(flag === "back") {
      this.setState({
        resultPage: this.state.resultPage - 1,
        },() => {
          this.searchRequest(this.state.searchVal)
        });
    } else if(flag === "forward") {
      this.setState({
        resultPage: this.state.resultPage + 1,
        },() => {
          this.searchRequest(this.state.searchVal)
        });
    }
  }

  render() {
    
    let movies;
    let selector = this.state.shownList.length ? this.state.shownList : this.state.featuredList;
    
    let getYear = ({movie}) => {
      let year_string = '' + movie.release_date;
      return year_string.substring(0, 4);
    }

    let getGenres = ({movie}) => {
      let genre_string = '';
      for (let genre_id in movie.genre_ids) {
        genre_string += this.state.genreMap[movie.genre_ids[genre_id]] + ", ";
      }
      return genre_string.substring(0, genre_string.length - 2);
    }

    movies = selector.map(function(movie, i) {      

      return (
        <div className="resultItemStyle" key={i}>
          <Link to={`/details/${movie.id}`}>
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
    })

    return (
      
      <React.Fragment>
        <CssBaseline />
      
        <div className="App">
      
          <SearchHeader searchValue={this.searchHandler}/>
      
          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
      
              <span className="moviesFoundStyle">
                {!this.state.searchIsEmpty ? this.state.totalResults : this.state.featuredList.length} movies found
              </span>
      
              <div className="sortByStyle">
                <div className="sortByLabelStyle">Sort by</div>
                {
                  this.state.sortByRating === true ? 
                  
                  <div className="inlineStyle">
                    <span className="disabledStyle" onClick={ () => this.flipSort('date') } >release date </span> | 
                    <span className="enabledStyle"> rating</span>
                  </div>
                  : 
                  <div className="inlineStyle">
                    <span className="enabledStyle">release date </span> | 
                    <span className="disabledStyle" onClick={ () => this.flipSort('rate') } > rating</span>
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
            <div className="resultsStyle" id="resultsElement">
              {movies}
            </div>
          }
        </div>
          
        <div className="paginationStyle">
          {
            this.state.resultPage === 1  ? 
            <Button className="noDisplayNav"> back </Button> 
            : 
            <Button className="displayNav" onClick={ () => this.navigatePages('back') }> back </Button>
          }
          Page {this.state.resultPage} of {this.state.totalPages ? this.state.totalPages : 1}
          {
            this.state.resultPage === this.state.totalPages  ? 
            <Button className="noDisplayNav"> forward </Button> 
            : 
            <Button className="displayNav" onClick={ () => this.navigatePages('forward') }> next </Button>
          }
        </div>
          
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
