import React, { useState } from 'react'
import { useGetUser , useServicepayment } from '../../apollo/actions';

import { Pop } from '../ComanStyle/Pop';
import Redirect from '../shared/Redirect';
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}



function App({data, id}) {

    const [ servicepayment, { error:error1 , data:data1, loading:loading1}] = useServicepayment();
    const { data:{getMember} ={}, loading, error } = useGetUser({fetchPolicy: 'network-only'});
    console.log(data)
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		// const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
		// 	t.json()
		// )

		// console.log(data)

		const options = {
			key:  "rzp_test_lPtwqg3McgbFhq",
			currency: "INR",
			amount: 1000 * 100,
		
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1632304120/xyrhepqhn7gstz1cjzsd.ico?auto=format&fit=max&w=1920',
			handler: function (response) {
			
                console.log(response)
			  
                const set = {
                    payment_id:response.razorpay_payment_id ,
                    userid: getMember.id,
                    serviceID: id
                }

				console.log(set)

				console.log(error1)

                servicepayment({variables:set})
            
            
            },
			prefill: {
				name:getMember.username,
				email: getMember.email,
				phone_number: "9418237687"
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


	if(loading1) {
   return (
	<>
	<Pop>

		sd
	</Pop>
	
	</>
   )

	}
	return (
		<>
		{data1 && data1.servicepayment && window.location.reload()}
        <button onClick={displayRazorpay} >

 Pay  {data}
</button>
	
		</>
	)
}

export default App