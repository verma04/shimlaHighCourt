import { useState, useEffect } from 'react';
import Garph from './Garph'
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_CHAMBERS,
  GET_MEMBERS,
  GET_PARKING
 
 
} from '../../apollo/queries'
import { useRouter } from "next/router";
 const  Dashboard = () => {

  const router = useRouter();
  

 interface getChamber {
  member: String
  id: String
  chamberId : String
}

interface members {
   
  id: String

}
interface dashboard {

  getMember: members[];
}

interface parking {
   
  id: String

}
interface getparking {

  getParking: parking[];
}




const { loading, data } = useQuery<dashboard>(

  GET_MEMBERS,

);


const { loading:loading1, data:data1 } = useQuery<getparking>(

  GET_PARKING,

);



  if (loading || loading1) {
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
                     
                     <Header>
                 <div className='flex-1' >
   
   <div onClick={()=>router.push("/admin/members")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Total Member</h4>

   <span>{ data &&  data.getMember.length}</span>
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

<span> { data1 &&  data1.getParking.length}</span>
       </div>

                     </div>
                     </Header>
                     <div className='flex-2' >
                     <div className='garph' >

                       <div  className="graphl-top" > 


<h3>Month Payments Collections Statistics</h3>

   
   </div>

   <div  className="graphl-bottom" > 

<Garph/>
</div>
   </div>
   <div className='payments' >
   <div  className="payments-top" > 
   <h3>Latest Payments</h3>
   
</div>

<div  className="payments-bottom" > 

   
</div>



   </div>

                     </div>

            
                     
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
