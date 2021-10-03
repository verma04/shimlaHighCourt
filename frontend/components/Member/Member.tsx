import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useGetMembers } from '../../apollo/actions'
import  { Section  } from './Style';
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_MEMBERS
 
 
} from '../../apollo/queries'
import { DropDown } from '../ComanStyle/Drop';
import moment  from 'moment';
import { useRouter } from "next/router";
import { Table  } from '../ComanStyle/Table' 
import Member from './AddMember/AddMember'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { Header } from '../ComanStyle/Header'
import AddMember from './AddMember/AddMember';

 const  Dashboard = () => {
  const router = useRouter();
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
      createdAt: string
      avatar: String
      Chamber: String
      fullname: String
      slug:string
      status:string
  }
  
  interface RocketInventoryData {
    getMembers: members[];
  }
  
 

  const { loading, data } = useQuery<RocketInventoryData>(
    GET_MEMBERS,
    
  );
  

const [ state  , setState ] = useState('')

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

<span>{data &&  data.getMembers.filter((element1:any) => element1.status === "enabled" ).length}</span>
       </div>
    <div className="flex-item" >
    <i className="fas fa-user-friends"></i>

    <h4> Member Disable</h4>

<span>{data &&  data.getMembers.filter((element1:any) => element1.status === "disabled" ).length}</span>
       </div>

       <i onClick={()=>router.push('/members/addmembers')} className="fas fa-plus-circle"></i>

   

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
    <th   ><span id={data.status}  >{data.status}</span></th>
    <th>{  moment(data.createdAt).format('LLLL')}</th>

  
    <th   >{data.username}</th>
    <th>{data.email}</th>
    <th>{data.fullname}</th>
    <th className="rel"  >
    {state === '' ? 
  ( 
     <button    onClick={()=> setState(data.id)} id="btnGroupDrop" type="button" className="btn btn-light btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h text-gray-500"></i></button>
  )
  :
  (
    <button    onClick={()=> setState('')} id="btnGroupDrop" type="button" className="btn btn-light btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h text-gray-500"></i></button>
  )
   
    }
   
    {state === data.id ? 
   (
    <DropDown>
    <div className="dropdown-menu show" aria-labelledby="btnGroupDrop" >
      <a className="dropdown-item" onClick={()=> router.push(`/members/editmember/${data.slug}`)}  >
     
        <i className="fa fa-edit text-gray-500 mr-2"></i> Edit</a>
        <a className="dropdown-item" onClick={()=> router.push(`/members/assign-services/${data.id}`)}  ><i className="fa fa-sign-in-alt text-gray-500 mr-2"></i> Assign Services</a>
        <a className="dropdown-item" href="javascript:void(0)" ><i className="fa fa-trash text-gray-500 mr-2"></i> Delete</a>
</div>
        </DropDown>
   )
   :
   (
null
   )

   }
   
    

    </th>
   
   
    </tr>

     
 )

 }
</table>
</div>



</div>
      </div>
       
       

                    

            
                     </Table>
                     </div> 

                     
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
