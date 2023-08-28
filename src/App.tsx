import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { JavaScriptLogo } from './JavaScriptLogo';
import Start from './Start';
import { useQuestionStotre } from './store/questions';

function App() {
  const questions = useQuestionStotre(state => state.questions);
  console.log(questions);
  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        <Start />
      </Container>
    </main>
  )
}

export default App
