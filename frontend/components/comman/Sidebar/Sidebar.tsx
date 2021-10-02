import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Side  } from './Style'
import { useRouter } from "next/router";

import Image from 'next/image'




 const Sidebar =() => {
   const router = useRouter();
   const [user, setUser] = useState(null);

   

  

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
 <i  id={router.pathname == "/dashbaord" ? "active" : ""} className="fas fa-fw fa-tachometer-alt"> <h3>Dashboard</h3> </i>  
    </Link>
    <Link
    href="/finnace"
    passHref
    >
  <i  id={router.pathname == "/finnace" ? "active" : ""} className="fas fa-piggy-bank">  <h3>Finance</h3> </i> 
      </Link>
    <Link
    
  
   
       href="/members"
       passHref
    >
   <i id={router.pathname == "/members" ? "active" : ""} className="fa fa-users"> <h3>Members</h3> </i>  
    </Link>

    <Link
  
   
  href="/admin/parking"
  passHref
>
<i  id={router.pathname == "/admin/parking" ? "active" : ""} className="fas fa-school"> <h3>My Profile</h3> </i>  
</Link>
    <Link
  
   
       href="/admin/activities"
       passHref
    >
    <i id={router.pathname == "/admin/activities" ? "active" : ""} className="fas fa-city"><h3>Change Password</h3></i>  
    </Link>
 
    <Link
  
   
       href="/"
       passHref
    >
    <i className="fas fa-bell"> <h3>Support Tickets</h3> </i>
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
  <i className="far fa-list-alt">  <h3>Support</h3> </i> 
      </Link>
      

      <Link
  
   
  href="/logout"
  passHref
>
   
   <i className="fa fa-cog"> <h3>Global Setting</h3></i>  
    
    
    </Link>

      <Link
  
   
  href="/logout"
  passHref
>
   
   <i className="fa fa-sign-out-alt"> <h3>Sign Out</h3></i>  
    
    
    </Link>
   
            </Side>
        )
    
}


export default Sidebar;