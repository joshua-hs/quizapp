import { gql } from '@apollo/client';

const ATTEMPT_QUIZ = gql`
  mutation createQuizAttempt($newQuizAttempt: CreateQuizAttemptInput!) {
    createQuizAttempt(newQuizAttempt: $newQuizAttempt) {
      score
      answers {
        question
        userAnswer
        userWasCorrect
        correctAnswer
      }
      statements
    }
  }
`;

export default ATTEMPT_QUIZ;
