import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {


  GET_SERVICES,
  GET_DUEPAYMENTS,
  GET_MEMBERS,
  
 
 
} from '../../apollo/queries'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import { Pop } from '../ComanStyle/Pop';
import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";


import Payment from './payment'
import { Table } from '../ComanStyle/Table';



 const  Dashboard = () => {

  const router = useRouter();

  const [ set , setState] = useState(false)
  
  interface getduepayment {
    id :String
   
  }
  interface getduepayments {
  
    duePayment: getduepayment[];
  }
  
  
const { loading:loading2, data:data2 } = useQuery<getduepayments>(

  GET_DUEPAYMENTS,

);

        return (
            <>
   
          <Table>

          <div className="head">
<h1>Due Payments</h1>


</div>


<div className='flex-2' >

 
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Due Payments</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >
    <th>Event Level</th>
    <th>Time</th>
    <th>Event</th>
    <th>Detail</th>
    <th>Alert</th>

  </tr>
  {data2 &&  data2.duePayment.map((number:any) =>  
  <tr key={number.id} >
<th>


  <span style={{background:"red"}}  >
 
  Due
  </span>


</th>

<th> {moment(number.createdAt).fromNow() } </th>


<th   >Month Payments </th>
<th style={{width:"40%"}}>

{number.list.map( (data1:any , key:any) =>
 <ul  key={key}>

<li> {key+1}.   Service: {data1.serviceName}   Price: {data1.price}</li>





   </ul>
 
 )

 }


</th>
<th>
Send Alert
</th>
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
