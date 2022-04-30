import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '@mui/material';
import HomeChoiceCardRow from './HomeChoiceCardRow';

export default {
  title: 'Homepage/HomeChoiceCardRow',
  component: HomeChoiceCardRow,
} as ComponentMeta<typeof HomeChoiceCardRow>;

const Template: ComponentStory<typeof HomeChoiceCardRow> = (args) => (
  <Grid
    container
    spacing={4}
    sx={{
      paddingTop: '25vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <HomeChoiceCardRow {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  cardData: [
    {
      title: 'Star Wars',
      buttonColour: 'linear-gradient(45deg, #0000FF 30%, #5858FA 90%)',
      imageURL:
        'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/star_wars.png',
    },
    {
      title: 'Formula 1',
      buttonColour: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      imageURL:
        'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/formula_1.png',
    },
    {
      title: 'Marvel',
      buttonColour: 'linear-gradient(45deg, #DF0101 30%, #FE2E64 90%)',
      imageURL:
        'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/marvel.png',
    },
    {
      title: 'Classical Music',
      buttonColour: 'linear-gradient(45deg, #088A08 30%, #04B431 90%)',
      imageURL:
        'https://quizappimages.s3.eu-west-1.amazonaws.com/homechoicecards/classical_music.png',
    },
  ],
};
