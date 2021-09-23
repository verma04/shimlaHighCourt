import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import withApplo from '../hoc/withapplo'
import { ToastContainer, toast } from 'react-toastify';
import  colors  from '../theme/lightTheme'
import { ThemeProvider } from "styled-components";
import GlobalFonts from '../theme/theme';
import{ Reset } from '../theme/reset'
import ScrollToTop from "react-scroll-to-top";

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
    <Head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "/> 
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
  </Head>
    <ThemeProvider theme={colors}>
    <Reset/>
    <GlobalFonts/>
    <ToastContainer theme="dark" />
  <Component {...pageProps} />

  <ScrollToTop smooth />
  </ThemeProvider>
  </div>
  )
}
export default withApplo(MyApp)
