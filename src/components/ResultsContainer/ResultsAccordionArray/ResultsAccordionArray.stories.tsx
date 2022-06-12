/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultsAccordionArray from './ResultsAccordionArray';
import { resultsData } from '../../../../.storybook/fakeData';

export default {
  title: 'ResultsPage/ResultsAccordionArray',
  component: ResultsAccordionArray,
} as ComponentMeta<typeof ResultsAccordionArray>;

const Template: ComponentStory<typeof ResultsAccordionArray> = (args) => (
  <ResultsAccordionArray {...args} />
);

// Template.bind({}) just copies template function above
export const Default = Template.bind({});
Default.args = {
  results: resultsData.data.createQuizAttempt.answers,
  statements: resultsData.data.createQuizAttempt.statements,
};
