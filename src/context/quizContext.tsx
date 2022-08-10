import { createContext, ReactNode, useState } from "react";

const QuizContext = createContext({});

interface QuizContextProps {
    children: ReactNode
}

interface IOptions {
    amount: number
    category: string
    difficulty: string
}

export const QuizContextProvider = ({children}: QuizContextProps)=>{
    const [options, setOptions] = useState<IOptions>({
        amount: 10,
        category: 'sports',
        difficulty: 'easy'
    })

    return <QuizContext.Provider value={{
        options,
        setOptions
    }}>
        {children}
    </QuizContext.Provider>
}