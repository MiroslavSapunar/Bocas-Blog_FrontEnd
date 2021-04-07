import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://54.242.231.128/graphql',
  cache: new InMemoryCache()
});