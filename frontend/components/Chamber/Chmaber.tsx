import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import EditChamber from './editChamber/EitChamber'
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_CHAMBERS
 
 
} from '../../apollo/queries'
import AddChamber from './addChamber/Addhamber'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '../ComanStyle/Header';
 const  Dashboard:React.FC = () => {

  useEffect(() => {
   
    AOS.init({
      duration : 2000
    })
  
}, [])
  const [ state  , setState ] = useState(false)
  const [ edit  , setEdit ] = useState(false)
  interface getChamber {
    username: String
    id: String
    email: String
    chamberId : String
    avatar: String
  }
  
  interface RocketInventoryData {
    getChamber: getChamber[];
  }
  
 

  const { loading, data } = useQuery<RocketInventoryData>(
    GET_CHAMBERS,
  
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


   { data && data.getChamber.map((data:any ) =>
   <div  className="chamber" key={data._id} >

<i className="fas fa-boxes"></i>
{data.username}
{data.email}
<br/>
<br/>
{data.chamberId}
<i onClick={()=>setEdit(data.id)}  className="fas fa-folder-plus"></i>
{edit === data.id ? 
(
<EditChamber myfunc={setEdit} chamber={data.chamberId} username={data.username} id={data.id} />
)
:
(
null
)

}
   
   
     </div>
   
   )

   }


                     </div>

            
                     
                     </div> 


      
                     </Section>
            
                     {state ? 
(
<AddChamber myfunc={setState} />
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
