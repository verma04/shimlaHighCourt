import React  , {useState} from 'react'
import { Section} from './Style'
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {


    GET_SERVICES
   
   
  } from '../../../apollo/queries'
  import { useRouter } from "next/router";

  import { DropDown } from '../../ComanStyle/Drop';
import { keyframes } from 'styled-components';
import { Table } from '../../ComanStyle/Table';
import DeletePop  from './DelService';

const Finnace = () => {
  const [ del , setdel] = useState<string>("")  
  const [ state  , setState ] = useState('')
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
  
  const todelete = async (data:any) => {
   await setdel(data) 
   await setState('')
  }


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
    <th><span style={{background:"green"}}  >enabled</span></th>
    <th>{data.uniq}</th>
    <th>{data.servicesName}</th>
    <th>{data.servicesPrice}</th>
    <th>{data.servicesInterval}</th>
    <th className="rel"  >
    {state === '' ? 
  ( 
     <button    onClick={()=> setState(data.id)} id="btnGroupDrop" type="button" className="btn btn-light btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h text-gray-500"></i></button>
  )
  :
  (
    <button    onClick={()=> setState('')} id="btnGroupDrop" type="button" className="btn btn-light btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h text-gray-500"></i></button>
  )
   
    }
   
    {state === data.id ? 
   (
    <DropDown>
    <div className="dropdown-menu show" aria-labelledby="btnGroupDrop" >
      <a className="dropdown-item" onClick={()=> router.push(`/members/editmember/${data.slug}`)}  >
     
        <i className="fa fa-edit text-gray-500 mr-2"></i> Edit</a>
        <a className="dropdown-item" onClick={()=> router.push(`/members/assign-services/${data.id}`)}  ><i className="fa fa-sign-in-alt text-gray-500 mr-2"></i> Assign Services</a>
        <a  onClick={()=> todelete(data.id)} className="dropdown-item" href="javascript:void(0)" ><i className="fa fa-trash text-gray-500 mr-2"></i> Delete</a>
</div>
        </DropDown>
   )
   :
   (
null
   )

   }

{del === data.id ?
(
<DeletePop  myfunc={setdel} id={data.id}  />
)
:
(
  null
)

    }
   
    

    
   
    </th>
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
