import * as React from 'react';
import Grid from '@mui/material/Grid';
import { gql, useQuery } from '@apollo/client';
import HomeChoiceCard from '../components/HomeChoiceCard';
import BackgroundImage from '../shared/BackgroundImage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const retrieveCards = gql`
  query getCards {
    getCards {
      id
      title
      buttonColour
      imageURL
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(retrieveCards);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <BackgroundImage>
      <Grid
        container
        spacing={4}
        sx={{ paddingTop: '25vh', justifyContent: 'center' }}
      >
        {data.getCards.map(
          (card: { title: string; imageURL: string; buttonColour: string }) => (
            <Grid item>
              <HomeChoiceCard
                topic={card.title}
                imageURL={card.imageURL}
                buttonColour={card.buttonColour}
              />
            </Grid>
          )
        )}
      </Grid>
    </BackgroundImage>
  );
};

export default HomePage;
