import { useForm } from 'react-hook-form'


const LoginForm = ({onSubmit, loading}) => {
  const { handleSubmit, register } = useForm();

  return (
    <>
   
  
      <div className="flex" >
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        {...register('email', { required: true })}
          type="email"
          name="email"
          className="form-control"
          id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
        {...register('password', { required: true })}
          name="password"
          type="password"
          className="form-control"
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
    

    </>
  )
}


export default LoginForm;