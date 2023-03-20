import { Component } from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const propsArr = Object.keys(this.props);
    return (
      <ul className={s.StatisticsList}>
        {propsArr.map(prop => {
          const normalaizedText = prop.charAt(0).toUpperCase() + prop.slice(1);
          return (
            <li key={prop} className={s.StatisticsItem}>
              {normalaizedText}: {this.props[prop]}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(PropTypes.object),
// };
