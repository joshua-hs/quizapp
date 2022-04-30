/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeChoiceCard } from './HomeChoiceCard';

export default {
  title: 'Homepage/HomeChoiceCard',
  component: HomeChoiceCard,
} as ComponentMeta<typeof HomeChoiceCard>;

const Template: ComponentStory<typeof HomeChoiceCard> = (args) => (
  <HomeChoiceCard {...args} />
);

// Template.bind({}) just copies template function above
export const StarWars = Template.bind({});
StarWars.args = {
  title: 'Star Wars',
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/star_wars.png',
  buttonColour: 'linear-gradient(45deg, #0000FF 30%, #5858FA 90%)',
};

export const Formula1 = Template.bind({});
Formula1.args = {
  title: 'Formula 1',
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/formula_1.png',
  buttonColour: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export const Marvel = Template.bind({});
Marvel.args = {
  title: 'Marvel',
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/marvel.png',
  buttonColour: 'linear-gradient(45deg, #DF0101 30%, #FE2E64 90%)',
};

export const ClassicalMusic = Template.bind({});
ClassicalMusic.args = {
  title: 'Classical Music',
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/classical_music.png',
  buttonColour: 'linear-gradient(45deg, #088A08 30%, #04B431 90%)',
};
