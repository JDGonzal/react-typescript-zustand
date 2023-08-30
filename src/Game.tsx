import { /*IconButton, Stack,*/ Card, Typography } from '@mui/material';
import { useQuestionsStore } from "./store/questions";
import { Question } from "./types";

const QuestionComponent = ({ info }: { info: Question }) => {
  return (
    <Card variant="outlined">
      <Typography variant="h5">
        { info.question}
      </Typography>
    </Card>
  );
}

function Game() {
  const questions = useQuestionsStore(state => state.questions);
  const currentQuestion = useQuestionsStore(state => state.currentQuestion);

  const questionInfo = questions[currentQuestion];
  return (
    <QuestionComponent info={questionInfo} />
  )
}

export default Game