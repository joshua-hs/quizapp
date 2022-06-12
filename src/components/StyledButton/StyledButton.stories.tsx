/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledButton from './StyledButton';

export default {
  title: 'Shared/StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args}> Begin Quiz </StyledButton>
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
