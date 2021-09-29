
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS
 
 
} from '../queries/index'
interface member {
  id : string
  email: string
  gender: string
  username: string
  createdAt: string
  avatar: string
  role: string
  Chamber: string
  token: string
  chamberDet: [chamberDet]
  notifcations : [notifcations]
}

interface chamberDet {
  id: string
  month: string
  payment: string
  chamberId: string
  status: string
  createdAt: string
}


interface notifcations {
  id: string
  type: string

  message: string
}






export const useGetMembers = () => useQuery<member>(GET_MEMBERS);

export const useGetChamber = () => useQuery(GET_CHAMBERS);







// Auth actions start -----------------------

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { memberLogin: signedInUser }}) {
 
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
