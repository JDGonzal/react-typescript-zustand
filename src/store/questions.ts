import { create } from 'zustand';
import { Question } from '../types.d';

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestion: (limit: number)=>void;
}

export const useQuestionStotre = create<State>(( set)=>{
  return {
    questions:[],
    currentQuestion:0,
    fetchQuestion: async(limit: number)=>{
      console.log(limit);
    }
  }
});
