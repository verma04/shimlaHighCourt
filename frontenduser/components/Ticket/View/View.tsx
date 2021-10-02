import React , {useState} from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';

import { useGetUser } from '../../../apollo/actions';
import  Editor  from './Editor';
  import { Form} from '../../ComanStyle/Form'
 import { useRouter } from "next/router";

import {stateToHTML} from 'draft-js-export-html';
import Redirect from '../../shared/Redirect';
import { convertFromRaw, convertToRaw } from 'draft-js';

import { USER_ID_TICKET } from '../../../apollo/queries';

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';


import {  UserticketByIdComment ,UserticketByIdClose    } from '../../../apollo/actions'
 
interface Id {
  id:string
  }
const NewTicket:React.FC<Id>  = ({id}) => {

  const convertFromJSONToHTML = (text:string) => {
  
    const data = JSON.parse(text)
   
      try{
          return { __html: stateToHTML(convertFromRaw(data))}
        } catch(exp) {
          console.log(exp)
          return { __html: 'Error' }
        }
  }

 
  const router = useRouter();
  

  
       
  type Inputs = {
    ticketTitle: string,
  
  };
interface  comment {
    name: string
    time: string
    answer: string
    status: string
  }
  interface data {
    id: string
    ticketTitle: string
    status: string
    createdAt: string
    editedAt: string
    member: string
    comment:[comment]
   
  }

  interface Byid {
    getUserticketById:data
  }

 
  const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  
  
const { loading, data } = useQuery<Byid>(

  USER_ID_TICKET,
  
  { variables: { id: id } }
  


);




const [ getUserticketByIdComment, {data:data1, loading:loading1, error}] = UserticketByIdComment();

const [ getUserticketByIdClose, {data:data2, loading:loading2, error:error1}] = UserticketByIdClose();

console.log(error1)

 
     const contentState = convertFromRaw(content);
     const [state , setState ] = useState(contentState);
     const [ticketTitle , setticketTitle ] = useState("");

     const onSubmit = () =>{ 
      
      
      
      const set = {
        id:id,
        answer:JSON.stringify(state),
        

      }


      getUserticketByIdComment({ variables: set })
  
 
     

   }



   const Open = () =>{ 
      
      
      
    const set = {
      id:id,
      status:"open"
      

    }


    getUserticketByIdClose({ variables: set })


   

 }

 const Close = () =>{ 
      
      
      
  const set = {
    id:id,
    status:"close"
    

  }


  getUserticketByIdClose({ variables: set })


 

}
 
 const    onContentStateChange = (contentState:any) => {
         setState(contentState);
       
       };

 
  
    return (
        <Form>
            <div  className="flex" >


   
            <h1>New Ticket</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>
  
{data?.getUserticketById.status === "open" ?
(

  <span className={data?.getUserticketById.status}>
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
</svg>
  {data?.getUserticketById.status}
  </span>
):

(
  <span  className={data?.getUserticketById.status}>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-closed">
    <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path><path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
</svg>

{data?.getUserticketById.status}
</span>
)

}
  
  {data?.getUserticketById.ticketTitle }</h3>


</div>





{data?.getUserticketById.comment.map(number=> 
  <div key={number.time} >
{number.time}
<div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(number.answer)} ></div>
    </div>


)

}



                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
        
     
  

 <div className="list-2" >

<div  className="group-2" >
    <label   >Leave A Comment</label>
  
   
   <Editor onContentStateChange={onContentStateChange} />

    </div>
</div>

 <div className="button" >

     {data?.getUserticketById.status==="close" ?

     (
<button  id="goback" type="button"  
 
 onClick={()=> Open()}

> Open Ticket </button>
     )
     :
     (
<button 
onClick={()=> Close()}
id="goback" type="button"  > Close Ticket </button>
     )


     }
    
 

{  !loading1 &&

<button onClick={()=> onSubmit()}   style={{ background:'#4e73df'}} > Reply </button>
      }

{  loading1 &&

<button onClick={()=> onSubmit()} type="submit" style={{ background:'#4e73df'}} > Reply... </button>
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
