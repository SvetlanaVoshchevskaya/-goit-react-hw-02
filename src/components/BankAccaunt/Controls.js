import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

class Controls extends Component {
  state = {
    amount: '',
    type: 'Deposit',
  };

  handleChange = event => {
    this.setState({
      amount: +event.target.value,
    });
  };

  handleClick = event => {
    if (
      this.state.amount > this.props.balance &&
      this.state.type !== 'Deposit'
    ) {
      alert('На счету недостаточно средств для проведения операции!');
      return;
    }
    if (this.state.amount === 0) {
      alert('Введите сумму для проведения операции!');
      return;
    }

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
  addChange: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};
