import React, { useEffect, useMemo, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  ImageChoiceCard,
  MultipleChoiceCard,
  TrueFalseCard,
} from '../QuizQuestionCards';
import {
  ImageChoiceCard as ImageChoiceCardType,
  MultipleChoiceCard as MultipleChoiceCardType,
  TrueFalseCard as TrueFalseCardType,
} from '../../generated/graphql';
import './quizCarouselStyles.css';
import { ACTIONS } from '../../reducers/QuizPageReducer';

interface QuizCarouselProps {
  quizQuestions: any[];
  dispatch: Function;
  questionCursor: number;
  maxQuestionCursorAchieved: number;
  topic: string;
}

export function QuizCarousel({
  quizQuestions,
  dispatch,
  questionCursor,
  // I am hoping to make use of the prop below later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxQuestionCursorAchieved,
  topic,
}: QuizCarouselProps) {
  const isTrueFalseCard = (q: unknown): q is TrueFalseCardType =>
    !Object.prototype.hasOwnProperty.call(q, 'answers') &&
    !Object.prototype.hasOwnProperty.call(q, 'images');

  const isMultipleChoiceCard = (q: unknown): q is MultipleChoiceCardType =>
    Object.prototype.hasOwnProperty.call(q, 'answers');

  const isImageChoiceCard = (q: unknown): q is ImageChoiceCardType =>
    Object.prototype.hasOwnProperty.call(q, 'images');

  const [imageChoiceQuestionsState, setImageChoiceQuestionsState] = useState(0);

  const [imageChoiceQuestionString, setImageChoiceQuestionString] =
    useState('');

  // Calculating how many slides we need to render in the CarouselProvider component (this is a necessary prop).
  const slidesToRender = useMemo(() => {
    let imageChoiceQuestions = 0;
    quizQuestions.forEach((question) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      if (isImageChoiceCard(question)) {
        imageChoiceQuestions += 1;
      }
    });

    setImageChoiceQuestionsState(imageChoiceQuestions);

    return (
      (quizQuestions.length - imageChoiceQuestions) / 3 + imageChoiceQuestions
    );
  }, []);

  dispatch({
    type: ACTIONS.SET_SLIDES_TO_RENDER,
    payload: { slidesToRender },
  });

  function trueFalseConstructor(quizQuestionsArrayIndex: number) {
    return quizQuestions
      .slice(quizQuestionsArrayIndex, quizQuestionsArrayIndex + 3)
      .map((question: any, index: number) => {
        return (
          <TrueFalseCard
            index={index}
            question={question.question}
            dispatch={dispatch}
          />
        );
      });
  }

  function multipleChoiceConstructor(quizQuestionsArrayIndex: number) {
    return quizQuestions
      .slice(quizQuestionsArrayIndex, quizQuestionsArrayIndex + 3)
      .map((question: any, index: number) => {
        return (
          <MultipleChoiceCard
            index={index}
            question={question.question}
            answers={question.answers}
            dispatch={dispatch}
          />
        );
      });
  }

  const imageChoiceQuestionStringArray: any[] = [];

  function imageChoiceConstructor(quizQuestionsArrayIndex: number) {
    const { question } = quizQuestions[quizQuestionsArrayIndex];
    imageChoiceQuestionStringArray.push(question);
    const imageURLPrefix = `${process.env.REACT_APP_S3_BUCKET_PREFIX}${topic}/`;
    return quizQuestions[quizQuestionsArrayIndex].images.map(
      (image: string) => {
        return (
          <ImageChoiceCard
            imageURL={imageURLPrefix + image}
            question={question}
            answer={image.replace(/\.[^/.]+$/, '')}
            dispatch={dispatch}
          />
        );
      }
    );
  }

  const sliders: any = [];
  let multiplier: number | null = null;
  let questionIndex = 0;

  for (let i = 0; i < slidesToRender; i += 1) {
    // We want three questions to be displayed at once at the current questions are TrueFalse or MultipleChoice, but only one question to be shown if the question is an ImageChoice (each ImageChoice question contains an array of three images which will be displayed instead)
    questionIndex = multiplier ? questionIndex + multiplier : 0;
    const currentQuestion = quizQuestions[questionIndex];

    sliders.push(
      <Slide index={i}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={11}
          justifyContent="center"
          alignItems="center"
          paddingBottom="1rem"
          paddingTop={{ lg: '4rem' }}
          position="relative"
          marginTop={{
            xs: imageChoiceQuestionString ? '9rem' : '2rem',
            lg: '0rem',
          }}
        >
          {isTrueFalseCard(currentQuestion) &&
            trueFalseConstructor(questionIndex)}
          {isMultipleChoiceCard(currentQuestion) &&
            multipleChoiceConstructor(questionIndex)}
          {isImageChoiceCard(currentQuestion) && (
            <div>
              <Stack
                direction={{ xs: 'column', lg: 'row' }}
                justifyContent="center"
                alignItems="center"
                spacing={11}
              >
                {imageChoiceConstructor(questionIndex)}
              </Stack>
            </div>
          )}
        </Stack>
      </Slide>
    );
    if (!isImageChoiceCard(currentQuestion)) {
      multiplier = 3;
    } else {
      multiplier = 1;
    }
  }

  const questionCursorIndexThatImageQuestionsStartFrom =
    slidesToRender - imageChoiceQuestionsState;

  useEffect(() => {
    if (questionCursor >= questionCursorIndexThatImageQuestionsStartFrom) {
      setImageChoiceQuestionString(
        imageChoiceQuestionStringArray[
          questionCursor - questionCursorIndexThatImageQuestionsStartFrom
        ]
      );
    }
  }, [questionCursor]);

  return (
    <Box position="relative">
      <Typography
        align="center"
        color="#e30246"
        variant="h5"
        ml="50%"
        top="-6rem"
        mt={{ xs: '9rem', lg: '5rem' }}
        position="absolute"
        sx={{ transform: 'translate(-50%, 0)' }}
      >
        {imageChoiceQuestionString}
      </Typography>
      <Box pt={{ xs: imageChoiceQuestionString ? '6rem' : '', lg: '1rem' }}>
        <CarouselProvider
          naturalSlideWidth={0}
          naturalSlideHeight={0}
          totalSlides={slidesToRender}
          dragEnabled={false}
          touchEnabled={false}
          isIntrinsicHeight
        >
          <Stack direction="row">
            <Box sx={{ display: 'none' }}>
              <ButtonBack>
                <ArrowBackIosNewIcon
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.DECREMENT_QUESTION_CURSOR,
                    })
                  }
                  sx={{
                    fontSize: 75,
                    transition: 'all 0.3s ease 0s',
                    '&:hover': {
                      transform: 'translateX(-6px)',
                    },
                  }}
                />
              </ButtonBack>
            </Box>
            <Slider>{sliders}</Slider>
            <Box sx={{ display: 'none' }}>
              <ButtonNext id="forwardNavigationButton">
                <ArrowForwardIosIcon
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.INCREMENT_QUESTION_CURSOR,
                    })
                  }
                  sx={{
                    fontSize: 75,
                    transition: 'all 0.3s ease 0s',
                    '&:hover': {
                      transform: 'translateX(6px)',
                    },
                  }}
                />
              </ButtonNext>
            </Box>
          </Stack>
        </CarouselProvider>
      </Box>
    </Box>
  );
}
