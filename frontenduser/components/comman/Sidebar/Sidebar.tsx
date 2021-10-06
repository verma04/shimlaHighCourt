import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Side  } from './Style'
import { useRouter } from "next/router";


import Image from 'next/image'
import { useNotifications } from '../../../apollo/actions';


 const Sidebar =() => {
   const router = useRouter();
   const [user, setUser] = useState(null);

   const { data, loading, error } = useNotifications();

  

        return (
            <Side>
                  
                  <div className="img-wrapper" >
                  <Image
          layout="fill"
          objectFit="contain"
      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1632304120/xyrhepqhn7gstz1cjzsd.ico"
      alt="Picture of the author"
     
    />
                  </div>
                  <Link
           href="/"
           passHref
          
    >
 <i  id={router.pathname === '/' ? "active" : ""} className="fas fa-fw fa-tachometer-alt"> <h3>  Dashboard</h3> </i>  
    </Link>
   
 
    <Link
  
   
  href="/assigned-services"
  passHref
>
<i id={router.pathname == "/assigned-services" ? "active" : ""} className="fas fa-laptop-house"> <h3>Assigned Services</h3> </i>  
 </Link>
 <Link
  
   
  href="/due-payments"
  passHref
>
<i id={router.pathname == "/due-payments" ? "active" : ""} className="fas fa-money-bill-wave"> <h3>Due Payments</h3> </i>  
 </Link>
    <Link
  
   
       href="/myprofile"
       passHref
    >
    <i id={router.pathname == "/myprofile" ? "active" : ""} className="fas fa-user-circle"> <h3>My Profile</h3> </i>
    </Link>
    <Link
  
   
       href="/ticket"
       passHref
    >
 <i id={router.pathname == "/ticket" ? "active" : ""} className="fas fa-info-circle">  <h3>Ticket/Queries </h3>  </i> 
      </Link>
  
      <Link
  
   
       href="/change-password"
       passHref
    >
   <i id={router.pathname == "/change-password" ? "active" : ""} className="fas fa-money-check-alt"> <h3>Change Password</h3></i>  
    </Link>
  
    <Link
  
   
       href="/notifications"
       passHref
    >
    <i id={router.pathname == "/notifications" ? "active" : ""} className="fas fa-bell"> <h3>My Notification 
       
   

<span> </span>
 </h3>  </i>  
    </Link>

    <Link
  
   
  href="/payment-history"
  passHref
>
<i id={router.pathname == "/payment-history" ? "active" : ""} className="fas fa-money-check"> <h3>Payment
   History


<span> </span>
</h3>  </i>  
</Link>

    <Link
  
   
       href="/activities"
       passHref
    >
 <i id={router.pathname == "/activities" ? "active" : ""} className="fas fa-cog"> <h3>My Activity Log</h3> </i>  
      </Link>



  
      <Link
  
   
  href="/logout"
  passHref
>
   
   <i className="fa fa-sign-out-alt"> <h3>Logout</h3></i>  
    
    
    </Link>
   
            </Side>
        )
    
}


export default Sidebar;