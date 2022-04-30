/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultsCard } from './ResultsCard';

export default {
  title: 'Quizpage/ResultsCard',
  component: ResultsCard,
} as ComponentMeta<typeof ResultsCard>;

const Template: ComponentStory<typeof ResultsCard> = (args) => (
  <ResultsCard {...args} />
);

// Template.bind({}) just copies template function above
export const Dooku = Template.bind({});
Dooku.args = {
  question: '"Count Dooku (Darth Tyranus) was once a Jedi."',
  userAnswer: 'true',
};
