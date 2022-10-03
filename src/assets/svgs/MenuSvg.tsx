import { Box } from '@chakra-ui/react';

interface IMenuSvgProps {
  width?: string;
  height?: string;
  fill?: string;
  fillPath?: string;
}

function MenuSvg({ width, height, fill, fillPath }: IMenuSvgProps) {
  return (
    <Box w={width} h={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 22 17"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM5 8.5C5 7.67157 5.67157 7 6.5 7H20.5C21.3284 7 22 7.67157 22 8.5C22 9.32843 21.3284 10 20.5 10H6.5C5.67157 10 5 9.32843 5 8.5ZM1.5 14C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H20.5C21.3284 17 22 16.3284 22 15.5C22 14.6716 21.3284 14 20.5 14H1.5Z"
          fill={fillPath}
        />
      </svg>
    </Box>
  );
}

MenuSvg.defaultProps = {
  height: '22px',
  width: '17px',
  fill: 'none',
  fillPath: 'white',
};

export default MenuSvg;
