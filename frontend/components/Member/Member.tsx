import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'

 const  Dashboard = () => {

  interface members {
   
    id: String
  
  }
  
  interface RocketInventoryData {
    getMember: members[];
  }
  
 

  const { loading, data } = useQuery<RocketInventoryData>(
    GET_MEMBERS,
    
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


   { data && data.getMember.map((data:any ) =>
   <div  className="chamber" key={data._id} >

{data.id}


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
