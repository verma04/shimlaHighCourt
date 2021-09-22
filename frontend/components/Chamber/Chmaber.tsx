import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_CHAMBERS
 
 
} from '../../apollo/queries'

 const  Dashboard = () => {

  interface getChamber {
    member: String
    id: String
    chamberId : String
  }
  
  interface RocketInventoryData {
    getChamber: getChamber[];
  }
  
 

  const { loading, data } = useQuery<RocketInventoryData>(
    GET_CHAMBERS,
    { variables: { year: 2019 } }
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
                     
                 <div className='flex-1' >
   
   <div className="flex-item" >

   </div>
   <div className="flex-item" >
       
       </div>
    <div className="flex-item" >
       
       </div>

       <div className="flex-item" >
       
       </div>

                     </div>

                     <div className='flex-2' >


   { data && data.getChamber.map((data:any ) =>
   <div  className="chamber" key={data._id} >

{data.member}
<br/>
<br/>
{data.chamberId}
     </div>
   
   )

   }


                     </div>

            
                     
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
