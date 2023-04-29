import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChangeFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
    setTotal(prevState => prevState + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    let percentPositiveFeedback = ((good + neutral) * 100) / total;

    return percentPositiveFeedback.toFixed() + ' %';
  };

  return (
    <div className={css.container}>
      <Section title="Pleace leave feedback">
        <FeedbackOptions onLeaveFeedback={handleChangeFeedback} />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          'No feedback give'
        )}
      </Section>
    </div>
  );
};
