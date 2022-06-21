import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import client from '../../apollo/client';
import { HomePage } from '..';

export default {
  title: 'FullPages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  </BrowserRouter>
);

export const Default = Template.bind({});
