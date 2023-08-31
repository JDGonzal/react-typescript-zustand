import { /*IconButton, Stack,*/ Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useQuestionsStore } from "./store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question } from "./types";

const QuestionComponent = ({ info }: { info: Question }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer);
  // a function that returns a function
  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  }

  const getSelectedAnswer=()=> {
    const { userSelectedAnswer} = info;
    return (userSelectedAnswer === null || userSelectedAnswer === undefined);
  }

  // It is a function that you only use in this "Game.tsx" file
  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info;
    // The user not selected anything
    if (getSelectedAnswer()) return 'transparent';
    // If the user selected but it is wrong answer
    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent';
    // If the user selected the correct answer
    if (index === correctAnswer) return 'green';
    // If the user selected but it is wrong answer
    if (index === userSelectedAnswer) return 'red';
  }

  return (
    <Card variant="outlined" sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 4 }}>
      <Typography variant="h5" color="#fefe">
        {info.question}
      </Typography>
      <SyntaxHighlighter language="JavaScript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#333', color: '#efe' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={!(getSelectedAnswer())}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(index) }}>
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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