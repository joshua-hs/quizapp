import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ACTIONS } from '../../../reducers/QuizPageReducer';
import { TrueFalseCardProps } from '../TrueFalseCard/TrueFalseCard';

export interface MultipleChoiceCardProps extends TrueFalseCardProps {
  answers: string[];
}

export default function MultipleChoiceCard({
  index,
  question,
  answers,
  dispatch,
}: MultipleChoiceCardProps) {
  const [isAnswered, setIsAnswered] = useState(false);
  function handleClick(cardIndex: number, value: string) {
    setIsAnswered(true);
    dispatch({
      type: ACTIONS.SET_VISIBLE_QUESTIONS_ANSWERED,
      payload: { cardIndex },
    });
    dispatch({
      type: ACTIONS.MODIFY_USER_ANSWERS_PAYLOAD,
      payload: { question, userAnswer: value },
    });
  }

  return (
    <Card
      sx={{
        maxWidth: '18.75rem',
        minWidth: '12rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
        transition: 'all 0.5s ease 0s',
        filter: isAnswered ? 'brightness(60%)' : 'brightness(100%)',
      }}
    >
      <CardContent sx={{ textAlign: 'center', paddingTop: 'auto' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            m: 1,
          }}
        >
          {question}
        </Typography>
      </CardContent>
      <Divider
        absolute
        sx={{ width: '90%', margin: '0 16px', bottom: '210px' }}
      />
      <CardActions>
        <Grid
          sx={{
            position: 'absolute',
            bottom: '0.6rem',
            left: '0px',
            textAlign: 'center',
          }}
          container
          rowSpacing={1}
        >
          {answers.map((answer) => {
            return (
              <Grid item xs={12}>
                <Button
                  disabled={isAnswered}
                  variant="contained"
                  sx={{
                    width: '16rem',
                    height: '2.5rem',
                    background: '#7429ff',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#6200e0',
                    },
                  }}
                  onClick={() => handleClick(index, answer)}
                >
                  {answer}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </CardActions>
    </Card>
  );
}
