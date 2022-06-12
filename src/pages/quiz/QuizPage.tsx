import React, { useEffect, useReducer } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Grid, Typography } from '@mui/material';
import {
  ACTIONS,
  quizPageReducer,
  obtainQuizPageInitialState,
} from '../../reducers/QuizPageReducer';
import { GET_QUIZ_CARDS } from '../../graphql/queries';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { QuizCarousel } from '../../components/QuizCarousel';
import 'animate.css';
import { GradientText } from '../../components/GradientText';

export function QuizPage() {
  const { topic } = useParams();

  const topicStringNoWhiteSpace = topic?.toLowerCase().replace(/ /g, '');

  const navigate = useNavigate();

  const forwardNavigationButton: HTMLElement = document.getElementById(
    'forwardNavigationButton'
  )!;

  const [quizState, dispatch] = useReducer(
    quizPageReducer,
    obtainQuizPageInitialState(topic)
  );

  const {
    questionCursor,
    maxQuestionCursorAchieved,
    visibleQuestionsAnswered,
  } = quizState;

  function navigateToResultsPage() {
    const { userAnswersPayload } = quizState;
    navigate('/results', { state: { userAnswersPayload } });
  }

  // If user has answered all three questions on the page, paginate to the next three questions
  useEffect(() => {
    if (!Object.values(visibleQuestionsAnswered).includes(false)) {
      dispatch({
        type: ACTIONS.INCREMENT_MAX_QUESTION_CURSOR_ACHIEVED,
      });
      dispatch({
        type: ACTIONS.INCREMENT_QUESTION_CURSOR,
      });
      dispatch({ type: ACTIONS.RESET_VISIBLE_QUESTIONS_ANSWERED });

      forwardNavigationButton.click();
    }
  }, [visibleQuestionsAnswered]);

  const { loading, error, data } = useQuery(GET_QUIZ_CARDS, {
    variables: { topic },
  });

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :{error.message}</p>;

  const questionsArray = [
    ...data.getTrueFalseCards,
    ...data.getMultipleChoiceCards,
    ...data.getImageChoiceCards,
  ];

  // This means that the user has answered all questions and should thus be taken to the results page
  if (quizState.userAnswersPayload.answers.length === questionsArray.length) {
    navigateToResultsPage();
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxHeight: '100%',
        marginTop: '-3rem',
        overflow: 'hidden',
      }}
    >
      <Grid
        className="fadeIn"
        item
        xs={12}
        textAlign="center"
        marginTop={{ xs: '4rem', lg: '2.5rem' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'medium', mb: 3 }}>
          You are answering questions about...
        </Typography>
        <GradientText>{topic}</GradientText>
      </Grid>
      {questionsArray && topicStringNoWhiteSpace && (
        <Grid
          className="animate__animated animate__fadeInUp"
          item
          xs={12}
          sx={{ paddingBottom: '6rem' }}
        >
          <QuizCarousel
            questionCursor={questionCursor}
            maxQuestionCursorAchieved={maxQuestionCursorAchieved}
            quizQuestions={questionsArray}
            dispatch={dispatch}
            topic={topicStringNoWhiteSpace}
          />
        </Grid>
      )}
    </Grid>
  );
}
