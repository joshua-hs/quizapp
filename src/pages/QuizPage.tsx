/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Grid } from '@mui/material';
import {
  ACTIONS,
  quizPageReducer,
  obtainQuizPageInitialState,
} from '../reducers/QuizPageReducer';
import QuizCardRow from '../containers/QuizCardRow';
import {
  TrueFalseCard,
  MultipleChoiceCard,
  ImageChoiceCard,
} from '../generated/graphql';
import { GET_QUIZ_CARDS } from '../queries';
import Loader from '../components/shared/Loader';

const QuizPage = () => {
  const { topic } = useParams();

  const navigate = useNavigate();

  const [quizState, dispatch] = useReducer(
    quizPageReducer,
    obtainQuizPageInitialState(topic)
  );

  const [cursorIncrementor, setCursorIncrementor] = useState(3);

  const { quizSection, questionCursor, visibleQuestionsAnswered } = quizState;

  useEffect(() => {
    if (quizSection === 2) {
      setCursorIncrementor(1);
    }
  }, [quizSection]);

  function navigateToResultsPage() {
    const { userAnswersPayload } = quizState;
    navigate('/results', { state: { userAnswersPayload } });
  }

  // If user has answered all three questions on the page, paginate to the next three questions
  useEffect(() => {
    if (!Object.values(visibleQuestionsAnswered).includes(false)) {
      dispatch({
        type: ACTIONS.SET_QUESTION_CURSOR,
        payload: { newQuestionCursor: questionCursor + cursorIncrementor },
      });
      dispatch({ type: ACTIONS.RESET_VISIBLE_QUESTIONS_ANSWERED });
    }
  }, [visibleQuestionsAnswered]);

  function getCurrentQuestions(
    fullQuestions: TrueFalseCard[] | MultipleChoiceCard[]
  ): TrueFalseCard[] | MultipleChoiceCard[] {
    return fullQuestions.slice(
      questionCursor,
      questionCursor + cursorIncrementor
    );
  }

  const { loading, error, data } = useQuery(GET_QUIZ_CARDS, {
    variables: { topic },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  if (quizSection === 3) {
    navigateToResultsPage();
    return <p>Calculating results...</p>;
  }

  const questionsArray = [
    data.getTrueFalseCards,
    data.getMultipleChoiceCards,
    data.getImageChoiceCards,
  ];

  const numberOfQuestionsInSection = questionsArray[quizSection].length;

  const currentQuestions = getCurrentQuestions(questionsArray[quizSection]);

  function updateQuizSection() {
    dispatch({ type: ACTIONS.RESET_VISIBLE_QUESTIONS_ANSWERED });
    dispatch({
      type: ACTIONS.SET_QUESTION_CURSOR,
      payload: { newQuestionCursor: 0 },
    });
    dispatch({ type: ACTIONS.SET_QUIZ_SECTION });
  }

  if (questionCursor === numberOfQuestionsInSection) {
    updateQuizSection();
  }

  console.log(currentQuestions);
  console.log('cursor: ', questionCursor);
  console.log('image question data: ', questionsArray[2]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        paddingTop: '22vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {currentQuestions && (
        <QuizCardRow
          currentQuestions={currentQuestions}
          dispatch={dispatch}
          quizSection={quizSection}
          topic={topic}
        />
      )}
    </Grid>
  );
};

export default QuizPage;
