/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultsContainer from './ResultsContainer';
import { resultsData } from '../../../.storybook/fakeData';

export default {
  title: 'ResultsPage/ResultsContainer',
  component: ResultsContainer,
} as ComponentMeta<typeof ResultsContainer>;

const Template: ComponentStory<typeof ResultsContainer> = (args) => (
  <ResultsContainer {...args} />
);

// Template.bind({}) just copies template function above
export const Default = Template.bind({});
Default.args = {
  results: resultsData.data.createQuizAttempt.answers,
  statements: resultsData.data.createQuizAttempt.statements,
  score: 10,
};
