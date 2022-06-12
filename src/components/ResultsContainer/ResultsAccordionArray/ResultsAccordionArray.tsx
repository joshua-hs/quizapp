import React, { useState } from 'react';
import { ResultAccordion } from './ResultAccordion';
import { Answers } from '../../../generated/graphql';

export interface ResultsAccordionArrayProps {
  results: Answers[];
  statements: string[];
}

export function ResultsAccordionArray({
  results,
  statements,
}: ResultsAccordionArrayProps) {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  function resultInformationConstructor() {
    const resultAccordionArrayToReturn = [];
    for (let i = 0; i < results.length; i += 1) {
      const { question, userAnswer, correctAnswer, userWasCorrect } =
        results[i];
      const shouldDarken =
        question !== selectedQuestion && selectedQuestion !== '';
      resultAccordionArrayToReturn.push(
        <ResultAccordion
          question={question}
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
          userWasCorrect={userWasCorrect}
          statement={statements[i]}
          setSelectedQuestion={setSelectedQuestion}
          shouldDarken={shouldDarken}
        />
      );
    }

    return resultAccordionArrayToReturn;
  }

  return <div>{resultInformationConstructor()}</div>;
}
