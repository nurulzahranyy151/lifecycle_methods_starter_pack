import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class ListMovie extends React.Component {
  state = {
    movies: []
  }

  componentDidMount(){
    this.fecthMovies()
  }

  componentDidUpdate(prevProps){
    if(this.props.search !== prevProps.search){
      if(!this.props.search){
        this.fecthMovies()
        return;
      }
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d64465f835d027114fd469afd4e2de72&query=$(this.props.search}').then(response => {
        this.setState({
          movies: response.data.results
        })
      })

    }
  }

  fecthMovies(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72').then(response => {
      this.setState({
        movies: response.data.results
      })
    })
  }
  render() {
    return (
      <div className="container">
        {this.state.movies.map(movie => (
           <div className="card" key={movie.id}>
           <img alt="movie" src="https://image.tmdb.org/t/p/w500/eX6tDFp4RhhjZaa1HUDUzFGPWYk.jpg"  />
           <div>
             <h5>{movie.title}</h5>
             <p>{movie.overview.slice(0,120)}</p>
           </div>
         </div>
        ))}
       
      </div>
    )
  }
}
