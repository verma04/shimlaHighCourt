
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS,
  GET_NOTIFICATIONS,
  GET_USER_SERVICES,
  GET__PAYMENT,
  ADD_TICKET,
  USER_ID_TICKET,
  USER_TICKET,
  USER_ID_TICKET_COMMENT,
  USER_ID_TICKET_CLOSE,
  USER_ACT ,
  SER_PAYMENT,
  ALL_PAYMENTS
  

 
 
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
export const useUserticket = () => useQuery(USER_TICKET);


// Auth actions start -----------------------

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { memberLogin: signedInUser }}) {
 
     const { token } = signedInUser;
     localStorage.setItem("jwtToken", token);
  }
})

export const useAddTicket = () => useMutation(ADD_TICKET, {
  update(cache, { data: { addticket }}) {

    const {getUserticket}:any = cache.readQuery({query:USER_TICKET})

   
    cache.writeQuery({
      query: USER_TICKET,
      data: { getUserticket: [ addticket,...getUserticket]}
    });
 
    //  const { token } = signedInUser;
    //  localStorage.setItem("jwtToken", token);
  }
})

export const useUserticketById = () => useMutation(USER_ID_TICKET, {

})


export const UserticketByIdComment = () => useMutation(USER_ID_TICKET_COMMENT, {

  update(cache, { data: { getUserticketByIdComment }}) {

    
  
    console.log(getUserticketByIdComment )
   


    // cache.writeQuery({
    //   query:  USER_SERVICES,
    //   data: { userServices: assignServices.arr},
    //   variables: {
    //     id: assignServices.id
    // }
    // });
    cache.writeQuery({
      query: USER_ID_TICKET,
      data: { getUserticketById: getUserticketByIdComment },
      variables: {
        id: getUserticketByIdComment.id
    }
    });
 
    //  const { token } = signedInUser;
    //  localStorage.setItem("jwtToken", token);
  }


})



export const UserticketByIdClose = () => useMutation(USER_ID_TICKET_CLOSE, {

  update(cache, { data: { getUserticketByIdClose }}) {

    
  
  
   


    // cache.writeQuery({
    //   query:  USER_SERVICES,
    //   data: { userServices: assignServices.arr},
    //   variables: {
    //     id: assignServices.id
    // }
    // });
    cache.writeQuery({
      query: USER_ID_TICKET,
      data: { getUserticketById: getUserticketByIdClose },
      variables: {
        id: getUserticketByIdClose.id
    }
    });
 
    //  const { token } = signedInUser;
    //  localStorage.setItem("jwtToken", token);
  }


})


export const useSignOut = () => {
  localStorage.removeItem("jwtToken");
}


export const useLazyGetUser = () => useLazyQuery(GET_USER)
export const useGetUser = () => useQuery(GET_USER)

export const useGetUserActivities = () => useQuery(USER_ACT)



export const useServicepayment = () => useMutation(SER_PAYMENT, {



  update(cache, { data: { servicepayment }}) {

    
    console.log(servicepayment)
  
  
    const {userAllPayments}:any = cache.readQuery({query:ALL_PAYMENTS})


    const {getUserPayments}:any = cache.readQuery({query:GET__PAYMENT})
    // cache.writeQuery({
    //   query:  USER_SERVICES,
    //   data: { userServices: assignServices.arr},
    //   variables: {
    //     id: assignServices.id
    // }
    // });
     const filter = getUserPayments.filter((element:any) => element.id !==  servicepayment.serviceID  ) 

    // console.log(getUserPayments , "sdds")
    //  console.log(filter, "d")

    // cache.writeQuery({
    //   query: ALL_PAYMENTS,
    //   data: { userAllPayments:  [ servicepayment ,  ...userAllPayments ,   ] },
     
    // });

    cache.writeQuery({
      query: GET__PAYMENT,
      data: { getUserPayments:  filter },
     
    });
 
 
    //  const { token } = signedInUser;
    //  localStorage.setItem("jwtToken", token);
  }

})


export const useAllServicepayment = () => useQuery(ALL_PAYMENTS, {


})


// Auth actions end -----------------------
