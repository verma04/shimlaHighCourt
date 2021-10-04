
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
  DELETE_SERVICES,
  TICKET,
  DELETE_MEMBER,
  USER_ID_TICKET,
  DELETE_SER,

  USER_ID_TICKET_COMMENT_ADMIN,
  USER_ID_TICKET_CLOSE
 
} from '../queries/index'


import { ToastContainer, toast } from 'react-toastify';
export const useGetMembers = () => useQuery(GET_MEMBERS);

export const useGetChamber = () => useQuery(GET_CHAMBERS);

export const useUserticket = () => useQuery(TICKET);

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


export const useDeleteMember = () => useMutation(DELETE_MEMBER, {
  update(cache, { data: {deleteMember}}) {
 
  
    const {getMembers}:any = cache.readQuery({query:GET_MEMBERS})
  
    const data1  =  getMembers.filter((element1:any) => element1.id !== deleteMember.id )   

    toast.success(`Member Deleted`)
    
    cache.writeQuery({
      query: GET_MEMBERS,
      data: { getMembers: [  ...data1]}
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


export const useDeleteServices = () => useMutation(DELETE_SER, {
  update(cache, { data: { deleteFinnaceServices}}) {

    console.log(deleteFinnaceServices.id)
 
     const {getServices}:any = cache.readQuery({query:GET_SERVICES})

     const data = getServices.filter((elemnet:any) => elemnet.id !== deleteFinnaceServices.id)

   toast.success("Service Deleted")
    cache.writeQuery({
      query: GET_SERVICES,
      data: {getServices: data}
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

      toast.success("Service Deelted")
      cache.writeQuery({
        query:  USER_SERVICES,
        data: { userServices: deleteUserServices.arr},
        variables: {
          id: deleteUserServices.id
      }
      });
       
      // window.location.reload()
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



export const useUserticketById = () => useMutation(USER_ID_TICKET, {

})


export const UserticketByIdCommentAdmin = () => useMutation(USER_ID_TICKET_COMMENT_ADMIN, {

  update(cache, { data: { getUserticketByIdCommentAdmin }}) {

    
  
    console.log(getUserticketByIdCommentAdmin )
   


    // cache.writeQuery({
    //   query:  USER_SERVICES,
    //   data: { userServices: assignServices.arr},
    //   variables: {
    //     id: assignServices.id
    // }
    // });
    cache.writeQuery({
      query: USER_ID_TICKET,
      data: { getUserticketById: getUserticketByIdCommentAdmin },
      variables: {
        id: getUserticketByIdCommentAdmin.id
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
