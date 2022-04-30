/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledButton from './StyledButton';

export default {
  title: 'Shared/StyledButton',
  component: StyledButton,
  argTypes: {
    backgroundcolor: { control: 'backgroundcolour' },
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args}> Begin Quiz </StyledButton>
);

export const Blue = Template.bind({});
Blue.args = {
  backgroundcolour: 'linear-gradient(45deg, #0000FF 30%, #5858FA 90%)',
};

export const Orange = Template.bind({});
Orange.args = {
  backgroundcolour: 'orange',
};

export const Red = Template.bind({});
Red.args = {
  backgroundcolour: 'red',
};

export const Green = Template.bind({});
Green.args = {
  backgroundcolour: 'green',
};
