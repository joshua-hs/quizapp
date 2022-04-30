import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { Box, Stack, Typography } from '@mui/material';
import HomeChoiceCardRow from '../containers/HomeChoiceCardRow';
import { ReactComponent as ReactLogo } from '../images/react_logo.svg';
import { ReactComponent as GraphQLLogo } from '../images/graphql.svg';
import { ReactComponent as MongoLogo } from '../images/mongodb-icon-1.svg';
import { ReactComponent as NodeLogo } from '../images/nodejs-icon.svg';
import { ReactComponent as ApolloLogo } from '../images/apollo-graphql-1.svg';
import { GET_HOME_CARDS } from '../queries';
import Loader from '../components/shared/Loader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOME_CARDS);
  if (loading) return <Loader />;
  if (error) return <p>Error : {error}</p>;
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
      <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
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
        <Stack direction="row" alignItems="center" sx={{}}>
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
