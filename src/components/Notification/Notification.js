import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Notification.module.css';
class Notification extends Component {
  render() {
    const { message } = this.props;
    return <h2 className={s.NotificationTitle}>{message}</h2>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
