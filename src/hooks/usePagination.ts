import { useState, useEffect } from 'react';
import { Word } from '../types';

function usePagination(words: Word[], search: string) {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownWords, setShownWords] = useState<Word[]>([]);

  const wordsPerPage = 6;
  const lastIndex = currentPage * wordsPerPage;
  const firstIndex = lastIndex - wordsPerPage;

  useEffect(() => {
    if (search) {
      setCurrentPage(1);
    }
  }, [search]);

  useEffect(() => {
    setShownWords(words.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex, words]);

  return {
    shownWords,
    setCurrentPage,
    wordsPerPage,
    currentPage,
  };
}

export default usePagination;
