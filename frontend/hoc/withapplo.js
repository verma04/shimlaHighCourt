
import withApollo from 'next-with-apollo';
import  { InMemoryCache ,ApolloClient, } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';

import config from "../config";


const endpoint = process.browser
  ? config.clientEndpoint
  : config.serverEndpoint;
const httpLink = new HttpLink({ uri:"http://13.59.174.174:5000"});

const authMiddleware = new ApolloLink((operation, forward) => {

  operation.setContext({
    headers: {
  
        authorization: 'Bearer ' + localStorage.getItem('jwtToken')
      }
  });

  return forward(operation);
})

export default withApollo(
  ({ initialState  }) => {
    return new ApolloClient({
        link: concat(authMiddleware, httpLink),
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);