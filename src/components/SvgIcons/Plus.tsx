import { SvgIconsType } from './types';

const Plus = ({
  width = '25',
  height = '25',
  viewBox = '0 0 25 25',
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
        d="M6.25 12.5H18.75M12.5 18.75V6.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
