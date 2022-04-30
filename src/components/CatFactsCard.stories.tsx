/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CatFactsCard from './CatFactsCard';

export default {
  title: 'Results/CatFactsCard',
  component: CatFactsCard,
} as ComponentMeta<typeof CatFactsCard>;

const Template: ComponentStory<typeof CatFactsCard> = (args) => (
  <CatFactsCard {...args} />
);

// Template.bind({}) just copies template function above
export const Default = Template.bind({});
Default.args = {
  catFact:
    'On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.',
  attemptQuiz: () => {},
  fetchCatFact: () => {},
};
