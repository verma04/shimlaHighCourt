import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useUserticket } from '../../apollo/actions'

import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'

import moment from 'moment'
import { useRouter } from "next/router";
import { Table  } from '../ComanStyle/Table' 






  



const  Ticket = () => {
  const {data, loading, error} = useUserticket();
  console.log(data , error)
  const router = useRouter();

        return (
            <>
   
              
                     

      
                     <Table>
                  


<div className="head">
<h1>My Ticket</h1>

<button onClick={()=> router.push("/ticket/new-ticket")} >New Ticket</button>
</div>

                    

<div className='flex-2' >

 
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>My Ticket</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >
    <th>Status</th>
    <th>Created Time</th>
    <th>Updated Time</th>
    <th>Subject</th>
    <th>View</th>    

  </tr>

  {data && data.getUserticket.map((number:any)=>
  <tr key={number.id} >
<th>
{number.status === "open" ?
(

  <span className={number.status} >
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-opened">
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
  </svg>
  {number.status}
  </span>
):

(
  <span  style={{background:"red"}} className={number.status} >

    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-closed">
    <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path><path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
</svg>
{number.status}
</span>
)

}

</th>

<th> {moment(number.createdAt).format('LLLL') } </th>
{number.editedAt === null ?
(
<th>   </th>
)
:
(
<th> {moment(number.editedAt).format('LLLL') }  </th>
)

}

<th  style={{width:"40%"}} >{number.ticketTitle}</th>
<th><i onClick={()=> router.push(`/ticket/view/${number.id}`)}  className="far fa-eye"></i></th>
  </tr>
  
  )

  }

{/* 
{data && data.getUserticket.length ===0 &&

<div  className="not-found">

<h2>Not data Found</h2>
</div>

  } */}

</table>
</div>



</div>
      </div>
       
       

                    

            
                     </Table>
                  
            
            </>
        )
    
}

export default Ticket;
