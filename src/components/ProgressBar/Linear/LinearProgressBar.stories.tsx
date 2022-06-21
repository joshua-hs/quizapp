import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinearProgressBar } from '..';

export default {
  title: 'Quizpage/LinearProgressBar',
  component: LinearProgressBar,
} as ComponentMeta<typeof LinearProgressBar>;

const Template: ComponentStory<typeof LinearProgressBar> = (args) => (
  <LinearProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'determinate',
  value: 50,
  color: 'primary',
};
