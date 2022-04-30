import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

export interface ResultsCardFlippedProps {
  userWasCorrect?: boolean;
  imageURL?: string;
}

export function ResultsCardFlipped({
  userWasCorrect,
  imageURL,
}: ResultsCardFlippedProps) {
  return (
    <Card
      sx={{
        width: '18.75rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
        justifyContent: 'center',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="div">
          {userWasCorrect ? 'Correct!' : 'Incorrect.'}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={imageURL} />
    </Card>
  );
}
