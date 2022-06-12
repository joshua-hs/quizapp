/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultAccordionArray from './ResultAccordionArray';
import { resultsData } from './shared/fakedata';

export default {
  title: 'ResultsPage/ResultAccordionArray',
  component: ResultAccordionArray,
} as ComponentMeta<typeof ResultAccordionArray>;

const Template: ComponentStory<typeof ResultAccordionArray> = (args) => (
  <ResultAccordionArray {...args} />
);

// Template.bind({}) just copies template function above
export const Default = Template.bind({});
Default.args = {
  results: resultsData.data.createQuizAttempt.answers,
  statements: resultsData.data.createQuizAttempt.statements,
};
