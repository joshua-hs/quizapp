import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { ACTIONS } from '../reducers/QuizPageReducer';

export interface TrueFalseQuestionCardProps {
  index: number;
  question: string;
  dispatch: Function;
}

export default function TrueFalseQuestionCard({
  index,
  question,
  dispatch,
}: TrueFalseQuestionCardProps) {
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
        width: '18.75rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
        transition: 'all 0.3s ease 0s',
        filter: isAnswered ? 'brightness(70%)' : 'brightness(100%)',
      }}
    >
      <CardContent sx={{ textAlign: 'center', paddingTop: '70px' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', m: 1 }}
        >
          {question}
        </Typography>
      </CardContent>
      <Divider
        absolute
        sx={{ width: '90%', margin: '0 16px', bottom: '180px' }}
      />
      <CardActions>
        <Box
          sx={{
            background:
              'linear-gradient(153deg, rgba(95,198,255,1) 0%, rgba(255,100,244,0.9976365546218487) 100%);',
          }}
        >
          <Grid
            sx={{
              position: 'absolute',
              bottom: '80px',
              left: '0px',
              textAlign: 'center',
            }}
            container
            rowSpacing={3}
          >
            <Grid item xs={6}>
              <Button
                disabled={isAnswered}
                variant="contained"
                size="large"
                sx={{ width: '7rem', height: '3rem', background: '#2196F3' }}
                startIcon={<DoneIcon />}
                onClick={() => handleClick(index, 'true')}
              >
                True
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled={isAnswered}
                variant="contained"
                color="error"
                size="large"
                sx={{ width: '7rem', height: '3rem', background: '#E10050' }}
                endIcon={<CloseIcon />}
                onClick={() => handleClick(index, 'false')}
              >
                False
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardActions>
    </Card>
  );
}
