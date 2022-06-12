import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import theme from './theme/themeContext';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Quiz Project</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:topic" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
