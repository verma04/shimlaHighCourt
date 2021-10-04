import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetUserActivities } from '../../apollo/actions'

import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'

import moment from 'moment'
import { useRouter } from "next/router";
import { Table  } from '../ComanStyle/Table' 






  



const  Ticket = () => {
  const {data, loading, error} = useGetUserActivities();
  console.log(data , error)
  const router = useRouter();

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
    <th>Event Level</th>
    <th>Time</th>
    <th>Event</th>
    <th>Detail</th>
    

  </tr>
  {data && data.getUserActivities.map((number:any)=>
  <tr key={number.id} >
<th>


  <span className="open" >
 
  information
  </span>


</th>

<th> {moment(number.createdAt).fromNow() } </th>


<th   >{number.topic}</th>
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

export default Ticket;
