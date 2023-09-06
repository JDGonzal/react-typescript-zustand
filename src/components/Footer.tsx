// import { useQuestionsStore } from "./store/questions"
import { Button } from '@mui/material';
import { useQuestionData } from "../hooks/useQuestionsData";
import { useQuestionsStore } from '../store/questions';

function Footer() {

  const resetGame = useQuestionsStore(state => state.resetGame);

  const {correctCount, wrongCount, unanswered} =useQuestionData();

  return (
    <footer style={{ marginTop: '16px', }}>
      <strong>{`✅ ${correctCount} correctas - ❌ ${wrongCount} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <sup>&trade;&reg;</sup>
      <Button onClick={()=>resetGame()} >
        Resetear juego
      </Button>
    </footer>
  )
}

export default Footer