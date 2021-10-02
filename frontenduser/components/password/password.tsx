// import React , {useState} from 'react'
// import { Section } from './Style'

// import { useForm, SubmitHandler } from "react-hook-form";
// import { gql, useMutation } from '@apollo/client';

// import { useGetUser } from '../../apollo/actions';
  
// const AddMember:React.FC  = () => {
 
  

//   const { data, loading, error } = useGetUser();
 
 
       
//   type Inputs = {
//     newpassword: string,
//     oldpassword:string,
//   };

//     const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
//    console.log(data)
 
//      }
 
//     return (
//         <Section>
//             <div id="myModal" className="modal">
         
//             <h1>Profile</h1>
// <div data-aos="fade-down" className="modal-content">
 




  
//         <div className="form" >
                 
//                  <form onSubmit={handleSubmit(onSubmit)}>
     
//      <div className="group">      
//        <input {...register("newpassword")}   defaultValue={data.getMember.newpassword} type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>newpassword</label>
//      </div>
//      <div className="group">      
//        <input {...register("oldpassword")}  defaultValue={data.getMember.oldpassword} type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>oldpassword</label>
//      </div>


//      <div className="group">      
//        <input  type="text" required/>
//        <span className="highlight"></span>
//        <span className="bar"></span>
//        <label>Password</label>
//      </div>



//      <button> Edit </button>
     
//    </form>
 
//                  </div>

// </div>

//         </div>

//         </Section>
//     )
// }

// export default AddMember




import React , {useState} from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import { toast ,ToastContainer} from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import { useGetUser } from '../../apollo/actions';

  import { Form} from '../ComanStyle/Form'


import { useRouter } from "next/router";
import Redirect from '../shared/Redirect';

const AddMember:React.FC  = ({}) => {
  const router = useRouter();
  
  const { data, loading, error } = useGetUser();
 
 
       
  type Inputs = {
    oldpassword: string,
    newpassword:string,
    confirmpassword: string   
   
  
  };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{ 
      
   console.log(data)
 
     }

     const [passwordShownOld, setPasswordShownOld] = useState<boolean>(false);
     const togglePasswordVisiblity = () => {
       setPasswordShownOld(passwordShownOld ? false : true);
     };

     const [passwordShownNew, setPasswordShownNew] = useState<boolean>(false);
     const togglePasswordVisiblityNew = () => {
       setPasswordShownNew(passwordShownNew ? false : true);
     };
     const [passwordShownCon, setPasswordShownCon] = useState<boolean>(false);
     const togglePasswordVisiblityCon = () => {
       setPasswordShownCon(passwordShownCon ? false : true);
     };

  
  
  
    return (
        <Form>
            <div  className="flex" >


   
            <h1>Change Password</h1>

<div data-aos="fade-left" className='flex-2'>




  
        <div className='garph' >


        <div  className="graphl-top" > 


<h3>Change Password</h3>


</div>
                 
                 <form className="graphl-bottom" onSubmit={handleSubmit(onSubmit)}>
                 <div className="list" >
     <div className="group">      

     <label className="required-field" >Old Password</label>
       <input  defaultValue={data.getMember.oldpassword } {...register("oldpassword", { required: true })} 
       
       autoComplete="off" type={passwordShownOld ? "text" : "password"}
       />
        {passwordShownOld ? <i  id='ab' className="fas fa-eye-slash" onClick={togglePasswordVisiblity}></i> : <i  id="ab" className="far fa-eye" onClick={togglePasswordVisiblity}></i>}
       {errors.oldpassword && <span>This field is required</span>}
    </div>
  
 
     </div>
     
     <div className="list" >
  
   
     <div className="group">      
     <label className="required-field" >New Password
 </label>
       <input defaultValue={data.getMember.newpassword}   autoComplete="off" type={passwordShownNew ? "text" : "password"} {...register("newpassword", { required: true })}  />
   
       {errors.newpassword && <span>This field is required</span>}
       {passwordShownNew ? <i  id='ab' className="fas fa-eye-slash" onClick={togglePasswordVisiblityNew}></i> : <i  id="ab" className="far fa-eye" onClick={togglePasswordVisiblityNew}></i>}
 </div>
     

   
     
     </div>
     <div className="list" >

     <div className="group">  


      <label  > Confrim New Password</label>    
       <input  defaultValue={data.getMember.confirmpassword}  {...register("confirmpassword")}  autoComplete="off" type={passwordShownCon ? "text" : "password"} />
  
       {passwordShownCon ? <i  id='ab' className="fas fa-eye-slash" onClick={togglePasswordVisiblityCon}></i> : <i  id="ab" className="far fa-eye" onClick={togglePasswordVisiblityCon}></i>}
     </div>
     
 
 </div>


 <div className="button" >

     
     {!loading  &&
    <button> Save Changes </button>
     
      }
        {loading  &&
        <button
        type="submit"
     >   Saving...
      </button>
     
      }
    
     </div>
   </form>
 
                 </div>

</div>

        </div>

       
        </Form>
    )
}

export default AddMember
