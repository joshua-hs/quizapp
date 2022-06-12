import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import HomeChoiceCardRow from '../containers/HomeChoiceCardRow';
import { ReactComponent as ReactLogo } from '../images/react_logo.svg';
import { ReactComponent as GraphQLLogo } from '../images/graphql.svg';
import { ReactComponent as MongoLogo } from '../images/mongodb-icon-1.svg';
import { ReactComponent as NodeLogo } from '../images/nodejs-icon.svg';
import { ReactComponent as ApolloLogo } from '../images/apollo-graphql-1.svg';
import { GET_HOME_CARDS } from '../queries';
import Loader from '../components/shared/Loader';
import './styles.css';

const HomePage = () => {
  // Real shoddy code I know, but it checks whether the user is viewing the app from a device with a small screen size and if so uses the IntersectionObserver api to apply the same hover effect as you'd get on desktop when hovering your mouse over one of the HomeChoiceCard elements (users on touch screen devices don't have a cursor to hover over the elements with, so we need to replicate this functionality somehow. The intersection observer basically checks whether an element is in view, and if it is, we apply the same CSS as if you're hovering over it)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (windowWidth <= 768) {
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

    const cards = Array.from(document.getElementsByClassName('homechoicecard'));

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const { loading, error, data } = useQuery(GET_HOME_CARDS);

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  const cardData = data.getHomeCards;

  const openSourceLogoArray = [
    { Logo: ReactLogo, href: 'https://reactjs.org/' },
    { Logo: GraphQLLogo, href: 'https://graphql.org/' },
    { Logo: ApolloLogo, href: 'https://www.apollographql.com/' },
    { Logo: NodeLogo, href: 'https://nodejs.org/' },
    { Logo: MongoLogo, href: 'https://www.mongodb.com/' },
  ];

  return (
    <Grid
      container
      rowSpacing={5}
      sx={{
        paddingTop: '25vh',
        minHeight: '100vh',
        maxHeight: '100%',
        justifyContent: 'center',
      }}
    >
      <Grid
        className="fadeIn"
        container
        spacing={5}
        sx={{ justifyContent: 'center' }}
      >
        <HomeChoiceCardRow cardData={cardData} />
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
          <a href="https://app.wombo.art/">here</a>.
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          textAlign: 'center',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Typography
            variant="h6"
            sx={{
              display: 'inline',
            }}
          >
            Created with:
          </Typography>
          {openSourceLogoArray.map(({ Logo, href }) => {
            return (
              <Box
                sx={{
                  transition: 'all 0.3s ease 0s',
                  '&:hover': {
                    transform: 'translateY(-7px)',
                  },
                }}
              >
                <a href={href}>
                  <Logo
                    style={{
                      paddingTop: '0.5rem',
                      height: '3.5rem',
                      width: '3.5rem',
                    }}
                  />
                </a>
              </Box>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomePage;
