import styled from 'styled-components'



export const Form = styled.section`
display:flex;
justify-content:center;
 width: 100%;
 height: 100%;
@media (min-width: 1025px) {

    .required-field::after {
  content: "*";
  color: red;
  margin-left:2px
}
span {
    color:red;
    font-size: 0.8rem;
}
  
   display:flex;
   justify-content:center;
   .flex {
   width:100%;
   
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
   flex-direction: column;
  
   margin-bottom: 10rem;

 .flex-2 {
      width: 100%;
    
      
      margin-top: 4rem;
      overflow: visible;
      display:flex;
      overflow: auto;
   justify-content:space-between;
   align-items:center;

   .garph {
     width:70%;
     height: 100%;
     background-color:white;
     border-radius: 1rem;
     display:flex;
    
   justify-content:center;
   align-items:center;
   flex-direction: column;
   .graphl-top{
     width: 100%;
    height: 5rem;
    border-radius: calc(.35rem - 1px) calc(.35rem - 1px) 0 0;

    margin-bottom: 0;
    background-color: #f8f9fc;
    border-bottom: 1px solid #e3e6f0;
    display:flex;
     
    justify-content: space-between;

    align-items:center;

  
    h3 {
      padding-left: 5%;
      color: #4e73df;
    }
    .status {
        display: flex;
        justify-content: flex-end;
        width: 70%;
        button {
            width: 10%;
            height: 2rem;
            font-size: 0.8rem;
            margin-right: 1rem;
        }
    }
   }
   .graphl-bottom{
     width: 100%;
    height: 90%;
    display:flex;
   justify-content:center;
   align-items:center;
   flex-direction: column;
   .list {
        display:flex;
    
width: 100%;
    align-items:center;
    justify-content:flex-start;
    height: 7rem;
   
    
    .group {
        width: 50%;
        align-items:center;
    justify-content:space-evenly;
     display: flex;
    
    flex-direction: column;
    align-items: center;
    height: 100%;
    label {
        width: 90%;
        font-size: 1.2rem;
  
        }
 
        span {
            display: flex;
     width: 90%;
justify-content: flex-start;
    align-items: center;
            input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
}
    }
    input {
       
        width: 90%;
        height:40%;
    }
    select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  height:40%;
  /* Personalize */

  width:90%;
  padding: 0 1em;
 
 
  background-image: none;
  cursor: pointer;
}
/* Remove IE arrow */



    }
    .group-1 {
        width: 100%;
        align-items:center;
    justify-content:space-evenly;
     display: flex;
    
    flex-direction: column;
    align-items: center;
    height: 100%;
    label {
        width: 95%;
        font-size: 1.2rem;
    }
    textarea {
  width: 95%;
  height: 80%;

    }

    }

   

    }

    .button {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 95%;

        button {
            margin-left: 1rem;
            width: 10rem;
            font-size: 1rem;
        }
        

    }
   }
   }
   .payments {
     height: 100%;
     width: 30%;
     background-color:white;
     border-radius: 1rem;
     .payments-top{
     width: 100%;
    height: 10%;
    border-radius: calc(.35rem - 1px) calc(.35rem - 1px) 0 0;
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: #f8f9fc;
    border-bottom: 1px solid #e3e6f0;
    display:flex;
    

    align-items:center;
    h3 {
      padding-left: 5%;
      color: #4e73df;
    }
   }
   .payments-bottom{
     width: 100%;
    height: 90%;
    display:flex;
   justify-content:center;
   align-items:center;
   flex-direction: column;
   .pay {
     width: 100%;
     height: 12%;
     display: flex;
     justify-content: center;
     align-items: center;

     flex-direction: column;
     .pay-top {
       width: 100%;
       height: 50%;
       display: flex;
     justify-content: flex-start;
     align-items: center;
    .img-wrapper {
      width: 10%;
      height: 90%;
      position: relative;
    }
    span {
      padding-left: 10%;
      color: #858796;
    }
     }

     .pay-bottom {
       width: 100%;
       height: 50%;
       display: flex;
     justify-content: center;
     align-items: center;
      span {
        color: #858796;
        font-size: 0.8rem;
      }
   
     }
   }
   }
   }
   
  
  
     
     h2 {
         padding-top:100rem;
         padding-bottom:100rem;
     }
   
 }
   }
}
`
  