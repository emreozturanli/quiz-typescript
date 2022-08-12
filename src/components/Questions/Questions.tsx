import { useContext } from "react"
import { QuizContext } from "../../context/quizContext"
import Result from "../Result/Result"
import StyledQuestionsSection, { AnswerButton } from "./Questions.styled"

const Questions = () => {
  const { questions, index, correct, isLoading,showResult, nextQuestion } = useContext(QuizContext)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  const { question, correct_answer, incorrect_answers } = questions[index]
  //shuffle answers
  const answers = [...incorrect_answers, correct_answer].sort(function () { return 0.5 - Math.random() });


  return (
    <StyledQuestionsSection>
      <h4>Correct Answers : {showResult ? '0' : correct}/{index}</h4>
      <h1 dangerouslySetInnerHTML={{ __html: question }} />
      {
        answers.map((e, i) => {
          return <AnswerButton
            key={i}
            onClick={() => nextQuestion(e)}
            dangerouslySetInnerHTML={{ __html: e }} />
        })
      }
      {showResult && <Result/>}
    </StyledQuestionsSection>
  )
}

export default Questions