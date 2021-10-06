import { useState, useEffect } from 'react';


import moment from 'moment'
import { useAllServicepayment } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'

import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";
import { Table } from '../ComanStyle/Table';
import Invoice from './invoice'
import { Pop } from '../ComanStyle/Pop';

 const  Dashboard = () => {

  
  const [ get , getstate] = useState('')
      
  const { data:{getMember}  } = useGetUser();
  
  const { data,  error } = useAllServicepayment();


        return (
            <>
   
         <Table>

         <div className="head">
<h1>My Payments Log</h1>


</div>

                    

<div className='flex-2' >

 
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>My Payments Log</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
<tbody>
  <tr id="top" >
    <th>Status</th>
    <th>Type</th>
    <th>Payment Gateway</th>
    <th>For Month</th>
    <th>Item</th>
    <th>Amount</th>
    <th>Actions</th>
    

  </tr>
  {data && data.userAllPayments.map((number:any)=>
  <tr key={number.id} >
<th>


  <span style={{background:"green"}}  className="open" >
 suceess
  
  </span>


</th>

<th>
Month Subscription
</th>

<th> Razorpay  </th>

<th> {moment(number.createdAt).fromNow() } </th>

<th>{number.paymentBilling.map((number:any) =>
<li key={number.id}>
{number.serviceName}
</li>

)


 }</th>

<th >{number.paymentBilling.map((item:any) =>  parseInt(item.price)).reduce((prev:any, curr:any) => prev + curr, 0)}</th>




  
      
     <Invoice  info={number} member={getMember}  />
     
 
  </tr>


  
  )

  }
 
 </tbody>
</table>
</div>



</div>
      </div>
       
       

    

         </Table>
            
            </>
        )
    
}

export default Dashboard;
