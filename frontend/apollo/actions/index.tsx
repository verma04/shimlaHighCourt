
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS
 
 
} from '../queries/index'



export const useGetMembers = () => useQuery(GET_MEMBERS);

export const useGetChamber = () => useQuery(GET_CHAMBERS);







// Auth actions start -----------------------

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { login: signedInUser }}) {
 
     const { token } = signedInUser;
     localStorage.setItem("jwtToken", token);
  }
})

export const useSignOut = () => {
  localStorage.removeItem("jwtToken");
}


export const useLazyGetUser = () => useLazyQuery(GET_USER)
export const useGetUser = () => useQuery(GET_USER)




// Auth actions end -----------------------
