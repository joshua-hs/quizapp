/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizQuestionCard from './MultipleChoiceCard';

export default {
  title: 'Quizpage/MultipleChoiceCard',
  component: QuizQuestionCard,
} as ComponentMeta<typeof QuizQuestionCard>;

const Template: ComponentStory<typeof QuizQuestionCard> = (args) => (
  <QuizQuestionCard {...args} />
);

// Template.bind({}) just copies template function above
export const ChewbaccaQuestion = Template.bind({});
ChewbaccaQuestion.args = {
  question: 'What species was Chewbacca?',
  answers: ['Human', 'Wookie', 'Muun', 'Ewok'],
  dispatch: () => {},
};

export const DarthVaderBirthplaceQuestion = Template.bind({});
DarthVaderBirthplaceQuestion.args = {
  question: 'What planet was the birthplace of Anakin Skywalker/Darth Vader?',
  answers: ['Coruscant', 'Naboo', 'Kamino', 'Tattoine'],
  dispatch: () => {},
};

export const BossNassQuestion = Template.bind({});
BossNassQuestion.args = {
  question: 'Boss Nass was the leader of which civilization?',
  answers: ['Gungans', 'Mon Calamari', 'Wookies', 'Ewoks'],
  dispatch: () => {},
};

export const AnakinObiWanBattleQuestion = Template.bind({});
AnakinObiWanBattleQuestion.args = {
  question:
    "In Episode III: 'Revenge of the Sith,' on which planet did the final battle between Obi-Wan and Anakin take place?",
  answers: ['Korriban', 'Exegol', 'Mustafar', 'Coruscant'],
  dispatch: () => {},
};

export const F1ConstructorsQuestion = Template.bind({});
F1ConstructorsQuestion.args = {
  question:
    "How many different constructors have won a constructors' championship within the 21st century?",
  answers: ['3', '4', '5', '6'],
  dispatch: () => {},
};

export const F1MostCornersQuestion = Template.bind({});
F1MostCornersQuestion.args = {
  question:
    'Which track of the 2022 calendar officially contains the most corners?',
  answers: [
    'Marina Bay Street Circuit',
    'Jeddah Corniche Circuit',
    'Circuit de Barcelona-Catalunya',
    'Baku City Circuit',
  ],
  dispatch: () => {},
};
