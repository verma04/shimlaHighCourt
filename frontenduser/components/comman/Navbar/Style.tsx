import styled from 'styled-components'



export const Nav = styled.nav`


@media (min-width: 1025px) {
    display:flex;
    background-color: ${props => props.theme.colors.blue};
justify-content:center;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
padding-bottom:1rem;
    position:fixed;
    width:100%;
    top:0%;
z-index:999;
            .flex {
                width:90%;    
             display:flex;
justify-content:space-between;

                  .left {
                      margin-top:1rem;
                 
                   
                      display:flex;
                      justify-content:flex-start;
                      img {
                        width: 15%;
                      }
                      .data {
                          display:flex;
                          justify-content:center;
                          flex-direction: column;
                      h2 {
                        margin-left:1rem;
                           font-size:2.4rem;
                       }
                       h3 {
                           text-align:center;
                       }
                      }
                  }
            }
            .right {
               
               margin-top: 4rem;
   width: 50%;
   display: flex;
   justify-content: space-around;

   a {
   -webkit-text-decoration: none;
   text-decoration: none;
   font-family: 'Comfortaa',cursive;
   font-size: 1.3rem;
   color: ${props => props.theme.colors.text1};
    font-weight:900;
   
   }



           }  
}
`