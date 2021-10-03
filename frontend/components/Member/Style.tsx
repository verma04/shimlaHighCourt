import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 width: 100%;
 height: 100%;
@media (min-width: 1025px) {

   .btn-group-sm>.btn, .btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
}
.btn-light {
   width: 3rem;
    color: #3a3b45;
    background-color: #f8f9fc;
    border-color: #f8f9fc;
}
.rel {
   position: relative;
 
}
 #disabled {
    background-color: red;
 }
 #enabled {
    background-color: green;
 }
  
   display:flex;
   justify-content:center;
   .flex {
   width:100%;
   
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
   flex-direction: column;
  


   }
}
`
  