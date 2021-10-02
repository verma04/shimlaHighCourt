
import { useGetUser } from '../apollo/actions';
import Redirect from '../apollo/queries/components/shared/Redirect'

export default (WrappedComponent, role, options = {ssr: false}) => {
  function WithAuth(props) {
    const { data: { getUser } = {}, loading, error } = useGetUser({fetchPolicy: 'network-only'});
  


    if (
      !loading &&
      (!getUser || error) &&
      typeof window !== 'undefined'
    ) {
   
      localStorage.removeItem("jwtToken");

      return <Redirect to="/login" query={{message: 'NOT_AUTHENTICATED'}} />
    }

    // TODO: Send a message to login page
    if (getUser) {
      if (role && !role.includes(getUser.role)) {
        return <Redirect to="/login" query={{message: 'NOT_AUTHORIZED'}}/>
      }
      return <WrappedComponent {...props} />
    }

    return (
      <div className="spinner-container">
      sddsds
      </div>
    )
   }


  return WithAuth;
}