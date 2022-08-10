import styled from 'styled-components';

const StyledMain = styled.main`
  max-width: 600px;
  width: 90%;
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius:.7rem;
  box-shadow: 0 5px 3px #858585;

  h1{
    margin-bottom:1rem;
  }

  form{
    display:flex;
    flex-direction:column;
    gap: 1rem;
  }
`

export const InputContainer = styled.div`
  label{
    margin-bottom:.5rem;
    display:inline-block;
    font-weight:600;
    font-size: .9rem;
    opacity: .8;
  }

  input,select{
    font-size:1rem;
    background-color: #d6e8ff;
    border-radius:5px;
    border:none;
    outline:none;
    padding: 0.4rem;;
  }
`
export const OptionsButton = styled.button`
    font-size:1.5rem;
    color: #ffffff;
    background-color: #f6b80d;
    border-radius:5px;
    border:none;
    outline:none;
    padding: 0.4rem;

    &:hover{
      background-color: orangered;
      color: wheat;
      cursor:pointer;
    }
`

export default StyledMain;
