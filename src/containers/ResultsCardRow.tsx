import { Button, Grid } from '@mui/material';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ResultsCard } from '../components/ResultsCard';
import { ResultsCardFlipped } from '../components/ResultsCardFlipped';

export default function ResultsCardRow({
  results,
  isFlipped,
  setIsFlipped,
}: any) {
  return (
    <>
      <Button onClick={() => setIsFlipped(!isFlipped)}>FLIP</Button>
      {results.map((result: any) => {
        const questionAndAnswer = Object.entries(result);
        return (
          <Grid item>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <ResultsCard
                question={questionAndAnswer[0]}
                userAnswer={questionAndAnswer[1]}
              />

              <ResultsCardFlipped />
            </ReactCardFlip>
          </Grid>
        );
      })}
    </>
  );
}
