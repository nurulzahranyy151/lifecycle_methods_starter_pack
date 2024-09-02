import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class ListMovie extends React.Component {
  state = {
    movies: [],
    noMoviesFound: false,
    loading: false,
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      if (!this.props.search) {
        this.fetchMovies();
        return;
      }
      if (this.props.search.trim() === '') { // Check for empty string
        this.setState({ movies: [], noMoviesFound: false });
        this.props.toggleModal(false); // Hide the modal
        return;
      }
      this.setState({ loading: true });
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d64465f835d027114fd469afd4e2de72&query=${this.props.search}`).then(response => {
        this.setState({ loading: false });
        if (response.data.results.length === 0) {
          this.setState({ movies: [], noMoviesFound: true });
          this.props.toggleModal(true); // Show the modal
        } else {
          this.setState({ movies: response.data.results, noMoviesFound: false });
          this.props.toggleModal(false); // Hide the modal
        }
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
    }
  }

  fetchMovies() {
    this.setState({ loading: true });
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72').then(response => {
      this.setState({ loading: false });
      this.setState({ movies: response.data.results, noMoviesFound: false });
      this.props.toggleModal(false); // Hide the modal if it was shown
    }).catch(error => {
      console.error(error);
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.noMoviesFound) {
      return (
        <div className="container">
          No movies found!
        </div>
      );
    }
    return (
      <div className="container">
        {this.state.movies.map(movie => (
          <div className="card" key={movie.id}>
            <img alt="movie" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div>
              <h5>{movie.title}</h5>
              <p>{movie.overview.slice(0, 120)}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
