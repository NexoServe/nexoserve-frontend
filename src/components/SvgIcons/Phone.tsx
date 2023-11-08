import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Phone = ({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
  fill = colors.white,
  styleClass,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      className={styleClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1563_120)">
        <path
          d="M15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1563_120">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Phone;
