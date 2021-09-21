import styled from 'styled-components'




export const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;
background-color: #4e73df;
/* Used if the image is unavailable */
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
@media (min-width: 1025px) {
 
 .flex {
     display:flex;
     justify-content:center;
     width:60%;
      align-items:center;
    height:80%;
    box-shadow: 0 0 10px #fff;
   
     .left {
         width:40%;
         height:100%;
      background-image: url("https://membership.demo.cyberbukit.com/assets/themes/default/img/dog1.jpg");

    background-size: cover;
    background-position: center;
       
     }
     .right {
         width:60%;
         height:100%;
         background-color:white;
         display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
 .head {
    display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
height:20%;
 

 }
 form {
    display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
width:100%;
height:50%;
 
.input-field  {
    width:100%;
height:25%;
display:flex;
justify-content:center;
width:60%;
flex-direction:column;
input {
    height:50%;
    padding: 0.2rem;
    border-radius:0.3rem;
    padding-left:0.5rem;
}
label {
    font-weight:900;
    padding-bottom:0.5rem;
}
span {
    color: red;
    font-size:0.8rem;
    padding-top: 0.2rem;
}
}
.button  {
    width:100%;
height:20%;
display:flex;
justify-content:space-between;
align-items:center;
width:60%;
.text {
    h4 {
    font-weight:900;
    
    cursor: pointer;
    }
}
button {
    height:100%;
     font-size:1rem;
     width: 34%;
}
}
 }
     }
 }
   
}

`