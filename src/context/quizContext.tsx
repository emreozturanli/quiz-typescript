import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IOptions, IQuestions, IFetchedData, IQuizContext } from "../types/interfaces";

interface QuizContextProps {
    children: ReactNode
}

// const API_ENDPOINT : string = 'https://opentdb.com/api.php?'
const url : string = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

export const QuizContext = createContext({} as IQuizContext);

export const QuizContextProvider = ({children}: QuizContextProps)=>{
    const [options, setOptions] = useState<IOptions>({
        amount: 10,
        category: 'sports',
        difficulty: 'easy'
    })
    const [questions, setQuestions] = useState<IQuestions[]>([]);

    const getQuestions = async () => {
        try {
            const { data } = await axios.get<IFetchedData>(url);
            console.log(data.results);
            setQuestions(data.results)
        } catch (error) {
            console.log("error");
        }
    };
    useEffect(() => {
        getQuestions();
    }, [])

    const handleInputChange = (e : any) :void =>{
        setOptions({
            ...options,
            [e.target.name] : e.target.value
        })
    }
    
    return <QuizContext.Provider value={{
        options,
        handleInputChange
    }}>
        {children}
    </QuizContext.Provider>
}