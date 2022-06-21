/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingIndicator } from '.';

export default {
  title: 'Shared/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const WithoutText = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  text: 'Sample text...',
};
