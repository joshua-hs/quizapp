import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ResultsAccordionArray } from './ResultsAccordionArray';
import { Answers } from '../../generated/graphql';

export interface ResultsContainerProps {
  results: Answers[];
  statements: string[];
  score: number;
}

export function ResultsContainer({
  results,
  statements,
  score,
}: ResultsContainerProps) {
  return (
    <Grid container sx={{ justifyContent: 'center', textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography
          borderRadius="8px"
          component="span"
          variant="h3"
          sx={{
            background:
              'linear-gradient(to right bottom, rgb(194, 93, 255), rgb(255, 214, 93));',
            fontWeight: 'medium',
            m: 1,
            padding: '0px 20px calc(4px)',
          }}
        >
          You scored {score}/18
        </Typography>
      </Grid>
      <Grid item lg={7} xs={11} sx={{ mt: 10 }}>
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <ResultsAccordionArray results={results} statements={statements} />
        </Box>
      </Grid>
    </Grid>
  );
}
