import React , {useState} from 'react'
import { Section } from './Style'

import { useForm, SubmitHandler } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';

import { useGetUser } from '../../apollo/actions';
  
const AddMember:React.FC  = () => {
 
  

  const { data, loading, error } = useGetUser();
 
 
       
  type Inputs = {
    email: string,
    username:string,
  };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
   console.log(data)
 
     }
 
    return (
        <Section>
            <div id="myModal" className="modal">
         
            <h1>Profile</h1>
<div data-aos="fade-down" className="modal-content">
 




  
        <div className="form" >
                 
                 <form onSubmit={handleSubmit(onSubmit)}>
     
     <div className="group">      
       <input {...register("email")}   defaultValue={data.getMember.email} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Email</label>
     </div>
     <div className="group">      
       <input {...register("username")}  defaultValue={data.getMember.username} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Username</label>
     </div>


     <div className="group">      
       <input  type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Password</label>
     </div>



     <button> Edit </button>
     
   </form>
 
                 </div>

</div>

        </div>

        </Section>
    )
}

export default AddMember
