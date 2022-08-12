import styled from 'styled-components';

const StyledResultSection = styled.section`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,.7);
  display:grid;
  place-items:center;
`

export const StyledModal = styled.div`
  max-width: 600px;
  padding:2rem;
  margin-inline: 1rem;
  background-color: #ffffff;
  border-radius:10px;
  text-align:center;
  h2{
    font-weight: 600;
    font-size: 2.5rem;
  }

  p{
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  span{
    font-size: 1.7rem;
    color: yellowgreen;
  }
`

export const AgainButton = styled.button`
    display: block; 
    font-size:1.2rem;
    color: #ffffff;
    background-color: #f6b80d;
    border-radius:5px;
    border:none;
    outline:none;
    padding: 0.4rem;
    margin-bottom:1rem;
    margin-inline:auto;
    width:100%;

    &:hover{
      background-color: #f0d484;
      color: black;
      cursor:pointer;
    }
`

export default StyledResultSection;
