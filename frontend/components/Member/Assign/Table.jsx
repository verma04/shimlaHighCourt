import styled from 'styled-components'



export const Table = styled.section`
display:flex;
justify-content:center;
 width: 100%;
 height: 100%;
@media (min-width: 1025px) {

 
   #customers {

  border-collapse: collapse;
  width: 100%;
  height: 100%;

}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#top {
    height: 3rem;
    background-color: #f5f5f6;
    th {
        color: #858796;
        padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  font-weight: 800;
  font-family:Nunito;
  font-size:1.5rem;

    }    }


#customers th {
  padding-top: 30px;
  padding-bottom: 12px;
  text-align: left;
  font-weight: 800;
  font-family:Nunito;
  font-size:1rem;
  
}
tr {
    height: 2rem;
    th {
     
        span {
            font-size: 0.9rem;
            background-color: #1cc88a;;
            color:white;
            padding: 0.5rem;
            border-radius: 1.5rem;
        }
    }
}
   
  
   
  
  
     
   
   
 


}
`
  