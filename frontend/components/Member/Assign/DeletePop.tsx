import React from 'react'
import { Pop } from '../../ComanStyle/Pop'
import { useDeleteUserServices } from '../../../apollo/actions'
interface props {
    myfunc(arg: string): void;
    id:string
    value:string
}




const DeletePop:React.FC<props>  = ({myfunc, id, value}) => {

    const [deleteUserService , { data:data1, loading, error }] =   useDeleteUserServices();
    
      
    

    return (
        <Pop>
              <div data-aos="fade-top" className="modal-content">
    
    <div className="container">
      <h1>Delete Service</h1>
      <p>Are you sure you want to delete service?</p>
    
     
    </div>
    <div className="clearfix">
      
        <button type="button"  onClick={()=> deleteUserService({variables: {
            id:id ,userId :value 
        }})} className="deletebtn">Delete</button>
        <button onClick={()=> myfunc("")} >Cancel</button>
      </div>
  </div>
        </Pop>
    )
}

export default DeletePop
