import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

class Controls extends Component {
  state = {
    amount: 0,
    type: '',
  };

  handleChange = event => {
    this.setState({
      amount: +event.target.value,
    });
  };

  handleClick = event => {
    this.props.addChange({ ...this.state });
    this.setState({
      type: event.target.value,
    });
    this.setState({
      amount: 0,
    });
  };

  render() {
    const { amount } = this.state;

    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={this.handleChange}
        />
        <button
          type="button"
          name="type"
          value="Deposit"
          onClick={this.handleClick}
        >
          Deposit
        </button>
        <button
          type="button"
          name="type"
          value="Withdraw"
          onClick={this.handleClick}
        >
          Withdraw
        </button>
      </section>
    );
  }
}

export default Controls;
Controls.propTypes = {
  //   amount: PropTypes.string.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   onClick: PropTypes.func.isRequired,
  addChange: PropTypes.func.isRequired,
};
