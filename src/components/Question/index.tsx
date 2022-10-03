import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { goToNextQuestion, selectAnswer } from '../../store/Slices/wordsSlice';
import Answer from './Answer';

function Question() {
  const { wordsForQuiz, currentQuestionIndex, answers, currentAnswer } =
    useAppSelector((state) => state.words);
  const [touched, setTouched] = useState(false);
  const dispatch = useAppDispatch();
  const question = wordsForQuiz[currentQuestionIndex]?.question;

  const handleClick = (answer: string) => {
    setTouched(true);
    dispatch(selectAnswer(answer));
  };

  useEffect(() => {
    if (!touched) return;
    const timer = setTimeout(() => {
      setTouched(false);
      dispatch(goToNextQuestion());
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, touched]);
  return (
    <Box h="250px" w="full" mb="30px">
      <Text mb="20px" textAlign="center" fontSize="18px">
        How do you translate
        <span style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
          {`  ${question}  `}
        </span>
        ?
      </Text>
      <Box>
        {answers?.map((el) => {
          return (
            <Answer
              onClick={handleClick}
              currentAnswer={currentAnswer}
              key={el}
              correct={wordsForQuiz[currentQuestionIndex]?.correct}
              answer={el}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Question;
