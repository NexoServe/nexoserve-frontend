import { SvgIconsType } from './types';

const Minus = ({
  width = '25',
  height = '25',
  viewBox = '0 0 25 25',
  fill,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 12.5H18.75"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Minus;
