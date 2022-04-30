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
