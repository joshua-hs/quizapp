import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { HomeCardRow } from '../../components/HomeCardRow';
import { GET_HOME_CARDS } from '../../graphql/queries';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import './homeStyles.css';
import { Footer } from '../../components/Footer';
import { GradientText } from '../../components/GradientText';

export function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  const { loading, error, data } = useQuery(GET_HOME_CARDS);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    /* Checks whether the user is viewing the app from a device with a small screen size and if so uses the 
    IntersectionObserver API to apply the same hover effect as you'd get on desktop when hovering your mouse over one of 
    the HomeCard elements.
    This is because users on touch screen devices don't have a cursor to hover over the elements with, so we need to replicate this functionality somehow.
    The intersection observer basically checks whether an element is in view, and if it is, we apply the same CSS as if you're hovering over it. */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (windowWidth <= 1200) {
            entry.target.classList.toggle('hover', entry.isIntersecting);
          } else {
            entry.target.classList.remove('hover');
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const cards = Array.from(document.getElementsByClassName('homeCard'));

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, data]);

  if (loading)
    return (
      <LoadingIndicator text=" Spinning up back-end (this might take a few seconds)..." />
    );
  if (error) return <p>Error : {error.message}</p>;

  // There is one more quiz topic I am planning to implement (classical music) but the questions aren't ready yet, hence why I am slicing the array below to exclude it.
  const cardData = data.getHomeCards.slice(0, 3);

  return (
    <Grid
      container
      rowSpacing={5}
      justifyContent="center"
      paddingTop="5vh"
      minHeight="100vh"
      maxHeight="100%"
    >
      <Grid item xs={10} lg={7} justifyContent="center" textAlign="center">
        <Typography component="span" variant="h3">
          Welcome! Choose a <GradientText>quiz</GradientText> below to get
          started.
        </Typography>
      </Grid>
      <Grid
        className="fadeIn"
        container
        paddingTop="8vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={11}
          justifyContent="center"
          alignItems="center"
        >
          <HomeCardRow cardData={cardData} />
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ margin: '0 4rem' }}>
          Fun fact: The above images were created by AI. Create your own{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.wombo.art/"
          >
            here
          </a>
          .
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}
