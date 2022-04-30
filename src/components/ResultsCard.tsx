import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export interface ResultsCardProps {
  question: any;
  userAnswer: any;
}

export function ResultsCard({ question, userAnswer }: ResultsCardProps) {
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
          {question}
        </Typography>
        <Typography variant="h5" component="div">
          {`Your answer: ${userAnswer}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
