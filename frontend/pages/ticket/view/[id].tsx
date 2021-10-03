import React from 'react'
import router, { useRouter } from 'next/router';
import { useGetMembers } from '../../../apollo/actions'
import withAuth from '../../../hoc/withauth';
import Navbar from '../../../components/comman/Navbar/Navbar'
import Sidebar from '../../../components/comman/Sidebar/Sidebar'
import Dashboard from '../../../components/Ticket/View/View'
import { Section } from '../../../components/comman/comanstyle'
import { NextPage } from 'next'
const Index:NextPage = withAuth(({query}:any) => {
 

  
  return (
<>
<Navbar/>
    <Section>
     
      <Sidebar/>
      <Dashboard   id={query.id} />

     
    </Section>

    </>
  )
}, "admin")


Index.getInitialProps = async ({ query }) => {
  return {query};
}


export default Index
