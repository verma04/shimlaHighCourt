import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useUserPayments  } from '../../apollo/actions'
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
  

  const { data:data12 , error:error12 , loading } =useUserPayments();
  

  console.log(data12)
 

	const [name, setName] = useState('Mehul')


  
  if(loading) {
    return (
      <div>

      </div>
    )
  }

  

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
    <th>Pay</th>

  </tr>
  {data12 && data12.getUserPayments.map((number:any) =>  
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
<Payment id={number.id}  data = {number.list.map((item:any) => parseInt(item.price)).reduce((prev:any, curr:any) => prev + curr, 0) } />
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
