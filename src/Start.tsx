import { Button } from "@mui/material";
import { useQuestionStore } from "./store/questions";

function Start() {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions);
  const handleClick = () => { fetchQuestions(5); }
  return (
    <div>
      <Button onClick={handleClick} variant="contained">
        ¡Vamos a Empezar!
      </Button>
    </div>

  )
}

export default Start