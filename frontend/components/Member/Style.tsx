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
     border-radius: 0.5rem;
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
    
      height: 40rem;
      margin-top: 4rem;
      overflow: visible;
      display:flex;
      overflow: auto;
   justify-content:space-between;
   align-items:center;

  
   .chamber {
     width: 15%;
     height: 10rem;
  
     background-color:white;
     border-radius: 0.5rem;
     display: flex;
     justify-content: center;
     align-items: center;
   }
  
     
  
   
 }
   }
}
`
  