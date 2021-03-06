// import React , {useState} from 'react'
// import { Section } from './Style'

// import { useForm, SubmitHandler } from "react-hook-form";
// import { gql, useMutation } from '@apollo/client';

// import { useGetUser } from '../../apollo/actions';
  
// const AddMember:React.FC  = () => {
 
  

//   const { data, loading, error } = useGetUser();
 
 
       
//   type Inputs = {
//     email: string,
//     username:string,
//   };

//     const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
//    console.log(data)
 
//      }
 
//     return (
//         <Section>
//             <div id="myModal" className="modal">
         
//             <h1>Profile</h1>
// <div data-aos="fade-down" className="modal-content">
 




  
//         <div className="form" >
                 
//                  <form onSubmit={handleSubmit(onSubmit)}>
     
//      <div className="group">      
//        <input {...register("email")}   defaultValue={data.getMember.email} type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>Email</label>
//      </div>
//      <div className="group">      
//        <input {...register("username")}  defaultValue={data.getMember.username} type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>Username</label>
//      </div>


//      <div className="group">      
//        <input  type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>Password</label>
//      </div>



//      <button> Edit </button>
     
//    </form>
 
//                  </div>

// </div>

//         </div>

//         </Section>
//     )
// }

// export default AddMember




import React , {useState} from 'react'
import { Section } from './Style'
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { useGetUser } from '../../apollo/actions';

  import { Form} from '../ComanStyle/Form'


import { useRouter } from "next/router";
import Redirect from '../shared/Redirect';

const AddMember:React.FC  = ({}) => {
  const router = useRouter();
  
  const { data, loading, error } = useGetUser();
 
 
       
  type Inputs = {
    username: string,
    email:string,
    gender:string,
    address: string   
    phone: string   ,
    fullname:string,
    memberDescription: String
  };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
   console.log(data)
 
     }


  
  
    return (
        <Form>
            <div  className="flex" >


   
            <h1>My Profile</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>My Profile</h3>


</div>
                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
                 <div className="list" >
     <div className="group">      

     <label className="required-field" >User Name</label>
       <input  defaultValue={data.getMember.username } {...register("username", { required: true })} type="text"   />
       {errors.username && <span>This field is required</span>}
    </div>
    <div className="group">      
     <label className="required-field" >Full Name </label>
       <input defaultValue={data.getMember.fullname }  {...register("fullname", { required: true })} type="text" />
       {errors.fullname && <span>This field is required</span>}
       
     </div>
 
     </div>
     
     <div className="list" >
  
     <div className="group">      
     <label className="required-field" >User Number </label>
       <input defaultValue={data.getMember.phone }  {...register("phone", { required: true })} type="number" />
       {errors.phone && <span>This field is required</span>}
       
     </div>
     <div className="group">      
     <label className="required-field" >User Email
 </label>
       <input defaultValue={data.getMember.email}  type="email" {...register("email", { required: true })}  />
   
       {errors.email && <span>This field is required</span>}

 </div>
     

   
     
     </div>
     <div className="list" >

     <div className="group">  


      <label  >Address</label>    
       <input defaultValue={data.getMember.address}  {...register("address")} type="text" />
  
     
     </div>
     
 
 </div>
 <div className="list" >

<div  className="group-1" >
    <label   >Member Description</label>

    <textarea defaultValue={data.getMember.memberDescription} {...register("memberDescription", { required: true })} />
    </div>
</div>

 <div className="button" >

     
     {!loading  &&
    <button> Save Changes </button>
     
      }
        {loading  &&
        <button
        type="submit"
     >   Saving...
      </button>
     
      }
    
     </div>
   </form>
 
                 </div>

</div>

        </div>

       
        </Form>
    )
}

export default AddMember
