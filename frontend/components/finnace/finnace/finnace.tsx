import React from 'react'
import { Section} from './Style'
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {


    GET_SERVICES
   
   
  } from '../../../apollo/queries'
  import { useRouter } from "next/router";
import { keyframes } from 'styled-components';
import { Table } from '../../ComanStyle/Table';


const Finnace = () => {
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
  
  console.log(data , error)

    return (
        <Section>
        <div className="flex" >
            <div className="top" >
        <h1>Payment Subcription Item</h1>
        <button onClick={()=> router.push("/finnace/addsubscription")} >
     Add payment item
 </button>
        </div>
<Table>
        <div className='flex-2' >
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Payment Subcription Item</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >
    <th>Status</th>
    <th>Unique Id</th>
    <th>Item Name</th>
    <th>Item Price</th>
    <th>Recurring Payment</th>
    <th>Actions</th>
  </tr>
 {data && data.getServices.map((data:any ) =>
    
          <tr key={data.id} >
    <th><span>enabled</span></th>
    <th>{data.uniq}</th>
    <th>{data.servicesName}</th>
    <th>{data.servicesPrice}</th>
    <th>{data.servicesInterval}</th>
    <th>...</th>
    </tr>

     
 )

 }
</table>
</div>



</div>
      </div>
      </Table>   
       
             </div>
        </Section>
    )
}

export default Finnace
