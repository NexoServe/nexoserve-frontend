import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Facebook = ({
  width = '30',
  height = '30',
  viewBox = '0 0 30 30',
  fill = colors.black,
  styleClass,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styleClass}
    >
      <path
        d="M30 15.0376C30 6.73684 23.28 0 15 0C6.72 0 0 6.73684 0 15.0376C0 22.3158 5.16 28.3759 12 29.7744V19.5489H9V15.0376H12V11.2782C12 8.37594 14.355 6.01504 17.25 6.01504H21V10.5263H18C17.175 10.5263 16.5 11.203 16.5 12.0301V15.0376H21V19.5489H16.5V30C24.075 29.2481 30 22.8421 30 15.0376Z"
        fill={fill}
      />
    </svg>
  );
};

export default Facebook;