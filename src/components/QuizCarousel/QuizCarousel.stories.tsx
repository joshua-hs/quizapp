import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { questionData } from '../../../.storybook/fakeData';
import './quizCarouselStyles.css';
import { QuizCarousel } from '.';

export default {
  title: 'QuizPage/QuizCarousel',
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
