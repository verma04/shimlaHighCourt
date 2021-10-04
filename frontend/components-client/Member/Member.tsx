import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'
import Image from 'next/image'
import { Header } from '../ComanStyle/Header'

 const  Dashboard = () => {

  interface members {
   
    chamberId : String
    member : String
    id: String
     gender: String
      username: String
      createdAt: String
      avatar: String
      Chamber: String
  }
  
  interface RocketInventoryData {
    getMembers: members[];
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
                     

                     <Header>
                 <div className='flex-1' >
   
   <div className="flex-item" >
   <i className="fas fa-user-friends"></i>
   <h4>Total Member</h4>

<span>{ data &&  data.getMembers.length}</span>
   </div>
   <div className="flex-item" >
   <i className="fas fa-user-friends"></i>

   <h4>Active Member</h4>

<span>{ data &&  data.getMembers.length}</span>
       </div>
    <div className="flex-item" >
    <i className="fas fa-user-friends"></i>

    <h4> Member Disable</h4>

<span>0</span>
       </div>

    

                     </div>
                     </Header>
                     <div className='flex-2' >


   { data && data.getMembers.map((data:any ) =>
   <div  className="chamber" key={data._id} >


<div   className="img-wrapper" >
                  <Image
          layout="fill"
          objectFit="contain"
      src="https://avatars.dicebear.com/api/identicon/seasasassae.svg"
      alt="Picture of the author"
     
    />
                  </div>


{data.username}


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
