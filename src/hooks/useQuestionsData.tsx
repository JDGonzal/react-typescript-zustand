import { useQuestionsStore } from "../store/questions";

// Adding a Custom Hook
export const useQuestionData = () => {
  //first get the questions of the store
  const questions = useQuestionsStore(state => state.questions);
  let correctCount = 0;
  let wrongCount = 0;
  let unanswered = 0;
  questions.forEach(question => {
    const { userSelectedAnswer: userAnswer, correctAnswer } = question;
    if (userAnswer === null || userAnswer === undefined) unanswered++;
    else {
      if (userAnswer === correctAnswer) correctCount++
      else wrongCount++;
    }
  })
  return{ correctCount,wrongCount, unanswered};
}
