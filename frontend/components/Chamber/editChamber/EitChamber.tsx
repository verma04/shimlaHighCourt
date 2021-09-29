import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation , useQuery } from '@apollo/client';
import {

  useAssignParking
   
   
  } from '../../../apollo/actions'

  import {


 
    GET_MEMBERS,
   
   
  } from '../../../apollo/queries'

import Select from 'react-select'

interface props {
    myfunc(arg: boolean): void;
    id: string ,
    username:string,
    chamber:string
}
type Inputs = {
  addChamberToMemberId: string,
  addChamberToMemberMemberId:string,

  };
  interface gender {
    label: string;
    name:string
  }
  
const AddMember:React.FC<props>  = ({myfunc , id, username, chamber}) => {
    const [assignParking, { data, loading, error }] = useAssignParking();
    const [ gender , setgender] = useState('')

    const genders: gender[] = [
        { label: 'male', name: 'Male' },
        { label: 'female', name: 'Female' },
       
      ]

   
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
        
      console.log(data)

      assignParking({ variables: data });

    }

       
const errorMessage = (error:any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }
  

  console.log(error)

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
  
    return (
        <Section>
            <div id="myModal" className="modal">
            { data && data.addChamberToMember && window.location.reload() }

<div data-aos="fade-down" className="modal-content">
  <span  onClick={()=> myfunc(false)} className="close">&times;</span>



  
        <div className="form" >
                 
                 <form onSubmit={handleSubmit(onSubmit)}>
     
                 <div className="group">   

                 <input  type='hidden' readOnly defaultValue={id} {...register("addChamberToMemberId")} />
   
                 <input  readOnly defaultValue={chamber} />
   {username}
     <select {...register("addChamberToMemberMemberId")}>
      
     { data1 && data1.getMembers.map((data:any ) =>

<option key={data.id}  value={data.id}>{data.username}({data.id})</option>

          )
          
        }
      </select>
       <span className="highlight"></span>
       <span className="bar"></span>
      
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
