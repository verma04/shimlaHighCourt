import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 width: 100%;
 height: 100%;
@media (min-width: 1025px) {

 
  
   display:flex;
   justify-content:center;
   .flex {
   width:100%;
   
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
   flex-direction: column;
  
 .flex-1 {
      width: 100%;
     
      display:flex;
   justify-content:space-between;
   align-items:center;
   height: 7rem;
   .flex-item {
     width: 23%;
     height: 100%;
  
     background-color:white;
     box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
     border-radius: 0.5rem;
     position: relative;
     display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 1rem;
      h4 {
        text-transform: uppercase;
        color:#4e73df;
        font-weight: 800;
      }
      span {
        margin-top: 0.5rem;
      }
     i {
      color: #dddfeb;
      position: absolute;
      right: 5%;
      top:35%;
      font-size: 2rem;
     }
   }
  .flex-item:nth-child(1) {
    border-left: .25rem solid #4e73df;

  }

  .flex-item:nth-child(2) {
    border-left: .25rem solid #f6c23e;
  }
  .flex-item:nth-child(3) {
    border-left: .25rem solid #36b9cc!important;
  }
  .flex-item:nth-child(4) {
    border-left: .25rem solid #1cc88a!important;
  }
   
 }
 .flex-2 {
      width: 100%;
    
      height: 45rem;
      margin-top: 4rem;
      overflow: visible;
      display:flex;
      overflow: auto;
   justify-content:space-between;
   align-items:center;

   .garph {
     width:66%;
     height: 100%;
     background-color:white;
     border-radius: 1rem;
     display:flex;
    
   justify-content:center;
   align-items:center;
   flex-direction: column;
   .graphl-top{
     width: 100%;
    height: 10%;
    border-radius: calc(.35rem - 1px) calc(.35rem - 1px) 0 0;

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
   .graphl-bottom{
     width: 100%;
    height: 90%;
    display:flex;
   justify-content:center;
   align-items:center;
   flex-direction: column;
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
  