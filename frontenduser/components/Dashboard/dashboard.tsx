import { useState, useEffect } from 'react';

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useNotifications  , useUserServices  ,useUserPayments } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'

import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";
 const  Dashboard = () => {

  const router = useRouter();
  
  const { data, loading, error } = useNotifications();

  const { data:data1 , error:error1 } =useUserServices();

  const { data:data12 , error:error12 } =useUserPayments();
  console.log(data12)
        return (
            <>
   
          <Section>
                 <div className="flex" >
                     
                     <Header>
                 <div className='flex-1' >
   
   <div onClick={()=>router.push("/admin/members")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Notifications </h4>
   {data && data.notifcations === null ? (

 <span> {data && data.notifcations.length}</span>
   ):
   (
    <span>0</span>
   )
 }
  
   </div>
   <div className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

<span>{data12 && data12.getUserPayments.filter((element:any) => element.status === "Due" ).length}</span>
       </div>
    <div  onClick={()=>router.push("/admin/chambers")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4> Chambers</h4>

<span>300</span>
       </div>

       <div className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Parking Subscriptions</h4>

<span>200</span>
       </div>

                     </div>
                     </Header>
          

          <h1>Welcome To dashbaord</h1>
                     
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
