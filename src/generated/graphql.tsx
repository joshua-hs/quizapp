import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answers = {
  __typename?: 'Answers';
  correctAnswer: Scalars['String'];
  question: Scalars['String'];
  userAnswer: Scalars['String'];
  userWasCorrect: Scalars['Boolean'];
};

export type AnswersInput = {
  question: Scalars['String'];
  userAnswer: Scalars['String'];
};

export type CreateHomeCardInput = {
  buttonColour: Scalars['String'];
  imageURL: Scalars['String'];
  title: Scalars['String'];
};

export type CreateImageChoiceCardInput = {
  correctAnswer: Scalars['String'];
  images: Array<Scalars['String']>;
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type CreateMultipleChoiceCardInput = {
  answers: Array<Scalars['String']>;
  correctAnswer: Scalars['String'];
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type CreateQuizAttemptInput = {
  answers: Array<AnswersInput>;
  topic: Scalars['String'];
};

export type CreateTrueFalseCardInput = {
  correctAnswer: Scalars['String'];
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type HomeCard = {
  __typename?: 'HomeCard';
  buttonColour: Scalars['String'];
  id: Scalars['ID'];
  imageURL: Scalars['String'];
  title: Scalars['String'];
};

export type ImageChoiceCard = {
  __typename?: 'ImageChoiceCard';
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type MultipleChoiceCard = {
  __typename?: 'MultipleChoiceCard';
  answers: Array<Scalars['String']>;
  id: Scalars['ID'];
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeCard: HomeCard;
  createImageChoiceCard: ImageChoiceCard;
  createMultipleChoiceCard: MultipleChoiceCard;
  createQuizAttempt: QuizAttempt;
  createTrueFalseCard: TrueFalseCard;
};

export type MutationCreateHomeCardArgs = {
  newHomeCard?: InputMaybe<CreateHomeCardInput>;
};

export type MutationCreateImageChoiceCardArgs = {
  newImageChoiceCard?: InputMaybe<CreateImageChoiceCardInput>;
};

export type MutationCreateMultipleChoiceCardArgs = {
  newMultipleChoiceCard?: InputMaybe<CreateMultipleChoiceCardInput>;
};

export type MutationCreateQuizAttemptArgs = {
  newQuizAttempt?: InputMaybe<CreateQuizAttemptInput>;
};

export type MutationCreateTrueFalseCardArgs = {
  newTrueFalseCard?: InputMaybe<CreateTrueFalseCardInput>;
};

export type Query = {
  __typename?: 'Query';
  getHomeCards: Array<Maybe<HomeCard>>;
  getImageChoiceCards: Array<Maybe<ImageChoiceCard>>;
  getMultipleChoiceCards: Array<Maybe<MultipleChoiceCard>>;
  getQuizAttempts: Array<Maybe<QuizAttempt>>;
  getTrueFalseCards: Array<Maybe<TrueFalseCard>>;
};

export type QueryGetImageChoiceCardsArgs = {
  topic?: InputMaybe<Scalars['String']>;
};

export type QueryGetMultipleChoiceCardsArgs = {
  topic?: InputMaybe<Scalars['String']>;
};

export type QueryGetTrueFalseCardsArgs = {
  topic?: InputMaybe<Scalars['String']>;
};

export type QuizAttempt = {
  __typename?: 'QuizAttempt';
  answers: Array<Answers>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  score: Scalars['Int'];
  statements: Array<Scalars['String']>;
  topic: Scalars['String'];
};

export type TrueFalseCard = {
  __typename?: 'TrueFalseCard';
  id: Scalars['ID'];
  question: Scalars['String'];
  topic: Scalars['String'];
};

export type CreateQuizAttemptMutationVariables = Exact<{
  newQuizAttempt: CreateQuizAttemptInput;
}>;

export type CreateQuizAttemptMutation = {
  __typename?: 'Mutation';
  createQuizAttempt: {
    __typename?: 'QuizAttempt';
    score: number;
    statements: Array<string>;
    answers: Array<{
      __typename?: 'Answers';
      question: string;
      userAnswer: string;
      userWasCorrect: boolean;
      correctAnswer: string;
    }>;
  };
};

export type GetHomeCardsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeCardsQuery = {
  __typename?: 'Query';
  getHomeCards: Array<{
    __typename?: 'HomeCard';
    id: string;
    title: string;
    buttonColour: string;
    imageURL: string;
  } | null>;
};

export type GetQuestionCardsQueryVariables = Exact<{
  topic: Scalars['String'];
}>;

export type GetQuestionCardsQuery = {
  __typename?: 'Query';
  getTrueFalseCards: Array<{
    __typename?: 'TrueFalseCard';
    question: string;
  } | null>;
  getMultipleChoiceCards: Array<{
    __typename?: 'MultipleChoiceCard';
    question: string;
    answers: Array<string>;
  } | null>;
  getImageChoiceCards: Array<{
    __typename?: 'ImageChoiceCard';
    question: string;
    images: Array<string>;
  } | null>;
};

export const CreateQuizAttemptDocument = gql`
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
export type CreateQuizAttemptMutationFn = Apollo.MutationFunction<
  CreateQuizAttemptMutation,
  CreateQuizAttemptMutationVariables
>;

/**
 * __useCreateQuizAttemptMutation__
 *
 * To run a mutation, you first call `useCreateQuizAttemptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizAttemptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizAttemptMutation, { data, loading, error }] = useCreateQuizAttemptMutation({
 *   variables: {
 *      newQuizAttempt: // value for 'newQuizAttempt'
 *   },
 * });
 */
export function useCreateQuizAttemptMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateQuizAttemptMutation,
    CreateQuizAttemptMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateQuizAttemptMutation,
    CreateQuizAttemptMutationVariables
  >(CreateQuizAttemptDocument, options);
}
export type CreateQuizAttemptMutationHookResult = ReturnType<
  typeof useCreateQuizAttemptMutation
>;
export type CreateQuizAttemptMutationResult =
  Apollo.MutationResult<CreateQuizAttemptMutation>;
export type CreateQuizAttemptMutationOptions = Apollo.BaseMutationOptions<
  CreateQuizAttemptMutation,
  CreateQuizAttemptMutationVariables
>;
export const GetHomeCardsDocument = gql`
  query getHomeCards {
    getHomeCards {
      id
      title
      buttonColour
      imageURL
    }
  }
`;

/**
 * __useGetHomeCardsQuery__
 *
 * To run a query within a React component, call `useGetHomeCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeCardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomeCardsQuery,
    GetHomeCardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHomeCardsQuery, GetHomeCardsQueryVariables>(
    GetHomeCardsDocument,
    options
  );
}
export function useGetHomeCardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomeCardsQuery,
    GetHomeCardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHomeCardsQuery, GetHomeCardsQueryVariables>(
    GetHomeCardsDocument,
    options
  );
}
export type GetHomeCardsQueryHookResult = ReturnType<
  typeof useGetHomeCardsQuery
>;
export type GetHomeCardsLazyQueryHookResult = ReturnType<
  typeof useGetHomeCardsLazyQuery
>;
export type GetHomeCardsQueryResult = Apollo.QueryResult<
  GetHomeCardsQuery,
  GetHomeCardsQueryVariables
>;
export const GetQuestionCardsDocument = gql`
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

/**
 * __useGetQuestionCardsQuery__
 *
 * To run a query within a React component, call `useGetQuestionCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionCardsQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetQuestionCardsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetQuestionCardsQuery,
    GetQuestionCardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetQuestionCardsQuery, GetQuestionCardsQueryVariables>(
    GetQuestionCardsDocument,
    options
  );
}
export function useGetQuestionCardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuestionCardsQuery,
    GetQuestionCardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetQuestionCardsQuery,
    GetQuestionCardsQueryVariables
  >(GetQuestionCardsDocument, options);
}
export type GetQuestionCardsQueryHookResult = ReturnType<
  typeof useGetQuestionCardsQuery
>;
export type GetQuestionCardsLazyQueryHookResult = ReturnType<
  typeof useGetQuestionCardsLazyQuery
>;
export type GetQuestionCardsQueryResult = Apollo.QueryResult<
  GetQuestionCardsQuery,
  GetQuestionCardsQueryVariables
>;
