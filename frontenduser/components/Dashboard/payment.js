import React, { useState } from 'react'
import { useGetUser } from '../../apollo/actions';

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

const __DEV__ = document.domain === 'localhost'

function App({data}) {
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
			amount: data * 1000,
		
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1632304120/xyrhepqhn7gstz1cjzsd.ico?auto=format&fit=max&w=1920',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name:getMember.username,
				email: getMember.email,
				phone_number: getMember.phone
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
        <button onClick={displayRazorpay} >

{data}
</button>
	
		
	)
}

export default App