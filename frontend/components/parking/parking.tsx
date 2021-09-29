import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_PARKING,
  GET_MEMBERS,
 
 
} from '../../apollo/queries'

import AddParking from './addParking/AddParking'
import { Header } from '../ComanStyle/Header';

 const  Dashboard:React.FC = () => {


  const [ state  , setState ] = useState(false)
  interface parking {
   
   
  id: string
  
  }
  interface getparking {
  
    getParking: parking[];
  }
  
 

  const { loading, data } = useQuery<getparking>(
    GET_PARKING
   
  );

  interface members {
   
    
    member : String
    id: String
  
  }
  
  interface RocketInventoryData {
    getMembers: members[];
  }
  
 

  const { loading:loading1, data:data1 } = useQuery<RocketInventoryData>(
    GET_MEMBERS,
    
  );
  



 if(loading ||loading1) {
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
                     
                     <Header>
                 <div className='flex-1' >
   
   <div className="flex-item" >

   </div>
   <div className="flex-item" >
       
       </div>
    <div className="flex-item" >
       
       </div>

       <i onClick={()=>setState(!state)} className="fas fa-plus-circle"></i>

                     </div>
                     </Header>
                     <div className='flex-2' >


   { data && data.getParking.map((data:any ) =>
   <div  className="chamber" key={data._id} >

<i className="fas fa-boxes"></i>
{data.id}


     </div>
   
   )

   }


                     </div>

            
                     
                     </div> 
                     </Section>
                     {state ? 
(
<AddParking myfunc={setState}   />
)
:
(
null
)

}
            </>
        )
    
}

export default Dashboard;
