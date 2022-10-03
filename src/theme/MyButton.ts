import { ComponentStyleConfig } from '@chakra-ui/theme';

export default {
  baseStyle: {
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: '10px',
    lineHeight: '26px',
    border: 'none',
    outline: 'none',
    _hover: {
      opacity: 0.8,
    },
  },
  variants: {
    rounded: {
      width: '120px',
      height: '34px',
      fontSize: '12px',
      color: 'white',
      borderRadius: '80px',
      border: '1px solid white',
    },
    normal: {
      height: '34px !important',
      width: '100px',
    },
    showMore: {
      height: '34px !important',
      width: '120px',
    },
  },
} as ComponentStyleConfig;
