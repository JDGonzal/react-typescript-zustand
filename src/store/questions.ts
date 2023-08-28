import { create } from 'zustand';
import { Question } from '../types.d';

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => void;
}

export const useQuestionStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      console.log(limit);
      set({
        questions: [
          {
            "id": 1,
            "question": "¿Cuál es la salida de este código?",
            "code": "console.log(typeof NaN)",
            "answers": [
              "undefined",
              "NaN",
              "string",
              "number"
            ],
            "correctAnswer": 3
          }
        ],
      });
      get();
    }
  }
});
