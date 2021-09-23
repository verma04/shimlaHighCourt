import React from 'react'
import router, { useRouter } from 'next/router';

import withAuth from '../../../hoc/withauth';
import Navbar from '../../../components/comman/Navbar/Navbar'
import Sidebar from '../../../components/comman/Sidebar/Sidebar'
import Dashboard from '../../../components/edit/edit'
import { Section } from '../../../components/comman/comanstyle'

const Index = withAuth(() => {
 

  return (
<>
<Navbar/>
    <Section>
     
      <Sidebar/>
      <Dashboard/>

     
    </Section>

    </>
  )
}, "admin")

export default (Index)


