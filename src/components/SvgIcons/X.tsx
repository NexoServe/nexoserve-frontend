import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const X = ({
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
        d="M24.3177 0.125H28.9179L18.8679 12.8327L30.691 30.125H21.4336L14.1828 19.6373L5.88635 30.125H1.28337L12.0329 16.5327L0.690964 0.125H10.1834L16.7374 9.71115L24.3177 0.125ZM22.7032 27.0788H25.2522L8.79832 3.01115H6.06296L22.7032 27.0788Z"
        fill={fill}
      />
    </svg>
  );
};

export default X;
