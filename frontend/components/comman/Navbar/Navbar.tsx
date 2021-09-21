import React, { Component } from "react";
import Link from 'next/link'

import { Nav }  from './Style'

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div className='flex' >

   <div className='left' >

   
 
   </div>


   <div className='right' >
{/* 
   <Link
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
       href="/"
    >
      Home
    </Link>
    <Link
      activeClassName="navbar__link--active"
      className="navbar__link"
       href="/about"
    >
      About Us
    </Link>
    <Link
      activeClassName="navbar__link--active"
      className="navbar__link"
       href="/contacts"
    >
      Campsites
    </Link>
    <Link
      activeClassName="navbar__link--active"
      className="navbar__link"
       href="/contacts"
    >
     HomeStays
    </Link>
    <Link
      activeClassName="navbar__link--active"
      className="navbar__link"
       href="/contactus"
    >
    Contact
    </Link>
     */}
    
   </div>

        </div>
         
      </Nav>
    );
  }
}

export default Navbar;