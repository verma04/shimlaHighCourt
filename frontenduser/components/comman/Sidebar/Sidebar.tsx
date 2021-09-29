import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Side  } from './Style'
import { useRouter } from "next/router";

import { useLazyGetUser } from '../../../apollo/actions';
import Image from 'next/image'

import { useGetUser } from '../../../apollo/actions';


 const Sidebar =() => {
   const router = useRouter();
   const [user, setUser] = useState(null);

   const { data, loading, error } = useGetUser();

  

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
           href="/dashbaord"
           passHref
          
    >
 <i  id={router.pathname == "/dashbaord" ? "active" : ""} className="fas fa-list"> <h3>  dashboard</h3> </i>  
    </Link>
   
 
 
    <Link
  
   
       href="/profile"
       passHref
    >
    <i id={router.pathname == "/profile" ? "active" : ""} className="fas fa-bell"> <h3>My Profile</h3> </i>
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
   <i className="fas fa-money-check-alt"> <h3>Change Password</h3></i>  
    </Link>
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-star"> <h3>Support Ticket </h3></i>  
    </Link>
    <Link
  
   
       href="/notifications"
       passHref
    >
    <i className="fas fa-credit-card"> <h3>My Notification ({ data && data.getMember.notifcations.length}) </h3>  </i>  
    </Link>

    <Link
  
   
       href="/"
       passHref
    >
 <i className="fas fa-cog"> <h3>My Activity Log</h3> </i>  
      </Link>
  
      <Link
  
   
  href="/logout"
  passHref
>
   
   <i className="fas fa-cog"> <h3>Logout</h3></i>  
    
    
    </Link>
   
            </Side>
        )
    
}


export default Sidebar;