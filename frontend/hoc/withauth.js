
import { useGetUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';

export default (WrappedComponent, role) => (props) => {
 

  if (
    !loading &&
    (!user || error) &&
    typeof window !== 'undefined'
  ) {
    return <Redirect to="/" />
  }

  // TODO: Send a message to login page
  if (user) {
    if (role && user.role !== role) {
      return <Redirect to="/" />
    }
    return <WrappedComponent {...props} />
  }

  return <p>Authenticating...</p>;
}