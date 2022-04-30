/* eslint-disable no-param-reassign */
import produce from 'immer';
import { Answers } from '../generated/graphql';

export const ACTIONS = {
  MODIFY_USER_ANSWERS_PAYLOAD: 'modifyUserAnswersPayload',
  SET_VISIBLE_QUESTIONS_ANSWERED: 'setVisibleQuestionsAnswered',
  SET_ALL_VISIBLE_QUESTIONS_ANSWERED: 'setAllVisibleQuestionsAnswered',
  RESET_VISIBLE_QUESTIONS_ANSWERED: 'resetVisibleQuestionsAnswered',
  SET_QUESTION_CURSOR: 'setQuestionCursor',
  SET_QUIZ_SECTION: 'setQuizSection',
};

export const obtainQuizPageInitialState = (topic: string | undefined) => ({
  quizSection: 0,
  questionCursor: 0,
  visibleQuestionsAnswered: {
    0: false,
    1: false,
    2: false,
  },
  userAnswersPayload: {
    topic,
    answers: [],
  },
});

export const quizPageReducer = produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.MODIFY_USER_ANSWERS_PAYLOAD: {
      if (
        // If question isn't currently within answers array...
        !draft.userAnswersPayload.answers.find(
          (answer: Answers) => answer.question === action.payload.question
        )
      ) {
        // (continued from line 31)... then add it.
        draft.userAnswersPayload.answers.push({
          question: action.payload.question,
          userAnswer: action.payload.userAnswer,
        });
        break;
      }
      const index = draft.userAnswersPayload.answers.findIndex(
        (answer: Answers) => answer.question === action.payload.question
      );
      draft.userAnswersPayload.answers[index].userAnswer =
        action.payload.userAnswer;
      break;
    }
    case ACTIONS.SET_VISIBLE_QUESTIONS_ANSWERED:
      draft.visibleQuestionsAnswered[action.payload.cardIndex] = true;
      break;
    case ACTIONS.SET_ALL_VISIBLE_QUESTIONS_ANSWERED:
      Object.entries(draft.visibleQuestionsAnswered).forEach(([key]) => {
        draft.visibleQuestionsAnswered[key[0]] = true;
      });
      // draft.visibleQuestionsAnswered[action.payload.cardIndex] = true;
      break;
    case ACTIONS.RESET_VISIBLE_QUESTIONS_ANSWERED:
      draft.visibleQuestionsAnswered = {
        0: false,
        1: false,
        2: false,
      };
      break;
    case ACTIONS.SET_QUESTION_CURSOR:
      draft.questionCursor = action.payload.newQuestionCursor;
      break;
    case ACTIONS.SET_QUIZ_SECTION:
      draft.quizSection += 1;
      break;
    default:
      break;
  }
});
