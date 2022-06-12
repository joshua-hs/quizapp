/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrueFalseCard } from '..';

export default {
  title: 'Quizpage/TrueFalseQuestionCard',
  component: TrueFalseCard,
} as ComponentMeta<typeof TrueFalseCard>;

const Template: ComponentStory<typeof TrueFalseCard> = (args) => (
  <TrueFalseCard {...args} />
);

// Template.bind({}) just copies template function above
export const Order66Question = Template.bind({});
Order66Question.args = {
  question:
    'Order 66 was a top-secret order identifying all Jedi as traitors to the Galactic Republic. ',
  dispatch: () => {},
};
