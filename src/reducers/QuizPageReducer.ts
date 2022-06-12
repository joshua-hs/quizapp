/* eslint-disable no-param-reassign */
import produce from 'immer';
import { Answers } from '../generated/graphql';

export const ACTIONS = {
  DECREMENT_QUESTION_CURSOR: 'decrementQuestionCursor',
  INCREMENT_QUESTION_CURSOR: 'incrementQuestionCursor',
  INCREMENT_MAX_QUESTION_CURSOR_ACHIEVED: 'inrementMaxQuestionCursorUnlocked',
  MODIFY_USER_ANSWERS_PAYLOAD: 'modifyUserAnswersPayload',
  RESET_VISIBLE_QUESTIONS_ANSWERED: 'resetVisibleQuestionsAnswered',
  SET_ALL_VISIBLE_QUESTIONS_ANSWERED: 'setAllVisibleQuestionsAnswered',
  SET_VISIBLE_QUESTIONS_ANSWERED: 'setVisibleQuestionsAnswered',
  SET_SLIDES_TO_RENDER: 'setSlidesToRender',
};

export const obtainQuizPageInitialState = (topic: string | undefined) => ({
  questionCursor: 0,
  maxQuestionCursorAchieved: 0,
  slidesToRender: null,
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
    case ACTIONS.DECREMENT_QUESTION_CURSOR: {
      // questionCursor cannot be lower than 0
      if (draft.questionCursor === 0) {
        break;
      }
      draft.questionCursor -= 1;
      break;
    }
    case ACTIONS.INCREMENT_QUESTION_CURSOR: {
      if (draft.questionCursor === draft.maxQuestionCursorAchieved) {
        break;
      }
      draft.questionCursor += 1;
      break;
    }
    case ACTIONS.INCREMENT_MAX_QUESTION_CURSOR_ACHIEVED: {
      draft.maxQuestionCursorAchieved += 1;
      break;
    }
    case ACTIONS.MODIFY_USER_ANSWERS_PAYLOAD: {
      if (
        // If question isn't currently within answers array...
        !draft.userAnswersPayload.answers.find(
          (answer: Answers) => answer.question === action.payload.question
        )
      ) {
        // (continued from above comment)... then add it.
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
    case ACTIONS.RESET_VISIBLE_QUESTIONS_ANSWERED:
      draft.visibleQuestionsAnswered = {
        0: false,
        1: false,
        2: false,
      };
      break;
    case ACTIONS.SET_VISIBLE_QUESTIONS_ANSWERED:
      draft.visibleQuestionsAnswered[action.payload.cardIndex] = true;
      break;
    case ACTIONS.SET_ALL_VISIBLE_QUESTIONS_ANSWERED:
      Object.entries(draft.visibleQuestionsAnswered).forEach(([key]) => {
        draft.visibleQuestionsAnswered[key[0]] = true;
      });
      break;
    case ACTIONS.SET_SLIDES_TO_RENDER:
      draft.slidesToRender = action.payload.slidesToRender;
      break;
    default:
      break;
  }
});
