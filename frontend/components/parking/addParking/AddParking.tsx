import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useQuery,  useMutation } from '@apollo/client';
import {


  useCreateParking
   
   
  } from '../../../apollo/actions'
  
  import {


 
    GET_MEMBERS,
   
   
  } from '../../../apollo/queries'

import Select from 'react-select'

interface props {
    myfunc(arg: boolean): void;
}
type Inputs = {
  createParkingMemberId: string,
  createParkingParkingCharge:string,
  
   
  };
  interface gender {
    label: string;
    name:string
  }
  
const AddMember:React.FC<props>  = ({myfunc}) => {
    const [createParking, { data, loading, error }] = useCreateParking();
    const [ gender , setgender] = useState('')

    const genders: gender[] = [
        { label: 'male', name: 'Male' },
        { label: 'female', name: 'Female' },
       
      ]

   
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
        

      createParking({ variables: data });

    }



  interface members {
   
    
    member : String
    id: String
  
  }
  
  interface RocketInventoryData {
    getMembers: members[];
  }
  
 

  const { loading:loading1, data:data1 } = useQuery<RocketInventoryData>(
    GET_MEMBERS,
    
  );
  

       
const errorMessage = (error:any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }
  
  
    return (
        <Section>
            <div id="myModal" className="modal">
            { data && data.createParking &&
            
            myfunc(false)
             &&

             toast.success("Parking Subscription Added")
            
            
            }

<div data-aos="fade-down" className="modal-content">
  <span  onClick={()=> myfunc(false)} className="close">&times;</span>



  
        <div className="form" >
                 
                 <form onSubmit={handleSubmit(onSubmit)}>
  
       
     <div className="group">      
       <input {...register("createParkingParkingCharge")} type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Parking Charge </label>
     </div>
   
     <div className="group">      
     <select {...register("createParkingMemberId")}>
      
     { data1 && data1.getMembers.map((data:any ) =>

<option key={data.id}  value={data.id}>{data.username}</option>

          )
          
        }
      </select>
       <span className="highlight"></span>
       <span className="bar"></span>
      
     </div>
   
   
     <button> Add Parking </button>
     
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
