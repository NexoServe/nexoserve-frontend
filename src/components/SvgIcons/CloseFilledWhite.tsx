import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const CloseFilledWhite = ({
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
      <rect
        width="30"
        height="30"
        rx="15"
        fill={colors.white}
        fillOpacity="0.8"
      />
      <g clipPath="url(#clip0_964_523)">
        <path
          d="M10.812 10L10 10.812L14.188 15L10 19.188L10.812 20L15 15.812L19.188 20L20 19.188L15.812 15L20 10.812L19.188 10L15 14.188L10.812 10Z"
          fill={colors.black}
        />
      </g>
      <defs>
        <clipPath id="clip0_964_523">
          <rect
            width="10"
            height="10"
            fill={colors.white}
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseFilledWhite;
