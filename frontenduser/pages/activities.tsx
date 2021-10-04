import React from 'react'
import router, { useRouter } from 'next/router';
import { useGetMembers } from '../apollo/actions'
import withAuth from '../hoc/withauth';
import Navbar from '../components/comman/Navbar/Navbar'
import Sidebar from '../components/comman/Sidebar/Sidebar'
import Dashboard from '../components/activities/activities'
import { Section } from '../components/comman/comanstyle'

const Index = withAuth(() => {
 
  const {data , error , loading} = useGetMembers()
  
  return (
<>
<Navbar/>
    <Section>
     
      <Sidebar/>
      <Dashboard/>

     
    </Section>

    </>
  )
}, "user")

export default (Index)
