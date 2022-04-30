import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '@mui/material';
import QuizCardRow from './QuizCardRow';

export default {
  title: 'Homepage/QuizCardRow',
  component: QuizCardRow,
} as ComponentMeta<typeof QuizCardRow>;

const Template: ComponentStory<typeof QuizCardRow> = (args) => (
  <Grid
    container
    spacing={4}
    sx={{
      paddingTop: '10vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <QuizCardRow {...args} />
  </Grid>
);

export const TrueFalseSection = Template.bind({});
TrueFalseSection.args = {
  currentQuestions: [
    {
      id: '6230f742d219ef6a61de9908',
      topic: 'Star Wars',
      question:
        'Order 66 was a top-secret order identifying all Jedi as traitors to the Galactic Republic.',
    },
    {
      id: '62312aa26da2a8c6a31d2415',
      topic: 'Star Wars',
      question: 'Count Dooku (Darth Tyranus) was once a Jedi.',
    },
    {
      id: '62312ad36da2a8c6a31d241b',
      topic: 'Star Wars',
      question: 'The planet Hoth had a hot and arid climate.',
    },
  ],
  dispatch: () => {},
  quizSection: 0,
};
