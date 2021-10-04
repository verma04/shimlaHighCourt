import { useState, useEffect } from 'react';


import moment from 'moment'
import { useNotifications } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'

import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";
import { Table } from '../ComanStyle/Table';
 const  Dashboard = () => {

  
      

  
  const { data,  error } = useNotifications();

console.log(data)
        return (
            <>
   
         <Table>

         <div className="head">
<h1>My Activity Log</h1>


</div>

                    

<div className='flex-2' >

 
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>My Activity Log</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >
    <th>Status</th>
    <th>Time</th>
    <th>Subject</th>
  
    

  </tr>
  {data && data.notifications.map((number:any)=>
  <tr key={number.id} >
<th>


  <span style={{background:"red"}}  className="open" >
 {number.type}
  
  </span>


</th>

<th> {moment(number.createdAt).fromNow() } </th>

<th style={{width:"40%"}}>{number.message}</th>
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
