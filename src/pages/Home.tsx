import { Box, Container } from '@chakra-ui/react';
import WordCard from '../components/WordCard';
import { useAppSelector } from '../store';

function Home() {
  const { words } = useAppSelector((state) => state.words);

  return (
    <Box as="section" w="full">
      <Container maxW="6xl">
        <Box pt="50px" pb="20px">
          {words.map((el, i) => (
            <WordCard key={el.word} word={el} index={i + 1} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
