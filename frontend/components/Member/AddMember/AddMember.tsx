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

  import { Form} from '../../ComanStyle/Form'

import Select from 'react-select'
import { useRouter } from "next/router";
import Redirect from '../../shared/Redirect';
interface props {
    myfunc(arg: boolean): void;
}
type Inputs = {
    username: string,
    email:string,
    gender:string,
    address: string   
    phone: string   ,
    fullname:string,
    memberDescription: String
  };
  interface gender {
    label: string;
    name:string
  }
  
const AddMember:React.FC  = ({}) => {
  const router = useRouter();
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

       
    console.log(error)
const errorMessage = (error:any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }
  
  
    return (
        <Form>
            <div  className="flex" >
            { data && data.registerMember && <Redirect to="/members" /> }

   
            <h1>Add User</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>Add User</h3>


</div>
                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
                 <div className="list" >
     <div className="group">      

     <label className="required-field" >User Name</label>
       <input   {...register("username", { required: true })} type="text"   />
       {errors.username && <span>This field is required</span>}
    </div>
    <div className="group">      
     <label className="required-field" >Full Name </label>
       <input {...register("fullname", { required: true })} type="text" />
       {errors.fullname && <span>This field is required</span>}
       
     </div>
 
     </div>
     
     <div className="list" >
  
     <div className="group">      
     <label className="required-field" >User Number </label>
       <input {...register("phone", { required: true })} type="number" />
       {errors.phone && <span>This field is required</span>}
       
     </div>
     <div className="group">      
     <label className="required-field" >User Email
 </label>
       <input type="email" {...register("email", { required: true })}  />
   
       {errors.email && <span>This field is required</span>}

 </div>
     

   
     
     </div>
     <div className="list" >
     <div className="group"> 
 <label className="required-field" >Gender
 </label>     
     <select {...register("gender", { required: true })}>
        <option value="">Gender</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
   
      {errors.gender && <span>This field is required</span>}
     </div>
     <div className="group">  


      <label  >Address</label>    
       <input {...register("address")} type="text" />
  
     
     </div>
     
 
 </div>
 <div className="list" >

<div  className="group-1" >
    <label   >Member Description</label>

    <textarea {...register("memberDescription", { required: true })} />
    </div>
</div>

 <div className="button" >
 <button type="button" onClick={()=> router.push('/members')} id="goback" >Go back</button>
     
     {!loading  &&
    <button> Add Member </button>
     
      }
        {loading  &&
        <button
        type="submit"
     >   Adding...
      </button>
     
      }
    
     </div>
   </form>
 
                 </div>

</div>

        </div>

        {  error && <>
            
            {toast.error( errorMessage(error))}
          
            </>} 
        </Form>
    )
}

export default AddMember
