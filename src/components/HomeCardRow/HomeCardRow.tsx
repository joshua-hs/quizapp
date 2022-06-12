import React from 'react';
import Grid from '@mui/material/Grid';
import { HomeCard, HomeCardProps } from '../HomeCard/HomeCard';

export type HomeCardRowProps = {
  cardData: HomeCardProps[];
};

export function HomeCardRow({ cardData }: HomeCardRowProps) {
  return (
    <>
      {cardData.map((card: HomeCardProps) => (
        <Grid item key={card.id}>
          <HomeCard
            title={card.title}
            imageURL={card.imageURL}
            buttonColour={card.buttonColour}
          />
        </Grid>
      ))}
    </>
  );
}

export default HomeCardRow;
