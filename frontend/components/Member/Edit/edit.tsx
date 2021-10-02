import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import {


  useEditMember
   
   
  } from '../../../apollo/actions'

  import { Form} from '../../ComanStyle/Form'

import Select from 'react-select'
import { useRouter } from "next/router";
import Redirect from '../../shared/Redirect';
import {


  GET_MEMBER_ID
 
} from '../../../apollo/queries'
interface props {
    myfunc(arg: boolean): void;
}
type Inputs = {
  id: string
    username: string,
    email:string,
    gender:string,
    address: string   
    phone: string   ,
    fullname:string,
    memberDescription: String
    status:string
  };
  interface gender {
    label: string;
    name:string
  }
  interface id {
  id:string
  }

const AddMember:React.FC<id>  = (id) => {
  const router = useRouter();
   
    const [ gender , setgender] = useState('')
 
    const [ status , setstatus] = useState('')
    interface member {
   
      chamberId : string 
      id: string
       gender: string
        username: string
        createdAt: string
        avatar: string
        Chamber: string
        fullname: string
        slug:string
        phone: string
        email: string
        address: string
        memberDescription: string
        status: string
    }
    interface getMemberByid {
      getMemberByid: member 
    }
    
    const { loading, data , error } = useQuery<getMemberByid>(
      GET_MEMBER_ID,
      { variables: { getMemberByidId:id.id } }
    );

    
    const [editMember, {  error:error1 , data:out , loading:loading1 }] = useEditMember();
    const genders: gender[] = [
        { label: 'male', name: 'Male' },
        { label: 'female', name: 'Female' },
       
      ]

   
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 

 
       
editMember({ variables: data });
  

    }

       
const errorMessage = (error1:any) => {
    return (error1.graphQLErrors && error1.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  
  if(loading) {
  return (
    <div>
      dsds
    </div>
  )
  }
 
  
    return (
        <Form>
          
             <div  className="flex" >
              
             { out && out.editMember && <Redirect to="/members" /> }

   
            <h1>Edit User  ({data?.getMemberByid.fullname})</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>Add User ({data?.getMemberByid.username})</h3>


<div className="status" >



<input  defaultValue={data?.getMemberByid.status}  {...register("status", { required: true })}   ></input>

<button onClick={() =>
          setValue("status", "enabled", {
            shouldValidate: true,
            shouldDirty: true
          })
}
        style={{backgroundColor:"#1cc88a"}}
        >Enabled</button>
        <button onClick={() =>
          setValue("status", "disabled", {
            shouldValidate: true,
            shouldDirty: true
          })
          
        } 
        style={{background:"red"}}
        > Disable </button>

</div>
 
</div>
                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
                 <div className="list" >
     <div className="group">      

     <label className="required-field" >User Name  </label>
     <input  type="hidden" defaultValue={data?.getMemberByid.id} {...register("id", { required: true })}   />
       <input  defaultValue={data?.getMemberByid.username} {...register("username", { required: true })} type="text"   />
       {errors.username && <span>This field is required</span>}
    </div>
    <div className="group">      
     <label className="required-field" >Full Name </label>
       <input defaultValue={data?.getMemberByid.fullname} {...register("fullname", { required: true })} type="text" />
       {errors.fullname && <span>This field is required</span>}
       
     </div>
 
     </div>
     
     <div className="list" >
  
     <div className="group">      
     <label className="required-field" >User Number </label>
       <input  defaultValue={data?.getMemberByid.phone}  {...register("phone", { required: true })} type="text" />
       {errors.phone && <span>This field is required</span>}
       
     </div>
     <div className="group">      
     <label className="required-field" >User Email
 </label>
       <input  defaultValue={data?.getMemberByid.email}  type="email" {...register("email", { required: true })}  />
   
       {errors.email && <span>This field is required</span>}

 </div>
     

   
     
     </div>
     <div className="list" >
     <div className="group"> 
 <label className="required-field" >Gender
 </label>     
     <select {...register("gender", { required: true })}>
        <option defaultValue={data?.getMemberByid.gender} >{data?.getMemberByid.gender}</option>
        <option defaultValue="male">male</option>
        <option defaultValue="other">other</option>
      </select>
   
      {errors.gender && <span>This field is required</span>}
     </div>
     <div className="group">  


      <label  >Address</label>    
       <input  defaultValue={data?.getMemberByid.address} {...register("address")} type="text" />
  
     
     </div>
     
 
 </div>
 <div className="list" >

<div  className="group-1" >
    <label   >Member Description</label>

    <textarea  defaultValue={data?.getMemberByid.memberDescription} {...register("memberDescription", { required: true })} />
    </div>
</div>

 <div className="button" >
 <button type="button" onClick={()=> router.push('/members')} id="goback" >Go back</button>
    
 {!loading1  &&
      <button   type="submit" > Edit Member </button>
     
      }
    

     {loading1  &&
        <button
        type="submit"
     >   Upadting...
      </button>
     
      }
     </div>
   </form>
 
                 </div>

</div>

        </div>

        {  error1 && <>
            
            {toast.error( errorMessage(error1))}
          
            </>} 
    
        </Form>
    )
}

export default AddMember
