import React from 'react';
import { Grid, Stack, Typography, Box } from '@mui/material';
import { ReactComponent as ReactLogo } from '../../assets/react_logo.svg';
import { ReactComponent as GraphQLLogo } from '../../assets/graphql.svg';
import { ReactComponent as MongoLogo } from '../../assets/mongodb-icon-1.svg';
import { ReactComponent as NodeLogo } from '../../assets/nodejs-icon.svg';
import { ReactComponent as ApolloLogo } from '../../assets/apollo-graphql-1.svg';

export default function Footer() {
  const openSourceLogoArray = [
    { Logo: ReactLogo, href: 'https://reactjs.org/' },
    { Logo: GraphQLLogo, href: 'https://graphql.org/' },
    { Logo: ApolloLogo, href: 'https://www.apollographql.com/' },
    { Logo: NodeLogo, href: 'https://nodejs.org/' },
    { Logo: MongoLogo, href: 'https://www.mongodb.com/' },
  ];
  return (
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
  );
}
