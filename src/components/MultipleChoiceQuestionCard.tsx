import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { ACTIONS } from '../reducers/QuizPageReducer';
import { TrueFalseQuestionCardProps } from './TrueFalseQuestionCard';

export interface MultipleChoiceQuestionCardProps
  extends TrueFalseQuestionCardProps {
  answers: string[];
}

export default function MultipleChoiceQuestionCard({
  index,
  question,
  answers,
  dispatch,
}: MultipleChoiceQuestionCardProps) {
  function handleClick(cardIndex: number, value: string) {
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
        width: '18.75rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
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
