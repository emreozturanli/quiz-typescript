import { useContext } from "react"
import { QuizContext } from "../../context/quizContext"
import StyledResultSection, { AgainButton, StyledModal } from "./Result.styled"

const Result = () => {
  const {correct,options,restartGame} = useContext(QuizContext)

  return (
    <StyledResultSection>
      <StyledModal>
        <h2>Result</h2>
        <p> You have answered <span>{correct}</span> questions out of <span>{options.amount}</span> correctly</p>
        <AgainButton onClick={restartGame}>Play Again</AgainButton>
      </StyledModal>
    </StyledResultSection>
  )
}

export default Result