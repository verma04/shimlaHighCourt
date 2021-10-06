import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`


div {
  font-family:Nunito;
}
a { 
  text-decoration: none; 
  color: ${props => props.theme.colors.darkBrown};
   font-family:Nunito;
   font-size: 1.5rem;
} 

h1 {
  font-family:Nunito;
}
.fa-folder-plus {
  color: ${props => props.theme.colors.blue} !important;
}

  body {
    color: #858796;
       font-family:Nunito;
       font-weight: 600;
      overflow-x: hidden;
       background-color: 	#E8E8E8;
      ::-webkit-scrollbar {
  width: 10px;
  #nprogress .bar {
  background: #FFBB00 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}

#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
}

/* Track */


/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.brown}; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.darkBrown};
}
      
  }
  ul {
    list-style: none;
    li {
      
    cursor: pointer;
    color: ${props => props.theme.colors.text1};

  }
  }
  label {
 font-weight: 800;
 font-size: 1rem;
  }
  img {
  cursor: pointer;
}
.octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
    color: white;
    margin-right: 0.5rem;
}
li {
  line-height:1.6;
}
.color-text-white {
    color: var(--color-scale-white) !important;
}
button {
  cursor: pointer;
  font-family:Nunito;
}

select {
  font-family:Nunito;
  font-size: 1.3rem;
}
option {
  font-family:Nunito;
  background-color: #d4daed;
    border-color: #cbd3e9;
}
button {
    background-color: ${props => props.theme.colors.blue};
    width: 20rem;
    height: 3.4rem;
    border: none;
    font-size: 1.5rem;
  color:white;
  
    font-family:Nunito;


           }
 

  h1 {
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
    font-family:Nunito;
  }

  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey1};
    font-family:Nunito;
  }

  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey1};
    font-family:Nunito;
    /* family=FiesoleTextW00-Italic */
  }
  p {
    font-family:Nunito;
  }
  button {
    font-family:Nunito;
  }


  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
  }

  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
  }

  p {
    font-size: 0.9rem;
    line-height: var(--line-height-md);
    color: rgb(88, 82,84);
    font-family:Nunito;
  }
  select {
     font-family:Nunito;
  }
  
  .date {
     font-family:Nunito;
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
  }
  input {
     font-family:Nunito;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
    border-radius: 0.2rem;
  }
  textarea {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-family:Nunito;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
    border-radius: 0.2rem;
  }
  h1 {
    font-weight: 800;
  }
  h2 {
    font-weight: 800;
  }
  #goback {
  background-color: #858796;
  }
  button {
    font-weight: 800;
  }
  span {
     font-family:Nunito;
  }
  tr {
    font-family:Nunito;
  }
  th {
    font-family:Nunito;
  }
  /* .css-1s2u09g-control {
  width: 29rem !important;
}

.css-1s2u09g-control{
    width: 29rem;
} */
  i {
    color: ${props => props.theme.colors.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      color: ${props => props.theme.colors.grey1};
    }

    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color: ${props => props.theme.colors.darkBrown};
     font-family:Nunito;
} 
button {
  font-family:Nunito;
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;








