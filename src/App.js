import React, { Component } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getFeedback = e => {
    const { value } = e.currentTarget;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };
  calculateFeetback = () => {
    return Object.values(this.state).reduce((total, quantity) => {
      return total + quantity;
    }, 0);
  };
  getPositivePercentage = total => {
    const { good } = this.state;
    const percentage = parseInt((good / total) * 100);
    return percentage ? `${percentage}%` : '0%';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calculateFeetback();
    const positivePercentage = this.getPositivePercentage(total);
    return (
      <div className="App">
        <Section title={'Please leave feedback!'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.getFeedback}
          ></FeedbackOptions>
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
