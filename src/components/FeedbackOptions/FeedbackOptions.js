import PropTypes from 'prop-types';
import { Component } from 'react';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  state = {};

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={s.OptionsList}>
        {options.map(option => {
          return (
            <ul key={shortid.generate()} className={s.OptionsItem}>
              <button
                className={s.OptionsBtn}
                type="button"
                value={option}
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </ul>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
