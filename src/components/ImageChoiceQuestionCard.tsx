/* eslint-disable no-nested-ternary */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
  // The images I'm using for the Formula1 image questions are smaller and need to be given a bit of marginTop in order to look nice. The images for other topics need to fill the entire card, hence why I'm creating this boolean variable and using it within the sx prop of the CardMedia component.
  const isFormula1Image = imageURL.includes('formula1');
  function handleClick() {
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
        <CardMedia
          component="img"
          image={imageURL}
          sx={{
            height: isFormula1Image ? 'auto' : '100%',
            marginTop: isFormula1Image ? '35%' : '0',
          }}
        />
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={() => handleClick()}
            variant="contained"
            size="large"
            sx={{ position: 'absolute', bottom: '50px' }}
          >
            Confirm
          </Button>
        </CardActions>
      </>
    </Card>
  );
};
