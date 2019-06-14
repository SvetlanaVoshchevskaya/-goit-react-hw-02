import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={styles.input}
  />
);
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
