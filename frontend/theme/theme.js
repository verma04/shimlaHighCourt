import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`



a { 
  text-decoration: none; 
  color: ${props => props.theme.colors.darkBrown};
   font-family: 'Merienda', cursive;
} 

h1 {
  font-family: 'Merienda', cursive;
}

  body {
  
       font-family: 'Merienda', cursive;
      overflow-x: hidden;
       background-color: ${props => props.theme.colors.mainBack};
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
  img {
  cursor: pointer;
}

button {
  cursor: pointer;
  font-family: 'Merienda', cursive;
}

button {
    background-color: ${props => props.theme.colors.blue};
    width: 20rem;
    height: 3.4rem;
    border: none;
    font-size: 1.5rem;
  color:white;
  
    font-family: 'Merienda', cursive;


           }
 

  h1 {
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
    font-family: 'Merienda', cursive;
  }

  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey1};
    font-family: 'Merienda', cursive;
  }

  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey1};
    font-family: 'Merienda', cursive;
    /* family=FiesoleTextW00-Italic */
  }
  p {
    font-family: 'Merienda', cursive;
  }
  button {
    font-family: 'Merienda', cursive;
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
    font-family: 'Merienda', cursive;
  }
  select {
     font-family: 'Merienda', cursive;
  }
  
  .date {
     font-family: 'Merienda', cursive;
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
font-family: 'Courgette', cursive;
  }
  input {
     font-family: 'Merienda', cursive;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
  }
  span {
     font-family: 'Merienda', cursive;
  }
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
     font-family: 'Merienda', cursive;
} 
button {
  font-family: 'Merienda', cursive;
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;









