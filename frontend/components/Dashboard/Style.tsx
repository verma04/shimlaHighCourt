import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
 
}
@media (min-width: 1025px) {
   display:flex;
   justify-content:center;
   .flex {
   width:100%;
   background-color:white;
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
  
 .flex-1 {
      width: 20%;
     
      display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   img {
    width: 100%;
   }
 }
 .flex-2 {
      width: 80%;
      overflow: visible;
      display:flex;
      overflow: auto;
   justify-content:center;
   align-items:center;
   flex-direction:column;
  
  
     
     h2 {
         padding-top:100rem;
         padding-bottom:100rem;
     }
   
 }
   }
}
`
  