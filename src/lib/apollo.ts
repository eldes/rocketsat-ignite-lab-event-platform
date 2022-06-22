import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7xvww0zi001xr4aenckf2/master',
  cache: new InMemoryCache()
});

export default client;