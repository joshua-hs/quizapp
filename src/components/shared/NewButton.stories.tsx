/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewButton from './NewButton';

export default {
  title: 'Shared/NewButton',
  component: NewButton,
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => (
  <NewButton {...args}> Begin Quiz </NewButton>
);

export const StarWars = Template.bind({});
StarWars.args = {
  primarycolor: 'linear-gradient(45deg, #0000FF 30%, #5858FA 90%)',
};

export const Formula1 = Template.bind({});
Formula1.args = {
  primarycolor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export const Marvel = Template.bind({});
Marvel.args = {
  primarycolor: 'linear-gradient(45deg, #DF0101 30%, #FE2E64 90%)',
};

export const ClassicalMusic = Template.bind({});
ClassicalMusic.args = {
  primarycolor: 'linear-gradient(45deg, #088A08 30%, #04B431 90%)',
};
