import React, { useEffect, useReducer, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
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
import { LinearProgressBar } from '../../components/ProgressBar';

export function QuizPage() {
  const { topic } = useParams();

  const location: any = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color } = location.state;

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
    slidesToRender,
  } = quizState;

  const [progressBarValue, setProgressBarValue] = useState(
    (maxQuestionCursorAchieved / slidesToRender) * 100 || 0
  );

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
      // Make users' device will scroll back to top of page (this will only make a difference to users viewing the app on mobile)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      forwardNavigationButton.click();
    }
    setProgressBarValue(
      (maxQuestionCursorAchieved / slidesToRender) * 100 || 0
    );
  }, [visibleQuestionsAnswered]);

  const { loading, error, data } = useQuery(GET_QUIZ_CARDS, {
    variables: { topic },
  });

  if (loading) return <LoadingIndicator text="Retrieving quiz data..." />;
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
      justifyContent="center"
      alignItems="center"
      sx={{
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
      <Grid
        item
        color={color}
        xs={8}
        marginTop="4rem"
        marginBottom="4rem"
        display={{ xs: 'block', lg: 'none' }}
      >
        <LinearProgressBar
          className="fadeIn"
          color="inherit"
          value={progressBarValue}
        />
      </Grid>
      {questionsArray && topicStringNoWhiteSpace && (
        <Grid
          className="animate__animated animate__fadeInUp"
          item
          xs={12}
          marginBottom={{ xs: '4rem', lg: 'none' }}
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
      <Grid
        item
        color={color}
        xs={11}
        lg={8}
        display={{ xs: 'none', lg: 'block' }}
      >
        <LinearProgressBar
          className="fadeIn"
          color="inherit"
          value={progressBarValue}
        />
      </Grid>
    </Grid>
  );
}
