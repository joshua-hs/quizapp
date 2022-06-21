import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgressBar } from '..';

export default {
  title: 'Quizpage/CircularProgressBar',
  component: CircularProgressBar,
} as ComponentMeta<typeof CircularProgressBar>;

const Template: ComponentStory<typeof CircularProgressBar> = (args) => (
  <CircularProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'determinate',
  value: 50,
  color: 'primary',
};
