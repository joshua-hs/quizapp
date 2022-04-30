import { gql } from '@apollo/client';

export const GET_HOME_CARDS = gql`
  query getHomeCards {
    getHomeCards {
      id
      title
      buttonColour
      imageURL
    }
  }
`;

export const GET_QUIZ_CARDS = gql`
  query getQuestionCards($topic: String!) {
    getTrueFalseCards(topic: $topic) {
      question
    }
    getMultipleChoiceCards(topic: $topic) {
      question
      answers
    }
    getImageChoiceCards(topic: $topic) {
      question
      images
    }
  }
`;

export const ATTEMPT_QUIZ = gql`
  mutation createQuizAttempt($newQuizAttempt: CreateQuizAttemptInput!) {
    createQuizAttempt(newQuizAttempt: $newQuizAttempt) {
      score
      answers {
        question
        userAnswer
        userWasCorrect
      }
    }
  }
`;
