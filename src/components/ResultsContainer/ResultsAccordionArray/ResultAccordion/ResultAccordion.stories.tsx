/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultAccordion } from '.';

export default {
  title: 'ResultsPage/ResultAccordion',
  component: ResultAccordion,
} as ComponentMeta<typeof ResultAccordion>;

const Template: ComponentStory<typeof ResultAccordion> = (args) => (
  <ResultAccordion {...args} />
);

// Template.bind({}) just copies template function above
export const CorrectQuestion = Template.bind({});
CorrectQuestion.args = {
  question:
    'Order 66 was a top-secret order identifying all Jedi as traitors to the Galactic Republic.',
  userAnswer: 'true',
  correctAnswer: 'true',
  userWasCorrect: true,
  statement: 'dew it',
  setSelectedQuestion: () => {},
};
export const IncorrectQuestion = Template.bind({});
IncorrectQuestion.args = {
  question:
    'In the 2021 Monaco Grand Prix, only one driver made an on-track overtake. Who was it?',
  userAnswer: 'Yuki Tsunoda',
  correctAnswer: 'Mick Schumacher',
  userWasCorrect: false,
  statement: 'statement will go here',
  setSelectedQuestion: () => {},
};
