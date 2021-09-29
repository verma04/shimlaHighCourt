import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import {

  useAddChamber
   
   
  } from '../../../apollo/actions'

import Select from 'react-select'

interface props {
    myfunc(arg: boolean): void;
}
type Inputs = {
  addChambersId: string,
  addChambersPrice:string,

  };
  interface gender {
    label: string;
    name:string
  }
  
const AddMember:React.FC<props>  = ({myfunc}) => {
    const [addChamber, { data, loading, error }] = useAddChamber();
    const [ gender , setgender] = useState('')

    const genders: gender[] = [
        { label: 'male', name: 'Male' },
        { label: 'female', name: 'Female' },
       
      ]

   
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
     addChamber({ variables: data });

    }

       
const errorMessage = (error:any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }
  

  console.log(error)
  
    return (
        <Section>
            <div id="myModal" className="modal">
            { data && data.addChambers && myfunc(false) }

<div data-aos="fade-down" className="modal-content">
  <span  onClick={()=> myfunc(false)} className="close">&times;</span>



  
        <div className="form" >
                 
                 <form onSubmit={handleSubmit(onSubmit)}>
     
     <div className="group">      
       <input {...register("addChambersId")} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>ChamberId</label>
     </div>

     <div className="group">      
       <input {...register("addChambersPrice")} type="number" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Chamber Price</label>
     </div>
 
     <button> Send </button>
     
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
