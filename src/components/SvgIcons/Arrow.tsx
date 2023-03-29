import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Arrow = ({
  width = '20',
  height = '20',
  viewBox = '0 0 20 20',
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
        d="M17.0708 12.9458L9.99997 5.875L2.92913 12.9458L4.10747 14.125L9.99997 8.23167L15.8925 14.125L17.0708 12.9458Z"
        fill={colors.darkGray}
      />
    </svg>
  );
};

export default Arrow;
