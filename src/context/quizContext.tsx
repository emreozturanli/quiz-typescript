import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { IOptions, IQuestions, IFetchedData, IQuizContext } from "../types/interfaces";

interface QuizContextProps {
    children: ReactNode
}

const API_ENDPOINT : string = 'https://opentdb.com/api.php?'

export const QuizContext = createContext({} as IQuizContext);

export const QuizContextProvider = ({children}: QuizContextProps)=>{
    //states
    const [options, setOptions] = useState<IOptions>({
        amount: 10,
        category: 'geography',
        difficulty: 'easy'
    })
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const [isStart, setIsStart] = useState(false)
    const [index,setIndex] = useState(0)
    const [correct,setCorrect] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    const [showResult, setShowResult] = useState(false)

    // convert string category to number
    const selectedCategory = (): number=>{
        if(options.category === 'sports'){return 21} 
        else if(options.category === 'history'){return 23} 
        else {return 22}
    }

    //fetch questions
    const getQuestions = async () => {
        setIsLoading(true)
        const url:string = `${API_ENDPOINT}amount=${options.amount}&category=${ selectedCategory()}&difficulty=${options.difficulty}&type=multiple`
        try {
            const { data } = await axios.get<IFetchedData>(url);
            setQuestions(data.results)
            setIsLoading(false)
        } catch (error) {
            console.log("error");
        }
    };

    //handling inputs, updating options
    const handleInputChange = (e : any) :void =>{
        setOptions({
            ...options,
            [e.target.name] : e.target.value
        })
    }

    // handle form submit fetch quiz questions
    const handleStart = (e: any): void => {
        e.preventDefault()
        getQuestions();
        setIsStart(true)
    }

    // bringing next question
    const nextQuestion = (e:string):void =>{
        if(e=== questions[index].correct_answer){
            setCorrect(prev => prev + 1)
        }
        setIndex((prev) => {
            const index = prev + 1
            if (index > questions.length - 1) {
              setShowResult(true)
              return 0
            } else {
              return index
            }
          })
    }

    const restartGame = () => {
        setShowResult(false);
        setIsStart(false);
        setCorrect(0);
        setIndex(0);
    }

    
    return <QuizContext.Provider value={{
        options,
        isStart,
        questions,
        index,
        isLoading,
        correct,
        showResult,
        handleInputChange,
        handleStart,
        nextQuestion,
        restartGame
    }}>
        {children}
    </QuizContext.Provider>
}