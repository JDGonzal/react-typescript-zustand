import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

const LIMIT_QUESTIONS =10;
function Start() {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions);
  const handleClick = () => { fetchQuestions(LIMIT_QUESTIONS); }
  return (
    <div>
      <Button onClick={handleClick} variant="contained">
        ¡Vamos a Empezar!
      </Button>
    </div>

  )
}

export default Start