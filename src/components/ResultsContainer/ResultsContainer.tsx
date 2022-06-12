import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ResultsAccordionArray } from './ResultsAccordionArray';
import { Answers } from '../../generated/graphql';
import { GradientText } from '../GradientText';

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
        <GradientText>You scored {score}/18</GradientText>
      </Grid>
      <Grid item xs={7} lg={12} sx={{ mt: 5 }}>
        <Typography component="span" variant="h5" sx={{ fontWeight: 'bold' }}>
          Click on the questions below to see more information and trivia.
        </Typography>
      </Grid>
      <Grid item lg={7} xs={11} sx={{ mt: 5 }}>
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
