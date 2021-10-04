import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .flex {
    width:100%;
   
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
   flex-direction: column;
  }
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
    background-color: #858796;;

}
#img {
  width: 5;
  display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: left;
    img {
        width: 2rem;;
    }
   
}
#con {
    margin-left: 1.5rem;;
    margin-right: 1rem;
     font-size:0.9rem;
}
th:nth-child(3){
    color: #637381;
    font-size: 0.7rem;
}
 
    
  
}

  `