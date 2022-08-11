export interface IOptions {
    amount: number
    category: string
    difficulty: string
}

export interface IQuestions {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface IFetchedData {
    response_code : number
    results: IQuestions[]
}

export interface IQuizContext {
    options : IOptions
    handleInputChange : (e:any) => void
}