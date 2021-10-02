import styled from 'styled-components'



export const Pop = styled.section`

@media (min-width: 1025px) {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
  background-color: #fefefe;
  margin: auto;

  border: 1px solid #888;
  width: 30%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .close {
    position: absolute;
    top: 2%;
    right: 2%;
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  p {
    margin-top: 2rem;
  }
}

.clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
width: 30%;
  height: 30%;

  button {
    width: 40%;
    height: 50%;
    font-size: 1rem;
  }
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
}


}
`
  