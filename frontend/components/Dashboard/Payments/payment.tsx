import React from 'react'
import Garph from './Garph'
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import ContentLoader, { Facebook } from 'react-content-loader'
import Image from 'next/image'
import moment from 'moment'
import {


  
    GET_PAYMENTS
   
   
  } from '../../../apollo/queries'

function Payment() {

    interface getpayments {

        getpayments: payment[];
      }
      
      interface payment {
        memberId:String
        price:String
        createdAt:string
      }
     
      
      
      const { loading, data } = useQuery<getpayments>(
        GET_PAYMENTS,
        { variables: { year: 2019 } }
      );
      
  if (loading ) {
    return (
    
          <ContentLoader viewBox="0 0 380 70">
            {/* Only SVG shapes */}    
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="100" y="17" rx="4" ry="4" width="70" height="70" />
            <rect x="200" y="40" rx="3" ry="3" width="70" height="70" />
          </ContentLoader>
        )
    
}

    return (
        <div className='flex-2' >
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Month Payments Collections Statistics</h3>


</div>

<div  className="graphl-bottom" > 

<Garph/>
</div>
</div>
<div className='payments' >
<div  className="payments-top" > 
<h3>Latest Payments</h3>

</div>

<div  className="payments-bottom" > 
{data &&  data.getpayments.slice(0, 8).map((data , key)  =>

<div  className="pay"  key={key} >
<div className="pay-top" >
<div className="img-wrapper" >
                  <Image
          layout="fill"
          objectFit="contain"
      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1632304120/xyrhepqhn7gstz1cjzsd.ico"
      alt="Picture of the author"
     
    />
                  </div>

                  <span>{data.memberId}</span>

    </div>

    <div className="pay-bottom" >

        <span>{moment(data.createdAt).format('LLLL')}</span>
    </div>
</div>
)

}

</div>



</div>

        </div>


    )
}

export default Payment
