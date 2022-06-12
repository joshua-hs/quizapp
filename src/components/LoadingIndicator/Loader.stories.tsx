/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingIndicator from './LoadingIndicator';

export default {
  title: 'Shared/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = () => (
  <LoadingIndicator />
);

export const Default = Template.bind({});
