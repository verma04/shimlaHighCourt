import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { AuthContextProvider } from '../store/authContext'
import jwt_decode from "jwt-decode";
function MyApp({ Component, pageProps }: AppProps) {

  // if (typeof window !== "undefined") {
  
  //   if (localStorage.jwtToken) {
  //     // Set auth token header auth
  //     const token = localStorage.jwtToken;
   
  //     // Decode token and get user info and exp
  //     const decoded:any = jwt_decode(token);
  //     // Set user and isAuthenticated
  //     // store.dispatch(setCurrentUser(decoded));
      
  //     const requestBody = {
  //       query: `
  //           query {
  //             verifyUser {
  //               email
              
               
  //             }
  //           }
  //         `
  //     };
  
  //     fetch('http://localhost:5000/graphql', {
  //       method: 'POST',
  //       body: JSON.stringify(requestBody),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + localStorage.jwtToken
  //       }
  //     })
  //       .then(res => {
  //         if (res.status !== 200 && res.status !== 201) {
  //              console.log('dsdssd')
  //         }
  //         return res.json();
  //       })
  //       .then(resData => {
  //           console.log(resData)
  //       })
  //       .catch(err => {
  //         console.log(err);
     
  //       });


  //     // Check for expired token
  //     const currentTime = Date.now() / 1000; // to get in 
  //     if (decoded.exp < currentTime) {
    
  //        console.log("user")

  //       // Logout user
  //       store.dispatch(sessionExpire());
    
  //       // Redirect to login
  //       window.location.href = "./login";
  //     }
  //   }
  // }
   
  return (
  
  <div>
    <AuthContextProvider >
  <Component {...pageProps} />
  </AuthContextProvider>
  </div>
  )
}
export default MyApp
