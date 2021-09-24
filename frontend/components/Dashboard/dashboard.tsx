

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';

import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_CHAMBERS,
  GET_MEMBERS,
  GET_PARKING,
  GET_DUEPAYMENTS
 
 
} from '../../apollo/queries'
import Payment from './Payments/payment';
import { useRouter } from "next/router";
 const  Dashboard = () => {

  const router = useRouter();


  interface getChamber {
    member: String
    id: String
    chamberId : String
  }
  
  interface getChambers {
    getChamber: getChamber[];
  }
  
  

 interface getChamber {
  member: String
  id: String
  chamberId : String
}

interface members {
   
  id: String

}
interface dashboard {

  getMembers: members[];
}

interface parking {
   
  id: String

}
interface getparking {

  getParking: parking[];
}

interface getduepayment {
  id :String
  createdAt:String
  chamberId:String
  status:String
  payment:String
  month:String
}
interface getduepayments {

  duePayment: getduepayment[];
}


const { loading:loading3, data:data3 } = useQuery<getChambers>(
  GET_CHAMBERS,
  { variables: { year: 2019 } }
);


const { loading, data } = useQuery<dashboard>(

  GET_MEMBERS,

);


const { loading:loading1, data:data1 } = useQuery<getparking>(

  GET_PARKING,

);

const { loading:loading2, data:data2 } = useQuery<getduepayments>(

  GET_DUEPAYMENTS,

);


  if (loading || loading1 || loading2 || loading3) {
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

   <span>{ data &&  data.getMembers.length}</span>
   </div>
   <div className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

   <span> { data2 &&  data2.duePayment.length}</span>
       </div>
    <div  onClick={()=>router.push("/admin/chambers")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4>Total Chambers</h4>

    <span> { data3 &&  data3.getChamber.length}</span>
       </div>

       <div className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Parking Subscriptions</h4>

<span> { data1 &&  data1.getParking.length}</span>
       </div>

                     </div>
                     </Header>
              
                     <Payment/>
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
