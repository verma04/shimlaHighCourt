import Redirect from './Redirect';
import { connect } from "react-redux";
const withAuth = Component => {
  const Auth = (props) => {

  
    // Login data added to props via redux-store (or use react context for example)
    const { auth } = props;

    // If user is not logged in, return login component
    if (auth.isAuthenticated ) {
      return (
        <Component {...props} />
        
      );
    }

    // If user is logged in, return original component
    return (
        <Redirect to="/login" />

    )
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};



  
export default connect(
  mapStateToProps,
  { }
)(  (withAuth));