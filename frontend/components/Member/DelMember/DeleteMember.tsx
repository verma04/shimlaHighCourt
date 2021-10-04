import React  , {useState} from 'react'
import { Pop } from '../../ComanStyle/Pop'
import { useDeleteMember } from '../../../apollo/actions'
interface props {
    myfunc(arg: string): void;
    id:string
 
}




const DeletePop:React.FC<props>  = ({myfunc, id}) => {
     
    const [deleteMember , { data:data1, loading, error }] =   useDeleteMember();
    
      
    

    return (
        <Pop>

            {data1 && data1.deleteMember && myfunc("")}
              <div data-aos="fade-top" className="modal-content">
    
    <div className="container">
      <h1>Delete User</h1>
      <p>Are you sure you want to delete User?</p>
    
     
    </div>
    <div className="clearfix">
          {!loading && 
 <button type="button"  onClick={()=> deleteMember({variables: {
    id:id 
}})} className="deletebtn">Delete</button>
          }
       

       {loading && 
 <button type="button"  className="deletebtn">Delete...</button>
          }
        <button onClick={()=> myfunc("")} >Cancel</button>
      </div>
  </div>
     
     
        </Pop>
    )
}

export default DeletePop
