import React , {useState} from 'react'
import Select from 'react-select'

import { Section } from './Style'
import {


  useAssignServices
 
 
} from '../../../apollo/actions'


  const Selectbox = ({data , value , ser}) => {

   
const [ city , setCity] = useState(null)   
   
 
const handleChange = (selectedOption) => {
  setCity(selectedOption );
  
}




const result = data.filter(ad => 
  ser.every(fd => fd.id !== ad.id));
 


const [assignServices , { data:data1, loading, error }] =   useAssignServices();
    
const sendData = () => {
  
  city.userId = value.id

  assignServices({ variables: city });
  setCity(null)


  
}



return (

      <Section>
 
      <div className="add" >
            <div style={{width: '30rem'}}>
      <Select 
value={city}
onChange={handleChange}
options={result.map(t => ({ value: t.servicesName, label: t.servicesName , id:t.id})) }

/>


     </div>
     <div className="button" >

     {city === null  && 
 <button style={{backgroundColor:"#4e73df85" , cursor:"wait"}}  > Add  </button>
     }
   
    
   {city !== null  &&   !loading  && 
 <button onClick={()=> sendData() }  >    Add  </button>
     }
   
 
   
   {loading  &&  city !== null &&
 <button  onClick={()=> sendData() }  > 
 <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg>
 
   </button>
     }
     </div>
   
   
</div> 
</Section>
    )
}

export default Selectbox
