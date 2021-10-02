
import { useQuery,gql, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {

  SIGN_IN,
  
  GET_USER,
 
  GET_MEMBERS,
  GET_CHAMBERS,
  ADD_MEMBERS,
  ADD_CHAMBER,
  ADD_PARKING,
  USER_SERVICES,
  CREATE_SERVICES,
  GET_SERVICES,
  EDIT_MEMBERS,
  ASSIGN_SERVICES,
  DELETE_SERVICES
 
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


export const useEditMember = () => useMutation(EDIT_MEMBERS, {
  update(cache, { data: {editMember}}) {
 
  
    const {getMembers}:any = cache.readQuery({query:GET_MEMBERS})
  
    const data1  =  getMembers.filter((element1:any) => element1.id !== editMember.id )   

    toast.success(`Member Edited ${editMember.fullname}`)
    
    cache.writeQuery({
      query: GET_MEMBERS,
      data: { getMembers: [ editMember , ...data1]}
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




export const useAssignServices = () => useMutation(ASSIGN_SERVICES, {
    
  
  update(cache, { data: {assignServices}}) {


try {


     toast.success("Service Added")
      cache.writeQuery({
        query:  USER_SERVICES,
        data: { userServices: assignServices.arr},
        variables: {
          id: assignServices.id
      }
      });
   
    }
  
  catch (err) {
    console.log(err)
  }
}
  });
  


  export const  useDeleteUserServices = () => useMutation(DELETE_SERVICES, {
    update(cache, { data: {deleteUserServices}}) {
       
      window.location.reload()
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
