
import withApollo from 'next-with-apollo';
import  { InMemoryCache ,ApolloClient, } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {

  console.log(localStorage.getItem('jwtToken'), "sdssd")
  // add the authorization to the headers
  operation.setContext({
    headers: {
  
        authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTMzMzU0NDVjN2ZkNzcxMjJhOTg2Y2QiLCJlbWFpbCI6InNkZHNAZ21haWwuY29tIiwiaWF0IjoxNjMxNzc2MTQ3LCJleHAiOjZlKzM3fQ.jhjbjO1mDb2uu-28Qt9tE4XtJ6GKxtEq1omMVBs-6hQ"
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