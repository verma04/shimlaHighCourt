import React , {useState} from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { useGetUser } from '../../apollo/actions';
import  Editor  from './Editor';
  import { Form} from '../ComanStyle/Form'
 import { useRouter } from "next/router";
import Redirect from '../shared/Redirect';
import { convertFromRaw, convertToRaw } from 'draft-js';

import { useAddTicket } from '../../apollo/actions';

const NewTicket:React.FC  = ({}) => {

 
  const router = useRouter();
  

  
       
  type Inputs = {
    ticketTitle: string,
  
  };

 
  const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  
    const [ addticket, {data, loading, error}] = useAddTicket();


    console.log(error)
     const contentState = convertFromRaw(content);
     const [state , setState ] = useState(contentState);
     const [ticketTitle , setticketTitle ] = useState("");

     const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
      
      
      const set = {
        answer:JSON.stringify(state),
        ticketTitle

      }
      addticket({variables:set})
  
 
     

   }

 
 const    onContentStateChange = (contentState:any) => {
         setState(contentState);
       
       };

 
  
    return (
        <Form>
            <div  className="flex" >


{data &&  data.addticket && <Redirect to="/ticket" />}
   
            <h1>New Ticket</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>New Ticket</h3>


</div>
                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
                 <div className="list" >
     <div style={{width:"100%"}} className="group">      

     <label className="required-field" >Title</label>
       <input   onChange={(e)=> setticketTitle(e.target.value) }   type="text"   />
   
    </div>

     </div>
     
  

 <div className="list-2" >

<div  className="group-2" >
    <label   >Leave A Comment</label>
  
   
   <Editor onContentStateChange={onContentStateChange} />

    </div>
</div>

 <div className="button" >

     
    

      { ticketTitle === "" &&

<button type="button" style={{cursor:"initial" , background:"#4e73dfad" }} > Submit </button>
      }

{ ticketTitle !=="" && !loading &&

<button type="submit" style={{ background:'#4e73df'}} > Submit </button>
      }

{ ticketTitle !=="" && loading &&

<button type="submit" style={{ background:'#4e73df'}} > Submit... </button>
      }
    
     </div>
   </form>
 
                 </div>

</div>

        </div>

       
        </Form>
    )
}

export default NewTicket
