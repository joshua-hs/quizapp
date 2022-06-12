/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageChoiceQuestionCard } from './ImageChoiceQuestionCard';

export default {
  title: 'Quizpage/ImageChoiceCard',
  component: ImageChoiceQuestionCard,
} as ComponentMeta<typeof ImageChoiceQuestionCard>;

const Template: ComponentStory<typeof ImageChoiceQuestionCard> = (args) => (
  <ImageChoiceQuestionCard {...args} />
);

// Template.bind({}) just copies template function above
export const Silverstone = Template.bind({});
Silverstone.args = {
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/imagechoicecards/formula1/U2lsdmVyc3RvbmU.png',
  dispatch: () => {},
};

export const Nebula = Template.bind({});
Nebula.args = {
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/imagechoicecards/marvelmovies/bmVidWxh.jpg',
  dispatch: () => {},
};

export const Ronan = Template.bind({});
Ronan.args = {
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/imagechoicecards/marvelmovies/cm9uYW4.webp',
  dispatch: () => {},
};

export const Ahsoka = Template.bind({});
Ahsoka.args = {
  imageURL:
    'https://quizappimages.s3.eu-west-1.amazonaws.com/imagechoicecards/starwars/QWhzb2th.webp',
  dispatch: () => {},
};

export const Test = Template.bind({});
Test.args = {
  imageURL:
    'https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg',
  dispatch: () => {},
};
