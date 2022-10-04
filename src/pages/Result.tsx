import { useEffect } from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchTests } from '../store/Slices/testSlice';
import ChartBar from '../components/ChartBar';

function Result() {
  const { tests, newTest } = useAppSelector((state) => state.tests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  return (
    <Box as="section" w="full">
      <Container maxW="6xl">
        <Box pt="50px" pb="50px">
          {newTest && (
            <Flex
              w="full"
              h="100px"
              direction="column"
              align="center"
              justify="center"
              bg="white"
              borderRadius="8px"
              boxShadow="3px 3px 6px gray"
              mb="30px"
            >
              <Text>
                {newTest.result < 40 &&
                  newTest.result >= 0 &&
                  'You can do much better'}
                {newTest.result < 80 &&
                  newTest.result >= 40 &&
                  'Very good job!'}
                {newTest.result >= 80 && 'Excellent!!!'}
              </Text>
              <Text>Result: {newTest.result}%</Text>
              <Text>{newTest.time}</Text>
            </Flex>
          )}
          <Box
            p="15px"
            bg="white"
            borderRadius="8px"
            boxShadow="3px 3px 6px gray"
            mb="20px"
          >
            <ChartBar tests={tests} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Result;
