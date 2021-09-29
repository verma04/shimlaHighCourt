import styled from 'styled-components'



export const Section = styled.section`

@media (min-width: 1025px) {

  width: 100%; /* Full width */
  height: 100%;
  
    .modal {

  width: 100%; /* Full width */
  height: 100%; /* Full height */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

h1 {
  margin-top: 5rem;
  font-size: 3rem;
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
   
  margin: auto;


  width: 40%;


  position: relative;
  display: flex;
  justify-content: center;
align-self: center;
flex-direction: column;
align-items: center;
margin-top: 10vh;
.form {
    background-color: rgb(221,243,255);;
    
     width:100%;
     height:100%;;
     display:flex;
       justify-content:center;
       align-items:center;
       
       box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
     form {
       padding-top: 4rem;
       padding-bottom: 4rem;
       width:95%;
       height:95%;
       display:flex;
       justify-content:center;
       flex-direction:column;
      .group 			  { 
  position:relative; 
  margin-bottom:45px; 
  width:100%;
}
button {
  width:50%;
  height:3rem;
   font-size:1.3rem;
   background: #1690d2;
   border: none;
   color:white;
}
input 				{
  font-size:18px;
  background-color: rgb(221,243,255);;
  padding:10px 10px 10px 5px;
  display:block;
  width:90%;
  border:none;
  color:black;
  border-bottom:1px solid #757575;
}
select 	{
  font-size:18px;
  background-color: rgb(221,243,255);;
  padding:10px 10px 10px 5px;
  display:block;
  width:90%;
  border:none;
  color:black;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }
/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:1s ease all; 
  -moz-transition:1s ease all; 
  -webkit-transition:1s ease all;
}
/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}
/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:92%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}
/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}
/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}
/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}
/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
     }
   }
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 2%;
  right: 2%;


}



.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
}
`
  