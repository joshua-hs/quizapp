import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { questionData } from '../../../.storybook/fakeData';
import './styles.css';
import QuizCarousel from './QuizCarousel';

export default {
  title: 'Shared/QuizCarousel',
  component: QuizCarousel,
} as ComponentMeta<typeof QuizCarousel>;

const Template: ComponentStory<typeof QuizCarousel> = (args) => (
  <QuizCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  quizQuestions: [...questionData[0], ...questionData[1]],
  dispatch: () => {},
  questionCursor: 0,
  maxQuestionCursorAchieved: 0,
};

export const ImageChoice = Template.bind({});
ImageChoice.args = {
  quizQuestions: [...questionData[2]],
  dispatch: () => {},
  questionCursor: 15,
  maxQuestionCursorAchieved: 15,
};
