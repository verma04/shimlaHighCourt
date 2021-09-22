import { useState, useEffect } from 'react';
import Garph from './Garph'
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'

 const  Dashboard = () => {

 const { data , error , loading }  = useGetMembers()
  

  if (loading) {
      return (
      
            <ContentLoader viewBox="0 0 380 70">
              {/* Only SVG shapes */}    
              <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
              <rect x="100" y="17" rx="4" ry="4" width="70" height="70" />
              <rect x="200" y="40" rx="3" ry="3" width="70" height="70" />
            </ContentLoader>
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
                     <div className='garph' >
   
   <Garph/>

   </div>
   <div className='payments' >
   

   </div>

                     </div>

            
                     
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
