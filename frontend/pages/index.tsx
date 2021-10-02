import React , {useEffect} from 'react'
import withAuth from '../hoc/withauth'
import Redirect from '../components/shared/Redirect'


const Index = withAuth(() =>  {
   
  useEffect(() => {

  },)

  return (
    <div>
          <Redirect to="/dashbaord" />
    </div>
  )
}, "admin")

export default Index
