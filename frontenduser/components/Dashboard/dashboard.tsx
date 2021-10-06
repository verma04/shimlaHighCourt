import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useNotifications  , useUserServices  ,useUserPayments , useGetUserActivities } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import { Pop } from '../ComanStyle/Pop';
import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";


import Payment from './payment'



 const  Dashboard = () => {

  const router = useRouter();

  const [ set , setState] = useState(false)
  const {data:data2, loading:loading1  } = useGetUserActivities();
  const { data,  error } = useNotifications();

  const { data:data1 , error:error1 } =useUserServices();

  const { data:data12 , error:error12 , loading } =useUserPayments();
  

  console.log(data12)
 

	const [name, setName] = useState('Mehul')


  
  if(loading) {
    return (
      <div>

      </div>
    )
  }

  

        return (
            <>
   
          <Section>
                 <div className="flex" >
                     
                     <Header>
                 <div className='flex-1' >
   
   <div onClick={()=>router.push("/notifications")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Notifications </h4>


 <span> {data && data.notifications.length}</span>

  
   </div>
   <div onClick={()=>router.push("/due-payments")} className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

<span>{data12 && data12.getUserPayments.length}</span>
       </div>
    <div  onClick={()=>router.push("/assigned-services")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4>Assign Services</h4>

<span>{data1 && data1.getUserServices.length}</span>
       </div>

       {/* <div className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Parking Subscriptions</h4>

<span>200</span>
       </div> */}

                     </div>
                     </Header>
          
                     <div className='flex-2' >
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Month Payments Collections Statistics</h3>


</div>

<div  className="graphl-bottom" > 
{
  data12 && data12.getUserPayments.slice(0,2).map((number:any) => 

  <div  className="card" key={number.id}>

    <span style={{color:"red"}} > Payment  {number.status}</span>

    <span>{moment(number.month).format('LL')}</span>

{number.list.map( (data1:any) =>
 <ul  key={data1.id}>

<li>Service: {data1.serviceName}   Price: {data1.price}</li>




   </ul>
 
 )

 }

<Payment id={number.id}  data = {number.list.map((item:any) => parseInt(item.price)).reduce((prev:any, curr:any) => prev + curr, 0) } />


    </div>
  
  
  )
}

</div>
</div>
<div className='payments' >
<div  className="payments-top" > 
<h3>Latest Activities</h3>

</div>

<div  className="payments-bottom" > 
{data2 &&  data2.getUserActivities.map((data:any)  =>

<div  onClick={()=> router.push(`${data.topic}`)} className="pay"  key={data.id} >
<div className="pay-top" >
 
<div className="img-wrapper" >
                  <Image
          layout="fill"
          objectFit="contain"
      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1633329837/cbylw8q3itvb7fqh75ij.png"
      alt="Picture of the author"
     
    />
                  </div>

                  <span>{data.message}</span>

    </div>

    <div className="pay-bottom" >

        <span>{moment(data.createdAt).fromNow()}</span>
    </div>
</div>
)

}

</div>



</div>

        </div>

             
                    </div>


                    {/* {(data12 && data12.getUserPayments)[data12 && data12.getUserPayments.length - 1].status === "Due" && setState(true)  }
                    {set ? (
        
          <>
            <Pop>
            <div data-aos="fade-top" className="modal-content">
            <span  onClick={()=> setState(false)} className="close">&#10005;</span>
    <div className="container">
    
    Payment Pending
    
     
    </div>

  </div>
     
     
            </Pop>
          </>
         
      
      ) : (
 null
      )}
                   */}
                
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
