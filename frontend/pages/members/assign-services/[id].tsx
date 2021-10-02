import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks';

import withAuth from '../../../hoc/withauth';
import Navbar from '../../../components/comman/Navbar/Navbar'
import Sidebar from '../../../components/comman/Sidebar/Sidebar'
import Dashboard from '../../../components/Member/Assign/Assign'
import { Section } from '../../../components/comman/comanstyle'



const Index: NextPage = withAuth(({query}:any) => {
 
 
  
  return (
<>
<Navbar/>

    <Section>
     
      <Sidebar/>
      <Dashboard id={query.id} />
      
     
    </Section>

    </>
  )
}, "admin")



Index.getInitialProps = async ({ query }) => {
  return {query};
}



export default (Index)
