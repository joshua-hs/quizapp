/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ImageChoiceQuestionCard } from '../components/ImageChoiceQuestionCard';
import MultipleChoiceQuestionCard from '../components/MultipleChoiceQuestionCard';
import TrueFalseQuestionCard from '../components/TrueFalseQuestionCard';
import {
  ImageChoiceCard,
  MultipleChoiceCard,
  TrueFalseCard,
} from '../generated/graphql';

interface QuizCardRowProps {
  currentQuestions: TrueFalseCard[] | MultipleChoiceCard[] | ImageChoiceCard[];
  dispatch: Function;
  quizSection: number;
  topic: string | undefined;
}

const BASE_S3_URL = process.env.REACT_APP_S3_BUCKET_PREFIX;

const isMultipleChoiceCard = (q: unknown): q is MultipleChoiceCard =>
  Object.prototype.hasOwnProperty.call(q, 'answers');

const isImageChoiceCard = (q: unknown): q is ImageChoiceCard =>
  Object.prototype.hasOwnProperty.call(q, 'images');

export default function QuizCardRow({
  currentQuestions,
  dispatch,
  quizSection,
  topic = 'Star Wars', // If no topic is provided then 'Star Wars' will be used as default value
}: QuizCardRowProps) {
  if (isImageChoiceCard(currentQuestions[0])) {
    // eslint-disable-next-line no-param-reassign
    topic = decodeURI(topic);
    // eslint-disable-next-line no-param-reassign
    topic = topic.replaceAll(' ', '').toLowerCase();
    return (
      <div>
        <Typography
          sx={{ textAlign: 'center', marginBottom: '4rem' }}
          variant="h4"
          component="div"
        >
          {currentQuestions[0].question}
        </Typography>
        <Grid
          container
          item
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          spacing={4}
        >
          {currentQuestions[0].images.map((image) => (
            <Grid item>
              <ImageChoiceQuestionCard
                imageURL={`${BASE_S3_URL}${topic}/${image}`}
                dispatch={dispatch}
                question={currentQuestions[0].question}
                answer={image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  return (
    <>
      {currentQuestions.map((question, index) => (
        <Grid item>
          {quizSection === 0 && (
            <TrueFalseQuestionCard
              index={index}
              question={question.question}
              dispatch={dispatch}
            />
          )}
          {isMultipleChoiceCard(question) && (
            <MultipleChoiceQuestionCard
              index={index}
              question={question.question}
              answers={question.answers}
              dispatch={dispatch}
            />
          )}
        </Grid>
      ))}
    </>
  );
}
