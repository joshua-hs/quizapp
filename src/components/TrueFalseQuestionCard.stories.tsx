/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TrueFalseQuestionCard from './TrueFalseQuestionCard';

export default {
  title: 'Quizpage/TrueFalseQuestionCard',
  component: TrueFalseQuestionCard,
} as ComponentMeta<typeof TrueFalseQuestionCard>;

const Template: ComponentStory<typeof TrueFalseQuestionCard> = (args) => (
  <TrueFalseQuestionCard {...args} />
);

// Template.bind({}) just copies template function above
export const Order66Question = Template.bind({});
Order66Question.args = {
  question:
    'Order 66 was a top-secret order identifying all Jedi as traitors to the Galactic Republic. ',
  dispatch: () => {},
};
