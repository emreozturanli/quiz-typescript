import { useContext } from "react"
import { QuizContext } from "../../context/quizContext"
import StyledQuestionsSection, { AnswerButton } from "./Questions.styled"

const Questions = () => {
  const {questions,index,correct,isLoading,nextQuestion} = useContext(QuizContext)
  console.log(questions[index]?.question)
  
  if(isLoading){
    return <h1>Loading...</h1>
  }

  const {question, correct_answer,incorrect_answers} = questions[index]
  //shuffle answers
  const answers = [...incorrect_answers, correct_answer].sort(function(){return 0.5 - Math.random()});


  return (
    <StyledQuestionsSection>
      <h4>Correct Answers : {correct}/{index}</h4>
      <h1 dangerouslySetInnerHTML={{ __html: question }}/>
      {
        answers.map((e,i)=>{
          return <AnswerButton key={i} onClick={()=>nextQuestion(e)}>{e}</AnswerButton>
        })
      }
    </StyledQuestionsSection>
  )
}

export default Questions