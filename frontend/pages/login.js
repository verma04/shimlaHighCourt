
import { useEffect, useRef } from 'react';
import LoginForm from '../compoents/form/Login';

import { useSignIn } from '../apollo/actions';
import { useRouter } from 'next/router';
import Redirect from '../compoents/shared/Redirect';


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
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
           
            <LoginForm
              loading={loading}
              onSubmit={(signInData) => Login({variables: signInData})}/>
            { data && data.login &&  <Redirect to="/set" /> }
            { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;