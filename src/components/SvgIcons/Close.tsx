import { SvgIconsType } from './types';

const Close = ({
  width = '15',
  height = '15',
  viewBox = '0 0 15 15',
  fill = 'none',
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
        d="M1.21803 0L0 1.21803L6.28197 7.5L0 13.782L1.21803 15L7.5 8.71803L13.782 15L15 13.782L8.71803 7.5L15 1.21803L13.782 0L7.5 6.28197L1.21803 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
