import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Warning = ({
  width = '30',
  height = '30',
  viewBox = '0 0 30 30',
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
      <g clipPath="url(#clip0_1219_112)">
        <path
          d="M14.9997 20.5596C14.161 20.5596 13.458 21.2626 13.458 22.1013C13.458 22.94 14.161 23.6431 14.9997 23.6431C15.8076 23.6431 16.5415 22.94 16.5045 22.1383C16.5415 21.2564 15.8446 20.5596 14.9997 20.5596Z"
          fill={colors.red}
        />
        <path
          d="M29.27 26.0233C30.2382 24.352 30.2444 22.3601 29.2823 20.695L19.6249 3.97023C18.669 2.28665 16.9422 1.2876 15.0058 1.2876C13.0694 1.2876 11.3426 2.29281 10.3867 3.96406L0.716939 20.7074C-0.245107 22.391 -0.23894 24.3952 0.73544 26.0665C1.69749 27.7192 3.41807 28.7121 5.34216 28.7121H24.6324C26.5627 28.7121 28.2956 27.7069 29.27 26.0233ZM27.1732 24.8146C26.6367 25.7396 25.687 26.2885 24.6263 26.2885H5.336C4.28761 26.2885 3.34407 25.7519 2.81987 24.8454C2.28951 23.9265 2.28335 22.8288 2.81371 21.9038L12.4835 5.16662C13.0077 4.24774 13.9451 3.70505 15.0058 3.70505C16.0603 3.70505 17.0039 4.25391 17.5281 5.17279L27.1917 21.9099C27.7097 22.8103 27.7036 23.8957 27.1732 24.8146Z"
          fill={colors.red}
        />
        <path
          d="M14.6175 9.7364C13.8836 9.94607 13.4272 10.6121 13.4272 11.42C13.4642 11.9072 13.4951 12.4005 13.5321 12.8877C13.6369 14.744 13.7418 16.5632 13.8466 18.4195C13.8836 19.0485 14.3708 19.5049 14.9998 19.5049C15.6289 19.5049 16.1222 19.0177 16.153 18.3825C16.153 18.0001 16.153 17.6486 16.19 17.2601C16.2579 16.0699 16.3319 14.8796 16.3997 13.6894C16.4367 12.9185 16.5046 12.1477 16.5416 11.3768C16.5416 11.0993 16.5046 10.8526 16.3997 10.6059C16.0852 9.91524 15.3513 9.56372 14.6175 9.7364Z"
          fill={colors.red}
        />
      </g>
      <defs>
        <clipPath id="clip0_1219_112">
          <rect width="30" height="30" fill={colors.white} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Warning;
