import React from 'react';
import Grid from '@mui/material/Grid';
import {
  HomeChoiceCard,
  HomeChoiceCardProps,
} from '../components/HomeChoiceCard';

export type HomeChoiceCardRowProps = {
  cardData: HomeChoiceCardProps[];
};

const HomeChoiceCardRow = ({ cardData }: HomeChoiceCardRowProps) => {
  return (
    <>
      {cardData.map((card: HomeChoiceCardProps) => (
        <Grid item key={card.id}>
          <HomeChoiceCard
            title={card.title}
            imageURL={card.imageURL}
            buttonColour={card.buttonColour}
          />
        </Grid>
      ))}
    </>
  );
};

export default HomeChoiceCardRow;
