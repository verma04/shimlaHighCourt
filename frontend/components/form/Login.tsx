
import { useForm } from 'react-hook-form'
import { Section } from './Style';
import Navbar from '../comman/Navbar/Navbar'

const LoginForm = ({onSubmit, loading}:any) => {
  const { handleSubmit, register } = useForm();

  return (
    <>

    <Section>
      <div className="flex" >
      <div className="left">
 
 </div>
 <div  className="right">
          <div className="head">
        
        <h1>Admin Login</h1>
       
            </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="input-field ">
                
                <label htmlFor="email">Email</label>
        <input
  {...register("email")}
          type="email"
          name="email"

          id="email" />
      </div>
      <div className="input-field ">
                
                <label htmlFor="email">Password</label>
        <input
      {...register("password")}
          name="password"
          type="password"
  
          id="password" />
      </div>
     
      <div className="button"  >
      { loading &&
        <button
        type="submit"
        className="btn btn-main bg-blue py-2 ttu">   Signing in...
      </button>
     
      }
      { !loading &&
        <button
          type="submit"
          className="btn btn-main bg-blue py-2 ttu">Submit
        </button>
      }
      </div>
    </form>
    </div>

    </div>
    
    </Section>
    </>
  )
}


export default LoginForm;