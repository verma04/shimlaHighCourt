
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS,
  GET_NOTIFICATIONS,
  GET_USER_SERVICES,
  GET__PAYMENT
 
 
} from '../queries/index'
interface member {
  id : string
  email: string
  gender: string
  username: string
  createdAt: string
  avatar: string
  role: string

 
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

export const useNotifications = () => useQuery(GET_NOTIFICATIONS);
export const useUserServices = () => useQuery(GET_USER_SERVICES);
export const useUserPayments = () => useQuery(GET__PAYMENT);



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
