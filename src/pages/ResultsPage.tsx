import { useMutation } from '@apollo/client';
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useLocation } from 'react-router';
import { ATTEMPT_QUIZ } from '../queries';
import ResultsContainer from '../containers/ResultsContainer';
import Loader from '../components/shared/Loader';

export default function ResultsPage() {
  const { state }: any = useLocation();

  const [attemptQuiz, { loading, error, data }] = useMutation(ATTEMPT_QUIZ, {
    variables: { newQuizAttempt: state.userAnswersPayload },
  });

  useEffect(() => {
    attemptQuiz();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxHeight: '100%',
        paddingTop: '5vh',
        paddingBottom: '10vh',
      }}
    >
      {data && (
        <>
          <Confetti numberOfPieces={800} recycle={false} />
          <ResultsContainer
            results={data.createQuizAttempt.answers}
            statements={data.createQuizAttempt.statements}
            score={data.createQuizAttempt.score}
          />
        </>
      )}
    </Grid>
  );
}
