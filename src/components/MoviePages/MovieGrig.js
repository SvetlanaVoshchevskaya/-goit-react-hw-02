import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from './MovieGridItem';
import styles from './MoviePage.module.css';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    {items.length > 0 ? (
      items.map(film => (
        <Fragment key={film.id}>
          <MovieGridItem
            title={film.title}
            posterUrl={film.posterUrl}
            overview={film.overview}
          />
        </Fragment>
      ))
    ) : (
      <p>No matching results!</p>
    )}
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
