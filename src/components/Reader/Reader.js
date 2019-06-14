import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import Publication from './Publication';
import Counter from './Counter';
import publication from './publication.json';
import styles from './Reader.module.css';

// console.log(styles)
class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
  };

  state = { index: 0 };

  handleClickNext = () => {
    this.setState((prevIndex, props) => ({
      index: prevIndex.index + props.step,
    }));
  };

  handleClickPrevios = () => {
    this.setState((prevIndex, props) => ({
      index: prevIndex.index - props.step,
    }));
  };

  render() {
    const { index } = this.state;
    const max = publication.length;
    const { step } = this.props;

    return (
      <div className={styles.reader}>
        <Publication
          title={publication[index].title}
          text={publication[index].text}
        />
        <Counter index={index} length={max} step={step} />
        <Control
          index={index}
          handleClickNext={this.handleClickNext}
          handleClickPrevios={this.handleClickPrevios}
        />
      </div>
    );
  }
}

export default Reader;
