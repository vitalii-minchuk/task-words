import { FormEvent, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import WordForm from '../components/WordForm';
import { useAppDispatch, useAppSelector } from '../store';
import { createNewWord } from '../store/Slices/wordsSlice';
import { Word } from '../types';

function AddNewWord() {
  const [newWord, setNewWord] = useState<Word>({ word: '', translation: '' });
  const { isLoading } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createNewWord(newWord));
    navigate('/');
    setNewWord({ word: '', translation: '' });
  };
  return (
    <Box as="section" w="full">
      <Container maxW="6xl">
        <Box pt="50px" pb="20px">
          <Heading fontSize="30px" textAlign="center" as="h2">
            Add new word
          </Heading>
          <Container maxW="400px">
            <WordForm
              isLoading={isLoading}
              setValues={setNewWord}
              handleSave={handleSave}
              values={newWord}
            />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

export default AddNewWord;
