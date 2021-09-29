import { useState, useEffect } from 'react';

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'

import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";
 const  Dashboard = () => {

    interface RocketInventoryVars {
        year: number;
      }
      
    const { data, loading, error } = useGetUser();
  const router = useRouter();
  

console.log(data)

        return (
            <>
   
          <Section>
                 <div className="flex" >
                     
                     <Header>
                 <div className='flex-1' >
   
   <div onClick={()=>router.push("/admin/members")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Total Member</h4>

   <span></span>
   </div>
   <div className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

<span>0</span>
       </div>
    <div  onClick={()=>router.push("/admin/chambers")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4>Total Chambers</h4>

<span>300</span>
       </div>

       <div className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Parking Subscriptions</h4>

<span>200</span>
       </div>

                     </div>
                     </Header>
          

          <h1>Welcome To dashbaord     {data && data.getMember.notifcations.length}</h1>
                     
                     </div> 
                 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
