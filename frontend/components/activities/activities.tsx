import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_ACT
 
 
} from '../../apollo/queries'
import moment from 'moment'
import { Header } from '../ComanStyle/Header';


 const  Dashboard = () => {

  interface getActivity {
    message: String
    id: Number,
    createdAt : Number
  }
  
  interface getActivities {
    getActivity: getActivity[];
  }
  
 

  const { loading, data } = useQuery<getActivities>(
    GET_ACT,

  );
  



 if(loading) {
   return (
     <div>

sdsdsd
       </div>

   )
 }

        return (
            <>
   
          <Section>
                 <div className="flex" >
                     
                 {/* <table>
<h1>Activities</h1>
         
         </table> */}


<h1>A Fancy Table</h1>

<table id="customers">
  <tr>
    <th>Evnet Level</th>
    <th>Time </th>
    <th>Evnet</th>
    <th>User</th>
  </tr>

  {data &&  data.getActivity.map((number, key) => 
  
<tr key={key} >
   <th id="img" > <img src="https://res.cloudinary.com/airjaldi/image/upload/v1623255714/icons8-hashtag-activity-feed-80_jcspc2.png" ></img></th>
     <th>  {number.message}</th>
     {/* <th>   </th> */}
  </tr>
  
  )

  } 
</table>

                     
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
