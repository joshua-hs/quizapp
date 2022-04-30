import { useMutation } from '@apollo/client';
import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ATTEMPT_QUIZ } from '../queries';
import CatFactsCard from '../components/CatFactsCard';

export default function ResultsPage() {
  const { state }: any = useLocation();

  useEffect(() => {
    console.log('render');
  });

  const [catFact, setCatFact] = useState('');

  const [attemptQuiz, { loading, error, data }] = useMutation(ATTEMPT_QUIZ, {
    variables: { newQuizAttempt: state.userAnswersPayload },
  });

  async function fetchCatFact() {
    const response = await fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((fact) => {
        return fact.fact;
      });
    setCatFact(response);
  }

  const handleFetchCatFact = () => {
    fetchCatFact();
  };

  const handleAttemptQuiz = () => {
    attemptQuiz();
    setCatFact('');
  };

  // On first render, call fetchCatFact to display initial fact
  useEffect(() => {
    fetchCatFact();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid
      container
      spacing={4}
      sx={{
        paddingTop: '25vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {catFact !== '' && (
        <CatFactsCard
          catFact={catFact}
          attemptQuiz={handleAttemptQuiz}
          fetchCatFact={handleFetchCatFact}
        />
      )}

      {data && (
        <ul>
          {data.createQuizAttempt.answers.map((d: any) => {
            return (
              <div>
                <li>{d.question}</li>
                <li>{d.userAnswer}</li>
                <li>{d.userWasCorrect}</li>
              </div>
            );
          })}
        </ul>
      )}
    </Grid>
  );
}
