/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledButton from './StyledButton';

export default {
  title: 'Shared/StyledButton',
  component: StyledButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args}> Begin Quiz </StyledButton>
);

export const Blue = Template.bind({});
Blue.args = {
  colour: 'blue',
};

export const Orange = Template.bind({});
Orange.args = {
  colour: 'orange',
};

export const Red = Template.bind({});
Red.args = {
  colour: 'red',
};

export const Green = Template.bind({});
Green.args = {
  colour: 'green',
};
