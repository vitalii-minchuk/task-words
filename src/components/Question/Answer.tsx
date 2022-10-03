import { Center } from '@chakra-ui/react';

interface IAnswerProps {
  answer: string;
  currentAnswer: string;
  correct: string;
  onClick: (answer: string) => void;
}
function Answer({ onClick, answer, correct, currentAnswer }: IAnswerProps) {
  const isCorrect = currentAnswer && answer === correct;
  const isIncorrect = currentAnswer === answer && currentAnswer !== correct;
  return (
    <Center
      width="260px"
      mx="auto"
      height="40px"
      mb="5px"
      borderRadius="8px"
      cursor="pointer"
      onClick={() => onClick(answer)}
      bg={`${isCorrect ? 'green' : ''} ${isIncorrect ? 'red' : ''}`}
    >
      {answer}
    </Center>
  );
}

export default Answer;
