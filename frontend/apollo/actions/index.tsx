
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS,
  ADD_MEMBERS,
  ADD_CHAMBER,
  ADD_PARKING,
  GET_PARKING,
  CREATE_SERVICES,
  ASSIGN_PARKING,
  GET_SERVICES
  
 
} from '../queries/index'


import { ToastContainer, toast } from 'react-toastify';
export const useGetMembers = () => useQuery(GET_MEMBERS);

export const useGetChamber = () => useQuery(GET_CHAMBERS);



export const useMemberegister = () => useMutation(ADD_MEMBERS, {
  update(cache, { data: { registerMember}}) {
 
    const {getMembers}:any = cache.readQuery({query:GET_MEMBERS})
    toast.success("Member Added")
    
    cache.writeQuery({
      query: GET_MEMBERS,
      data: { getMembers: [ registerMember , ...getMembers]}
    });
 
  }
});

export const useCreateServices = () => useMutation(CREATE_SERVICES, {
  update(cache, { data: { createServices}}) {
 
     const {getServices}:any = cache.readQuery({query:GET_SERVICES})
   toast.success("Service Added")
    cache.writeQuery({
      query: GET_SERVICES,
      data: {getServices: [ createServices , ...getServices]}
    });
 
  }
});



export const useAddChamber = () => useMutation(ADD_CHAMBER, {
  update(cache, { data: {addChambers}}) {
 
 
    const {getChamber}:any = cache.readQuery({query:GET_CHAMBERS})

   
    cache.writeQuery({
      query: GET_CHAMBERS,
      data: { getChamber: [...getChamber, addChambers]}
    });
 
  }
});


export const useCreateParking = () => useMutation(ADD_PARKING, {
  update(cache, { data: {createParking}}) {
 
 
    const {getParking}:any = cache.readQuery({query:GET_PARKING})
  
  
   
    cache.writeQuery({
      query: GET_PARKING,
      data: {getParking: [createParking, ...getParking]}
    });
 
  }
});



export const useAssignParking = () => useMutation(ASSIGN_PARKING, {
  update(cache, { data: {addChamberToMember}}) {
 
    console.log(addChamberToMember)
  
    const {getChamber}:any = cache.readQuery({query:GET_CHAMBERS})

   
    cache.writeQuery({
      query: GET_CHAMBERS,
      data: { getChamber: [...getChamber]}
    });
 
 
  }
});


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
