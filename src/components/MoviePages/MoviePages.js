import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrig';
import movies from './movies.json';
import styles from './MoviePage.module.css';

class MoviePages extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = event => {
    const serchText = event.target.value;
    this.setState({ value: serchText });
  };

  filterMovie = searchValue => {
    return movies.filter(film => {
      const filterTitle = film.title.toLowerCase().trim();
      return filterTitle.includes(searchValue);
    });
  };

  render() {
    const { value } = this.state;
    const filmList = this.filterMovie(value);
    return (
      <div className={styles.container}>
        <SearchBar value={value} onChange={this.handleChange} />
        <MovieGrid items={filmList} />
      </div>
    );
  }
}

export default MoviePages;
