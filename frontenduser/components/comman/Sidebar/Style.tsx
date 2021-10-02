import styled from 'styled-components'



export const Side = styled.aside`
display:flex;
justify-content:center;

@media (min-width: 1025px) {
   
    position:fixed;
   z-index: 1000;
    height:100vh;
    left:0;
    width:13%;
    top: 0%;
	    background-color: #4e73df;
    
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  flex-direction:flex;
  border-radius: 4px;
  padding-top:1rem;
 
.img-wrapper {
  position: relative;
  height: 15%;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;

}

.navbar__link {
    
  height:2.5rem;
 padding-left:10%;
  width: 90%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:row;
color: rgba(255,255,255,.3);
  border-bottom: 3px solid transparent;
  h3 {
    padding-left:1rem;
    font-size:1rem;
    color:white;
  }
  
}
.navbar__link:hover {
  background-color: ${props => props.theme.colors.blue};
  i {
    background-color: ${props => props.theme.colors.blue};
  }
}
#active {
  
 color:white;
 h3 {
  color:white;
 }


}

i {
  height:15%;
 padding-left:10%;
  width: 90%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:row;
color: rgba(255,255,255,.3);
  border-bottom: 3px solid transparent;
  h3 {
    padding-left:1rem;
    font-size:1rem;
    color: rgba(255,255,255,.3);
  }
}
i:hover {
  background-color: ${props => props.theme.colors.blue};
cursor: pointer;
  i {
    color:white;
  }
}




  
}
`