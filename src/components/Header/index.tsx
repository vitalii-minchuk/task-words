import {
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import GitSvg from '../../assets/svgs/GitSvg';
import MenuSvg from '../../assets/svgs/MenuSvg';
import NavLink from '../common/NavLink';

function Header() {
  return (
    <Box
      as="header"
      w="full"
      bg="#0052cc"
      boxShadow="3px 3px 6px rgba(0, 0, 0, .60)"
    >
      <Container maxW="6xl">
        <Flex
          w="full"
          h="70px"
          align="center"
          gap={{ base: '15px', md: '30px' }}
          justify="space-between"
        >
          <Text
            mb="7px"
            color="white"
            fontFamily="Caveat"
            fontSize={{ base: '22px', md: '30px' }}
          >
            task words
          </Text>
          <Flex
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            direction={{ base: 'column', md: 'row' }}
            justify={{ md: 'space-between' }}
            gap="20px"
          >
            <NavLink to="">Home</NavLink>
            <NavLink to="new">Add New Word</NavLink>
            <NavLink to="quiz">Quiz</NavLink>
            <NavLink to="result">Result</NavLink>
          </Flex>
          <Menu>
            <MenuButton display={{ base: 'block', md: 'none' }} ml="auto">
              <MenuSvg />
            </MenuButton>
            <MenuList bg="#999999">
              <MenuItem _focus={{ bg: '#999999' }}>
                <NavLink to="">Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="new">Add New Word</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="quiz">Quiz</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="result">Result</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            onClick={() =>
              window.open(
                'https://github.com/vitalii-minchuk/task-words',
                '_blank'
              )
            }
            variant="rounded"
            sx={{ display: 'flex', gap: '10px', padding: '8px' }}
          >
            <Text>View code</Text>
            <GitSvg width="24px" height="24px" />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
