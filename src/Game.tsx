import { /*IconButton, Stack,*/ Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useQuestionsStore } from "./store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Question } from "./types";

const QuestionComponent = ({ info }: { info: Question }) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: '#222', p: 2, textAlign: 'left' }}>
      <Typography variant="h5" color="#fefe">
        {info.question}
      </Typography>
      <SyntaxHighlighter language="JavaScript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#333', color:'#efe' }} disablePadding> 
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton>
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