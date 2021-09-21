import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Side  } from './Style'
import { useRouter } from "next/router";

import { useLazyGetUser } from '../../../apollo/actions';



 const Sidebar =() => {
   const router = useRouter();
   const [user, setUser] = useState(null);

   

  

        return (
            <Side>
                  
                  <Link
           href="/dashboard"
           passHref
    >
 <i className="fas fa-list"> <h3>  dashboard</h3> </i>  
    </Link>
    <Link
    href="/"
    passHref
    >
  <i className="far fa-list-alt">  <h3>Chamabers</h3> </i> 
      </Link>
    <Link
    
  
   
       href="/"
       passHref
    >
   <i className="fas fa-list"> <h3>Members</h3> </i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-city"><h3>Services</h3></i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
     <i className="fas fa-school"> <h3>Subscriptions</h3> </i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-bell"> <h3>Reports</h3> </i>
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
 <i className="fas fa-users">  <h3>Ticket/Queries </h3>  </i> 
      </Link>
      <Link
  
   
       href="/"
       passHref
    >
  <i className="far fa-list-alt">  <h3>Destinations</h3> </i> 
      </Link>
      <Link
  
   
       href="/"
       passHref
    >
   <i className="fas fa-money-check-alt"> <h3> Events</h3></i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-star"> <h3>Users </h3></i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-credit-card"> <h3>Add City</h3>  </i>  
    </Link>

    <Link
  
   
       href="/"
       passHref
    >
 <i className="fas fa-cog"> <h3>Payment</h3> </i>  
      </Link>
  
    <a
    href="/logout" ><i className="fas fa-cog"> <h3>Logout</h3></i>  
    
    </a>
   
            </Side>
        )
    
}


export default Sidebar;