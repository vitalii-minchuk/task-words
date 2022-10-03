import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useAppDispatch, useAppSelector } from '../store';
import { addNewTest } from '../store/Slices/testSlice';
import { createWordsGroupForQuiz, resetQuiz } from '../store/Slices/wordsSlice';

function Quiz() {
  const dispatch = useAppDispatch();
  const { wordsForQuiz, currentQuestionIndex, quizIsAccomplished, score } =
    useAppSelector((state) => state.words);
  const navigate = useNavigate();

  const handleStart = () => {
    dispatch(createWordsGroupForQuiz());
  };

  const handleShowResults = () => {
    navigate('/result');
    dispatch(
      addNewTest({
        time: new Date(),
        result: score * 10,
      })
    );
    dispatch(resetQuiz());
  };

  const handleTryAgain = () => {
    dispatch(resetQuiz());
    dispatch(createWordsGroupForQuiz());
  };

  return (
    <Box as="section" w="full">
      <Container maxW="6xl">
        <Box pt="50px" pb="20px">
          <Flex
            direction="column"
            justify="center"
            align="center"
            h="400px"
            maxW="600px"
            bg="white"
            mx="auto"
            borderRadius="8px"
            boxShadow="3px 3px 6px gray"
          >
            {!wordsForQuiz.length && (
              <Button
                bg="blue.500"
                color="white"
                _hover={{ color: 'black', bg: 'blue.300' }}
                variant="solid"
                type="button"
                onClick={handleStart}
              >
                start
              </Button>
            )}
            {!!wordsForQuiz.length && (
              <>
                <Heading fontSize="28px">{`Question ${
                  currentQuestionIndex + 1
                } / ${wordsForQuiz.length}`}</Heading>
                <Question />
              </>
            )}
            {quizIsAccomplished && (
              <Flex gap="10px">
                <Button
                  bg="blue.500"
                  color="white"
                  _hover={{ color: 'black', bg: 'blue.300' }}
                  variant="solid"
                  type="button"
                  onClick={handleShowResults}
                >
                  show result
                </Button>
                <Button
                  bg="blue.500"
                  color="white"
                  _hover={{ color: 'black', bg: 'blue.300' }}
                  variant="solid"
                  type="button"
                  onClick={handleTryAgain}
                >
                  try again
                </Button>
              </Flex>
            )}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Quiz;
