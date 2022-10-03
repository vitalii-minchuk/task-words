import { Button, Flex } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface IPaginationProps {
  totalItems: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  wordsPerPage: number;
  currentPage: number;
}

function Pagination({
  totalItems,
  wordsPerPage,
  currentPage,
  setCurrentPage,
}: IPaginationProps) {
  const buttons = [] as Array<number>;

  for (let i = 1; i <= Math.ceil(totalItems / wordsPerPage); i += 1) {
    buttons.push(i);
  }

  const handleClick = (i: number) => {
    setCurrentPage(i + 1);
  };

  if (buttons.length === 1) return null;

  return (
    <Flex justify="center" gap="5px">
      {buttons?.map((button, index) => (
        <Button
          border={
            button === currentPage ? '1px solid blue' : '1px solid transparent'
          }
          onClick={() => handleClick(index)}
          key={button}
        >
          {button}
        </Button>
      ))}
    </Flex>
  );
}

export default Pagination;
