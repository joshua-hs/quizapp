/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuizPage } from '..';

export default {
  title: 'Quizpage/QuizPage',
  component: QuizPage,
} as ComponentMeta<typeof QuizPage>;

const Template: ComponentStory<typeof QuizPage> = () => <QuizPage />;

// Template.bind({}) just copies template function above
export const Default = Template.bind({});
