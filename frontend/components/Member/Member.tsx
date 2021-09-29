import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'
import { Table  } from '../ComanStyle/Table' 
import Member from './AddMember/AddMember'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { Header } from '../ComanStyle/Header'
import AddMember from './AddMember/AddMember';

 const  Dashboard = () => {

  useEffect(() => {
   
      AOS.init({
        duration : 2000
      })
    
  }, [])

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
  

const [ state  , setState ] = useState(false)

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

       <i onClick={()=>setState(!state)} className="fas fa-plus-circle"></i>

   

                     </div>
                     </Header>
                     <Table>
                  





<div className='flex-2' >
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Payment Subcription Item</h3>





</div>

<div className="graphl-bottom" >

<table id="customers">
  <tr id="top" >
    <th>Status</th>
    <th>Member Since</th>
    <th>UserName</th>
    <th>Email Address</th>
    <th>Full Name</th>    
    <th>Actions</th>
  </tr>
 {data && data.getMembers.map((data:any ) =>
    
          <tr key={data.id} >
    <th><span>enabled</span></th>
    <th>{data.createdAt}</th>
    <th>{data.username}</th>
    <th>{data.email}</th>
    <th>{data.username}</th>
    <th>...</th>
    </tr>

     
 )

 }
</table>
</div>



</div>
      </div>
       
       

                    

            
                     </Table>
                     </div> 
                     
{state ? 
(
<AddMember myfunc={setState} />
)
:
(
null
)

}
                     
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
