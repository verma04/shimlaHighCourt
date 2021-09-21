import React from 'react'
import router, { useRouter } from 'next/router';
import { useGetMembers } from '../apollo/actions'
import withauth from '../hoc/withauth';
import Navbar from '../components/comman/Navbar/Navbar'
import Sidebar from '../components/comman/Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/dashboard'
import { Section } from '../components/comman/comanstyle'
function Index() {
 
  const {data , error , loading} = useGetMembers()
  console.log(error, data)
  return (

    <Section>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>

      <button onClick={()=> router.push('/logout')} >Logout</button>
    </Section>
  )
}

export default  withauth(Index)
