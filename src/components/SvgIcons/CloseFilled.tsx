import { SvgIconsType } from './types';

const CloseFilled = ({
  width = '26',
  height = '26',
  viewBox = '0 0 26 26',
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
        d="M13 25.5C9.68389 25.503 6.50273 24.187 4.15788 21.8421C1.81302 19.4973 0.497022 16.3161 0.500005 13V12.75C0.60224 7.74027 3.68475 3.27519 8.33296 1.40382C12.9812 -0.46755 18.2976 0.61611 21.8425 4.1575C25.4206 7.7326 26.4915 13.1117 24.5554 17.7845C22.6194 22.4574 18.0581 25.503 13 25.5ZM13 14.7625L16.2375 18L18 16.2375L14.7625 13L18 9.7625L16.2375 8L13 11.2375L9.76251 8L8.00001 9.7625L11.2375 13L8.00001 16.2375L9.76251 18L13 14.7637V14.7625Z"
        fill="#2E3A59"
      />
    </svg>
  );
};

export default CloseFilled;
