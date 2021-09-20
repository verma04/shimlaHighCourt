import React from 'react'
import router, { useRouter } from 'next/router';
import { useGetMembers } from '../apollo/actions'
import withauth from '../hoc/withauth';

function Index() {
 
  const {data , error , loading} = useGetMembers()
  console.log(error, data)
  return (
    <div>
      dssd

      <button onClick={()=> router.push('/logout')} >Logout</button>
    </div>
  )
}

export default  withauth(Index)
