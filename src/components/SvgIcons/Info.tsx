import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Info = ({
  width = '15',
  height = '15',
  viewBox = '0 0 15 15',
  fill = 'none',
  styleClass,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styleClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 3.75H8.25V5.25H6.75V3.75ZM6.75 6.75H8.25V11.25H6.75V6.75ZM7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM7.5 13.5C4.1925 13.5 1.5 10.8075 1.5 7.5C1.5 4.1925 4.1925 1.5 7.5 1.5C10.8075 1.5 13.5 4.1925 13.5 7.5C13.5 10.8075 10.8075 13.5 7.5 13.5Z"
        fill={colors.black}
      />
    </svg>
  );
};

export default Info;