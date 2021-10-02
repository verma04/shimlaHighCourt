import React , {useState} from 'react'
import { Section } from './Style'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation , useQuery, } from '@apollo/client';

import Selectbox from './Selectbox'
import {


  GET_SERVICES,
  GET_MEMBER_ID,
  USER_SERVICES
 
 
} from '../../../apollo/queries'
  import { Form} from '../../ComanStyle/Form'
import DeletePop from './DeletePop';

import { useRouter } from "next/router";
import Redirect from '../../shared/Redirect';
import { Table } from './Table';


  interface id {
    id:string
    }
  
const Assign:React.FC<id>  = (id) => {
  

  const [ del , setdel] = useState<string>("")  
  const router = useRouter();
  interface getServices {
    id : string
    createdAt: string
    servicesName: string
    servicesItems: string
    servicesPrice: string
    servicesInterval: string
    servicesDescription: string
    uniq: String
  }

  interface RocketInventoryData {
    getServices: getServices[];
  }
  
const { loading, data , error } = useQuery<RocketInventoryData>(
GET_SERVICES,

);

interface servicesList {
  id: string
  createdAt: string
  servicesName: string
  servicesPrice: string
  uniq: string
}

interface userServices {
  userServices: servicesList[];
}

const { loading:loading1, data:data1 , error:error1 } = useQuery<userServices>(
  USER_SERVICES,

{ variables: { id: id.id } }

);







if(loading || loading1) {
  return (
    <p>sddssd</p>
  )
}



    return (
        <Form>
            <div  className="flex" >
          

   
            <h1>Assign Services</h1>

<div  className='flex-2'>




  
        <div className='garph' >


        <div  style={{height:"10rem"}} className="graphl-top" > 


<h3> <i  style={{marginRight:"2rem"}} onClick={()=> router.push('/members')} className="fas fa-arrow-left"></i>  Assign Services</h3>


</div>
                 

  
<Table>
<table id="customers">
<tr id="top" >
    <th>Uniq</th>
    <th>CreatedAt</th>
    <th>Services Name</th>
    <th>Services Price</th>
    <th>Action</th>
    </tr>
    {data1 && data1.userServices.map(number =>
    
    <tr key={number.id} >
       <td>{number.uniq}</td>
    <td>{number.createdAt}</td>
    <td>{number.servicesName}</td>
    <td>{number.servicesPrice}</td>
    <td><i onClick={()=>setdel(number.id) } className="fas fa-trash-alt"></i></td>

    {del === number.id ?
(
<DeletePop  myfunc={setdel} id={number.id} value={id.id} />
)
:
(
  null
)

    }
  </tr>
    )
    
    
    }
 
  
 
 


</table>
</Table>
<Selectbox  ser={data1 && data1.userServices} value={id}  data={data && data.getServices} /> 



     
 
 </div>


   
 
                 </div>

</div>


     
        </Form>
    )
}

export default Assign;
