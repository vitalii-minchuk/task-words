import { Flex, Text } from '@chakra-ui/react';
import { Word } from '../../types';

type IWordCardProps = {
  word: Word;
  index: number;
};

function WordCard({ word, index }: IWordCardProps) {
  return (
    <Flex
      bg="white"
      borderRadius="8px"
      mb="8px"
      p="12px"
      boxShadow="3px 3px 6px gray"
      align="center"
      justify="space-between"
      _hover={{}}
    >
      <Flex>
        <Text fontWeight="bold">
          {index}. {word.word} -
        </Text>
        <Text>{word.translation}</Text>
      </Flex>
      <Flex>
        <button type="button">ok</button>
      </Flex>
    </Flex>
  );
}

export default WordCard;
