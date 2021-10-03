import React from 'react'
import { Section} from './style'
import Redirect from '../../shared/Redirect'
import {

    useCreateServices
     
     
    } from '../../../apollo/actions'
    import { useRouter } from "next/router";
    import { useForm, SubmitHandler } from "react-hook-form";
    type Inputs = {
        ServicesName: string
         ServicesItems: string
          ServicesPrice: string
           ServicesInterval: string
           ServicesDescription: string
        };
 
const  Add:React.FC = () => {
    const router = useRouter();
    const [createServices, { data, loading, error }] = useCreateServices();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
        createServices({ variables: data });

    }

    return (
        <Section>
            {data && data.createServices &&  <Redirect to="/finnace" />}
            <div className='flex' >
                <h1>Add Payment Item</h1>
                 <div className='flex-2' >
        <div className='garph' >

          <div  className="graphl-top" > 


<h3>Add Payment Item</h3>


</div>

<form onSubmit={handleSubmit(onSubmit)} className="graphl-bottom" > 

<div className="list" >

<div  className="group" >

    <label>  Enabled </label>


<span><input name="acceptTerms" type="checkbox"   /> Enabled</span>

    

</div>

<div  className="group" >

    <label>Payment Item</label>
    <select    >
    <option value="1">SubScription</option>
 
  </select>
  
</div>
</div>
<div className="list" >

<div  className="group" >
    <label>Item Name</label>

    <input  {...register("ServicesName")}   ></input>
</div>

<div  className="group" >
    <label>No. Of Items</label>

    <input   {...register("ServicesItems")}  ></input>
</div>
</div>

<div className="list" >

<div  className="group" >
    <label>Currency</label>
    <select>
    <option value="1">INR, Indian Rupee</option>
 
  </select>
  
</div>

<div  className="group" >
    <label>Item Price</label>

    <input  type="number" {...register("ServicesPrice")} ></input>
</div>
</div>


<div className="list" >

<div  className="group" >
    <label>Recurring Interval Unit (For Subscription Only)</label>

    <select>
    <option value="1">Month</option>
 
  </select>
</div>

<div  className="group" >
    <label>Recurring Interval (For Subscription Only)</label>

    <select>
    <option value="1">No Limit</option>
 
  </select>
</div>
</div>

<div className="list" >

<div  className="group" >
    <label>Purchase Times Limit</label>

    <select {...register("ServicesInterval")} >
    <option value="Monthly">Monthly</option>
 
  </select>
</div>

<div  className="group" >
    <label>Acces Condition(No Limit or after certain kind of payment)</label>

    <select>
    <option value="1">No Limit</option>
 
  </select>
</div>
</div>


<div className="list" >

<div  className="group" >
    <label>Renew or Reset Action</label>

    <select>
    <option value="1">No Limit</option>
 
  </select>
</div>


</div>
<div className="list" >

<div  className="group-1" >
    <label   >Item Description</label>

    <textarea {...register("ServicesDescription")} />
    </div>
</div>


<div className="button" >
 
 <button type="button" onClick={()=> router.push('/finnace')} id="goback" >Go back</button>
 <button>Submit</button>
 
</div>




</form>
</div>
      </div>
       
       
        </div>


        </Section>
    )
}

export default Add
