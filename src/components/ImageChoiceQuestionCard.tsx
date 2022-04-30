/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, CircularProgress, Divider } from '@mui/material';
import { ACTIONS } from '../reducers/QuizPageReducer';

export interface ImageChoiceCardProps {
  imageURL: string;
  question: string;
  answer: string;
  dispatch: Function;
}

export const ImageChoiceQuestionCard = ({
  imageURL,
  question,
  answer,
  dispatch,
}: ImageChoiceCardProps) => {
  const [loaded, setLoaded] = useState(false);
  // let imageToDisplay;
  // fetch(imageURL)
  //   .then((response) => response.blob())
  //   .then((imageBlob) => {
  //     imageToDisplay = URL.createObjectURL(imageBlob);
  //   });
  function handleClick() {
    setLoaded(false);
    dispatch({
      type: ACTIONS.SET_ALL_VISIBLE_QUESTIONS_ANSWERED,
    });
    dispatch({
      type: ACTIONS.MODIFY_USER_ANSWERS_PAYLOAD,
      payload: { question, userAnswer: answer },
    });
  }
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
      <>
        {!loaded && (
          <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="inherit" />
          </Box>
        )}
        <CardMedia
          component="img"
          image={imageURL}
          sx={{ marginTop: '40%', display: loaded ? '' : 'none' }}
          onLoad={() => setLoaded(true)}
        />
        <Divider
          absolute
          sx={{ width: '90%', margin: '0 16px', bottom: '130px' }}
        />
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={() => handleClick()}
            variant="contained"
            size="large"
            sx={{ marginTop: '20%' }}
          >
            Confirm
          </Button>
        </CardActions>
      </>
    </Card>
  );
};
