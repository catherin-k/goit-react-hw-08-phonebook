import { Component } from 'react';
import { Box } from './Box';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Title, Notification } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttonsArray = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Box
        bg="lavender"
        width="50%"
        mx="auto"
        p="4"
        my="4"
        boxShadow="boxShadow"
      >
        <Box as="section">
          <Title>Please leave feedback</Title>
          <FeedbackOptions
            options={buttonsArray}
            onLeaveFeedback={this.addFeedback}
          />
        </Box>

        <Box as="section">
          <Title>Statistics</Title>
          {total === 0 ? (
            <Notification>There is no feedback</Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Box>
      </Box>
    );
  }
}
