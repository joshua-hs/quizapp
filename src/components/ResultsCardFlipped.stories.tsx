/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResultsCardFlipped } from './ResultsCardFlipped';

export default {
  title: 'Quizpage/ResultsCardFlipped',
  component: ResultsCardFlipped,
} as ComponentMeta<typeof ResultsCardFlipped>;

const Template: ComponentStory<typeof ResultsCardFlipped> = (args) => (
  <ResultsCardFlipped {...args} />
);

// Template.bind({}) just copies template function above
export const Dooku = Template.bind({});
Dooku.args = {
  userWasCorrect: true,
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/results-images/Q291bnQgRG9va3UgKERhcnRoIFR5cmFudXMpIHdhcyBvbmNlIGEgSmVkaS4.jpg',
};
