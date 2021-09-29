
import { useEffect, useRef } from 'react';
import LoginForm from '../components/form/Login';

import { useSignIn } from '../apollo/actions';
import { useRouter } from 'next/router';
import Redirect from '../components/shared/Redirect';
import { toast ,ToastContainer} from 'react-toastify';


const Login = () => {
  const disposeId = useRef(null);
  const [ Login, {data, loading, error}] = useSignIn();
  const router = useRouter();
  const { message } = router.query;
console.log(data)
   
const errorMessage = error => {
  return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
}




  return (
    <>
   
           
            <LoginForm
              loading={loading}
              onSubmit={(signInData) => Login({variables: signInData})}/>
            { data && data.memberLogin &&  <Redirect to="/dashbaord" /> }
            { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
      
            {  error && <>
            
              {toast.error( errorMessage(error))}
            
              </>} 
     
    </>
  )
}

export default Login;