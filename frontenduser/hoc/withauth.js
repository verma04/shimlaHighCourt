
import { toast } from 'react-toastify';
import { useGetUser } from '../apollo/actions';
import Redirect from '../components/shared/Redirect'



export default (WrappedComponent, role, options = {ssr: false}) => {
  function WithAuth(props) {
    const { data:{getMember} ={}, loading, error } = useGetUser({fetchPolicy: 'network-only'});
   

  
console.log(getMember)

    if (
      !loading &&
      (!getMember || error) &&
      typeof window !== 'undefined'
    ) {
   
      localStorage.removeItem("jwtToken");

      return <Redirect to="/login" query={{message: 'NOT_AUTHENTICATED'}} />
    }

    // TODO: Send a message to login page
    if (getMember) {
      if (role && !role.includes(getMember.role)) {
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