import { useState, useEffect } from 'react';


import moment from 'moment'
import { useAllServicepayment } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'

import { useGetUser , useUserServices } from '../../apollo/actions';
import { useRouter } from "next/router";
import { Table } from '../ComanStyle/Table';

import { Pop } from '../ComanStyle/Pop';

 const  Dashboard = () => {

  
  const [ get , getstate] = useState('')
      
  const { data:{getMember}  } = useGetUser();
  
  const { data,  error } = useAllServicepayment();

  const { data:data1 , error:error1 } =useUserServices();

  console.log(data1)


        return (
            <>
   
         <Table>

         <div className="head">
<h1>My Assigned Services</h1>


</div>

                    

<div className='flex-2' >

 
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>My Assigned Services</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >

    <th>Unique Id</th>
    <th>Item Name</th>
    <th>Item Price</th>
    <th> CreatedAt</th>

    

  </tr>
  {data1 && data1.getUserServices.map((data:any ) =>
    
    <tr key={data.id} >

<th>{data.uniq}</th>
<th>{data.servicesName}</th>
<th>{    data.servicesPrice}</th>

<th>{moment(data.createdAt).fromNow()}</th>


</tr>


)

}
 

</table>
</div>



</div>
      </div>
       
       

    

         </Table>
            
            </>
        )
    
}

export default Dashboard;
