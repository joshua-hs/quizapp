import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://quizapp-backend-heroku.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
