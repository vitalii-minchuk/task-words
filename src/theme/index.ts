import { extendTheme } from '@chakra-ui/react';
import Button from './MyButton';

export default extendTheme({
  fonts: {
    body: ["'Nunito', sans-serif", "'Caveat'"],
  },
  styles: {
    global: () => ({
      body: {
        bg: '#E5E5E5',
        fontFamily: "'Nunito', sans-serif",
      },
    }),
  },
  components: {
    Button,
  },
});
