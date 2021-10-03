import React from 'react'
import { Pop } from '../../ComanStyle/Pop'
import { useDeleteServices } from '../../../apollo/actions'
interface props {
    myfunc(arg: string): void;
    id:string
 
}




const DeletePop:React.FC<props>  = ({myfunc, id}) => {

    const [deleteFinnaceServices , { data:data1, loading, error }] =   useDeleteServices();
    
      
    

    return (
        <Pop>

            {data1 && data1.deleteFinnaceServices && myfunc("")}
              <div data-aos="fade-top" className="modal-content">
    
    <div className="container">
      <h1>Delete Service</h1>
      <p>Are you sure you want to delete service?</p>
    
     
    </div>
    <div className="clearfix">
      
        <button type="button"  onClick={()=> deleteFinnaceServices({variables: {
            id:id 
        }})} className="deletebtn">Delete</button>
        <button onClick={()=> myfunc("")} >Cancel</button>
      </div>
  </div>
        </Pop>
    )
}

export default DeletePop
