/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word, WordsState } from '../../types';
import { getWordsForQuiz, shuffleAnswers } from '../../utils/helpers';

const initialState: WordsState = {
  isLoading: false,
  fetchError: '',
  newWord: null,
  words: [],
  wordsForQuiz: [],
  currentQuestionIndex: 0,
  quizIsAccomplished: false,
  answers: [],
  currentAnswer: '',
  score: 0,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    fetchWords(state) {
      state.isLoading = true;
    },
    fetchWordsSuccess(state, action: PayloadAction<Word[]>) {
      state.words = action.payload;
      state.isLoading = false;
    },
    fetchWordsFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
    setNewWord(state, action: PayloadAction<Word>) {
      state.newWord = action.payload;
    },
    createNewWord(state, action: PayloadAction<Word>) {
      state.words.push(action.payload);
      state.newWord = action.payload;
    },
    deleteWord(state) {
      state.words = state.words.filter((el) => el.id !== state.newWord?.id);
    },
    createWordsGroupForQuiz(state) {
      state.wordsForQuiz = getWordsForQuiz(state.words);
      state.answers = shuffleAnswers(
        state.wordsForQuiz[state.currentQuestionIndex]
      );
    },
    selectAnswer(state, action: PayloadAction<string>) {
      state.currentAnswer = action.payload;
      state.score =
        action.payload ===
        state.wordsForQuiz[state.currentQuestionIndex].correct
          ? (state.score += 1)
          : state.score;
    },
    goToNextQuestion(state) {
      if (state.currentQuestionIndex === state.wordsForQuiz.length - 1) {
        state.quizIsAccomplished = true;
      } else {
        state.currentQuestionIndex += 1;
        state.answers = shuffleAnswers(
          state.wordsForQuiz[state.currentQuestionIndex]
        );
        state.currentAnswer = '';
      }
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.quizIsAccomplished = false;
      state.wordsForQuiz = [];
      state.score = 0;
      state.currentAnswer = '';
    },
  },
});

export const {
  setNewWord,
  deleteWord,
  selectAnswer,
  resetQuiz,
  goToNextQuestion,
  createWordsGroupForQuiz,
  fetchWords,
  fetchWordsSuccess,
  fetchWordsFailure,
  createNewWord,
} = wordsSlice.actions;

export default wordsSlice.reducer;
