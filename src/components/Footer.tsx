// import { useQuestionsStore } from "./store/questions"
import { useQuestionData } from "../hooks/useQuestionsData";

function Footer() {
  // //first get the questions of the store
  // const questions = useQuestionsStore(state => state.questions);
  // let correctCount = 0;
  // let wrongCount = 0;
  // let unanswered = 0;
  // questions.forEach(question => {
  //   const { userSelectedAnswer: userAnswer, correctAnswer } = question;
  //   if (userAnswer === null || userAnswer === undefined) unanswered++;
  //   else {
  //     if (userAnswer === correctAnswer) correctCount++
  //     else wrongCount++;
  //   }
  // });

  const {correctCount, wrongCount, unanswered} =useQuestionData();

  return (
    <footer style={{ marginTop: '16px', }}>
      <strong>{`✅ ${correctCount} correctas - ❌ ${wrongCount} incorrectas - ❓ ${unanswered} sin responder`}</strong>
    </footer>
  )
}

export default Footer