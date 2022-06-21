import { useMutation } from '@apollo/client';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useLocation } from 'react-router';
import ATTEMPT_QUIZ from '../../graphql/mutations';
import { ResultsContainer } from '../../components/ResultsContainer';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { StyledButton } from '../../components/StyledButton';

export function ResultsPage() {
  const { state }: any = useLocation();

  const [attemptQuiz, { loading, error, data }] = useMutation(ATTEMPT_QUIZ, {
    variables: { newQuizAttempt: state.userAnswersPayload },
  });

  useEffect(() => {
    attemptQuiz();
  }, []);

  if (loading) return <LoadingIndicator text="Retrieving results..." />;
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
        paddingBottom: '5vh',
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
          <StyledButton
            href="/"
            primarycolor="#7620FF"
            startIcon={<HomeIcon />}
            sx={{ marginTop: '2rem', width: '15rem' }}
          >
            Back to homepage
          </StyledButton>
        </>
      )}
    </Grid>
  );
}
