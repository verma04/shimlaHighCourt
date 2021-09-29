import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import {


    useMemberegister
   
   
  } from '../../../apollo/actions'

import Select from 'react-select'

interface props {
    myfunc(arg: boolean): void;
}
type Inputs = {
    username: string,
    email:string,
    gender:string,
    address: string   
    phone: string   
  };
  interface gender {
    label: string;
    name:string
  }
  
const AddMember:React.FC<props>  = ({myfunc}) => {
    const [RegisterMemberMutation, { data, loading, error }] = useMemberegister();
    const [ gender , setgender] = useState('')

    const genders: gender[] = [
        { label: 'male', name: 'Male' },
        { label: 'female', name: 'Female' },
       
      ]

   
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
        

     RegisterMemberMutation({ variables: data });

    }

       
const errorMessage = (error:any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }
  
  
    return (
        <Section>
            <div id="myModal" className="modal">
            { data && data.registerMember && myfunc(false) }

<div data-aos="fade-down" className="modal-content">
  <span  onClick={()=> myfunc(false)} className="close">&times;</span>



  
        <div className="form" >
                 
                 <form onSubmit={handleSubmit(onSubmit)}>
     
     <div className="group">      
       <input {...register("username")} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Name</label>
     </div>
       
     <div className="group">      
       <input {...register("phone")} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Number </label>
     </div>
     <div className="group">      
       <input type="email" {...register("email")}  required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Email
 </label>
     </div>
     <div className="group">      
     <select {...register("gender")}>
        <option value="">Gender</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
       <span className="highlight"></span>
       <span className="bar"></span>
      
     </div>
   
     <div className="group">      
       <input {...register("address")} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Address</label>
     </div>
 
     <button> Add Member </button>
     
   </form>
 
                 </div>

</div>

        </div>

        {  error && <>
            
            {toast.error( errorMessage(error))}
          
            </>} 
        </Section>
    )
}

export default AddMember
