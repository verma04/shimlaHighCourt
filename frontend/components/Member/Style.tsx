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
  

 .flex-2 {
      width: 100%;
    
      height: 40rem;
      margin-top: 4rem;
      overflow: visible;
      display:flex;

   justify-content:space-around;
   align-items:center;

   flex-wrap: wrap;
  
   .chamber {
     width: 15%;
     height: 10rem;
  
     background-color:white;
     border-radius: 0.5rem;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     flex-direction: column;
     .img-wrapper {
       position: relative;
       width: 100%;
       height: 50%;
     }
   }
  
     
  
   
 }
   }
}
`
  