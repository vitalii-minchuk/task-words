import { Button, Flex, Text } from '@chakra-ui/react';
import { Word } from '../../types';

type IWordCardProps = {
  word: Word;
  handleDeleteWord: (obj: Word) => void;
};

function WordCard({ word, handleDeleteWord }: IWordCardProps) {
  return (
    <Flex
      bg="white"
      borderRadius="8px"
      mb="8px"
      p="12px"
      boxShadow="3px 3px 6px gray"
      align="center"
      justify="space-between"
    >
      <Flex>
        <Text fontWeight="bold">{word.word} -</Text>
        <Text>{word.translation}</Text>
      </Flex>
      <Flex>
        <Button
          onClick={() => handleDeleteWord(word)}
          color="red.500"
          variant="text"
          type="button"
        >
          delete
        </Button>
      </Flex>
    </Flex>
  );
}

export default WordCard;
