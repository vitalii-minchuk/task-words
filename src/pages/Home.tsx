import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Pagination from '../components/common/Pagination';
import WordCard from '../components/WordCard';
import usePagination from '../hooks/usePagination';
import { useAppDispatch, useAppSelector } from '../store';
import { deleteWord, setNewWord } from '../store/Slices/wordsSlice';
import { Word } from '../types';

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');
  const { words } = useAppSelector((state) => state.words);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const { wordsPerPage, shownWords, currentPage, setCurrentPage } =
    usePagination(filteredWords, search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilteredWords(
      words.filter((el) =>
        el.word.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, words]);

  const handleDeleteWord = (obj: Word) => {
    onOpen();
    dispatch(setNewWord(obj));
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteWord());
    onClose();
  };

  return (
    <Box as="section" w="full">
      <Container maxW="6xl" pb="30px">
        <Box pt="50px" pb="20px">
          <FormControl
            maxW="450px"
            sx={{ position: 'relative' }}
            mb="20px"
            variant="floating"
          >
            <FormLabel>Search:</FormLabel>
            <Input
              height="54px"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />
          </FormControl>
          {shownWords.map((el) => (
            <WordCard
              handleDeleteWord={handleDeleteWord}
              key={el.word}
              word={el}
            />
          ))}
        </Box>
        <Pagination
          totalItems={filteredWords?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          wordsPerPage={wordsPerPage}
        />
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="50%">
          <ModalCloseButton />
          <ModalBody display="grid" placeItems="center">
            Are you sure ?
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleDeleteConfirm} variant="ghost">
              confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Home;
