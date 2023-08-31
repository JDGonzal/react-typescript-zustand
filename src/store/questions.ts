import { create } from 'zustand';
import { type Question } from '../types.d';
import confetti from 'canvas-confetti';

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
}

export const useQuestionsStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json');
      const data = await res.json();
      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get();
      // We are going to use the "structureClone"
      const newQuestions = structuredClone(questions);
      // Get the position of this based on questionId
      const questionIndex = newQuestions.findIndex(q => q.id === questionId);
      // Get the info and keep the index to future use
      const questionInfo = newQuestions[questionIndex];
      // Checking the correct answer
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      // Show Confetti
      if (isCorrectUserAnswer) confetti();
      // Changing the info of the copy in the question
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      }
      // Update the State
      set({ questions: newQuestions });
    },
    goNextQuestion: () => {
      const { currentQuestion, questions } = get();
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) set({ currentQuestion: nextQuestion });
    },
    goPreviousQuestion: () => {
      const { currentQuestion } = get();
      const previousQuestion = currentQuestion - 1;
      if (previousQuestion >= 0) set({ currentQuestion: previousQuestion });
    }
  }
});
