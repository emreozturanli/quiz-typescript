import Options from "./components/Options/Options";
import { QuizContextProvider } from "./context/quizContext";
import { GlobalStyles } from "./styles/Global.styled";

function App() {
  return (
    <QuizContextProvider>
      <GlobalStyles />
      <Options/>
    </QuizContextProvider>
  );
}

export default App;
