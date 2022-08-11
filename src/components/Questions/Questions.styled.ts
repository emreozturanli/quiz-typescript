import styled from 'styled-components';

const StyledQuestionsSection = styled.section`
  max-width: 800px;
  width: 90%;
  padding: 3rem 2rem;
  background-color: #ffffff;
  border-radius:.7rem;
  box-shadow: 0 5px 3px #858585;
  h4{
    text-align:end;
    color: orangered;
  }
  h1{
    margin: 2rem 0;
    text-align:center;
  }
`;

export const AnswerButton = styled.button`
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

export default StyledQuestionsSection;
