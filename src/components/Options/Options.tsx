import StyledMain, { InputContainer, OptionsButton } from "./Options.styled"

const Options = () => {
  return (
    <StyledMain>
      <h1>Quiz Options</h1>
      <form >
        <InputContainer>
            <label htmlFor="amount">Number of Questions</label> <br />
            <input type="number" name="amount" value={10}/>
        </InputContainer>
        <InputContainer>
            <label htmlFor="category">Category</label> <br />
            <select name="category" >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
            </select>
        </InputContainer>
        <InputContainer>
            <label htmlFor="difficulty">Difficulty</label> <br />
            <select name="difficulty" >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
        </InputContainer>
        <OptionsButton>Start</OptionsButton>
      </form>
    </StyledMain>
  )
}

export default Options