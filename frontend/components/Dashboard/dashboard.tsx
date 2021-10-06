

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';

import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import {


  GET_SERVICES,
  GET_DUEPAYMENTS,
  GET_MEMBERS,
  
 
 
} from '../../apollo/queries'
import { useUserticket } from '../../apollo/actions'
import Payment from './Payments/payment';
import { useRouter } from "next/router";
 const  Dashboard = () => {

  const router = useRouter();



  
  const {data:data3} = useUserticket();




interface getduepayment {
  id :String
 
}
interface getduepayments {

  duePayment: getduepayment[];
}

interface getServices {
  id : string
  createdAt: string
  servicesName: string
  servicesItems: string
  servicesPrice: string
  servicesInterval: string
  servicesDescription: string
  uniq: String
}

interface RocketInventoryData {
  getServices: getServices[];
}


const { loading, data , error } = useQuery<RocketInventoryData>(
  GET_SERVICES,

);

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



const { data:data1 } = useQuery<RocketInventoryData>(
  GET_MEMBERS,
  
);



const { loading:loading2, data:data2 } = useQuery<getduepayments>(

  GET_DUEPAYMENTS,

);


  if (loading || loading2 ) {
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
   
   <div onClick={()=>router.push("/members")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Total Member</h4>

   <span>{data1 &&  data1.getMembers.length}</span>
   </div>
   <div  onClick={()=>router.push("/due-payments")}  className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

   <span> { data2 &&  data2.duePayment.length}</span>
       </div>
    <div  onClick={()=>router.push("/finnace")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4>Total Services</h4>

    <span>{data && data.getServices.length} </span>
       </div>

       <div  onClick={()=>router.push("/ticket")}  className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Tickets</h4>

<span>    {data3 && data3.getticket.filter((number:any)=>  number.editedAt === null  ).length} </span>
       </div>

                     </div>
                     </Header>
              
                     <Payment />
                     </div> 
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
